import Resume from '../models/Resume.Model.js';
import { asyncHandler } from '../utils/AsyncHandeler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResposne.js';

// @desc    Create a new resume
// @route   POST /api/resumes
// @access  Private
const createResume = asyncHandler(async (req, res) => {
  const { title, description, personalInfo, summary, experience, education, skills, projects, template } = req.body;

  if (!title || !personalInfo?.fullName || !personalInfo?.email) {
    throw new ApiError(400, "Title, full name, and email are required");
  }

  // Create initial version data
  const initialVersion = {
    title,
    personalInfo,
    summary: summary || "",
    experience: experience || [],
    education: education || [],
    skills: skills || { technical: [], soft: [], languages: [], certifications: [] },
    projects: projects || [],
    template: template || { name: 'modern', theme: { primaryColor: '#3B82F6', fontFamily: 'Inter', fontSize: '12px' } }
  };

  // Create resume with initial version
  const resume = new Resume({
    userId: req.user._id,
    title,
    description: description || "",
    versions: [{ ...initialVersion, versionNumber: 1 }],
    currentVersion: 1
  });

  const savedResume = await resume.save();
  await savedResume.populate('userId', 'name email');

  res.status(201).json(
    new ApiResponse(201, savedResume, "Resume created successfully")
  );
});

// @desc    Get all resumes for authenticated user
// @route   GET /api/resumes
// @access  Private
const getUserResumes = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const status = req.query.status;
  const search = req.query.search;

  let query = { userId: req.user._id };

  // Add status filter if provided
  if (status && ['draft', 'published', 'archived'].includes(status)) {
    query.status = status;
  }

  // Add search functionality
  if (search) {
    query.$or = [
      { title: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } },
      { tags: { $in: [new RegExp(search, 'i')] } }
    ];
  }

  const resumes = await Resume.find(query)
    .sort({ updatedAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit)
    .populate('userId', 'name email')
    .select('-versions'); // Exclude versions for list view for performance

  const total = await Resume.countDocuments(query);

  res.status(200).json(
    new ApiResponse(200, {
      resumes,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalResumes: total,
        hasNext: page < Math.ceil(total / limit),
        hasPrev: page > 1
      }
    }, "Resumes retrieved successfully")
  );
});

// @desc    Get a specific resume by ID
// @route   GET /api/resumes/:id
// @access  Private
const getResumeById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { version } = req.query; // Optional version parameter

  const resume = await Resume.findOne({ 
    _id: id, 
    userId: req.user._id 
  }).populate('userId', 'name email');

  if (!resume) {
    throw new ApiError(404, "Resume not found");
  }

  // If specific version requested, return only that version
  if (version) {
    const versionNumber = parseInt(version);
    const specificVersion = resume.getVersion(versionNumber);
    
    if (!specificVersion) {
      throw new ApiError(404, `Version ${versionNumber} not found`);
    }
    
    return res.status(200).json(
      new ApiResponse(200, { 
        ...resume.toObject(), 
        currentVersionData: specificVersion 
      }, "Resume version retrieved successfully")
    );
  }

  res.status(200).json(
    new ApiResponse(200, resume, "Resume retrieved successfully")
  );
});

// @desc    Update a resume
// @route   PUT /api/resumes/:id
// @access  Private
const updateResume = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description, status, tags, createNewVersion, ...versionData } = req.body;

  const resume = await Resume.findOne({ 
    _id: id, 
    userId: req.user._id 
  });

  if (!resume) {
    throw new ApiError(404, "Resume not found");
  }

  // Update resume metadata
  if (title) resume.title = title;
  if (description !== undefined) resume.description = description;
  if (status && ['draft', 'published', 'archived'].includes(status)) {
    resume.status = status;
  }
  if (tags) resume.tags = tags;

  // Handle version updates
  if (createNewVersion) {
    // Create a new version
    if (!versionData.title) {
      throw new ApiError(400, "Version title is required for new version");
    }
    resume.createNewVersion(versionData);
  } else {
    // Update current version
    const currentVersionIndex = resume.versions.findIndex(
      v => v.versionNumber === resume.currentVersion
    );
    
    if (currentVersionIndex !== -1) {
      // Update only provided fields
      Object.keys(versionData).forEach(key => {
        if (versionData[key] !== undefined) {
          resume.versions[currentVersionIndex][key] = versionData[key];
        }
      });
      resume.versions[currentVersionIndex].updatedAt = new Date();
    }
  }

  const updatedResume = await resume.save();
  await updatedResume.populate('userId', 'name email');

  res.status(200).json(
    new ApiResponse(200, updatedResume, "Resume updated successfully")
  );
});

// @desc    Delete a resume
// @route   DELETE /api/resumes/:id
// @access  Private
const deleteResume = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const resume = await Resume.findOne({ 
    _id: id, 
    userId: req.user._id 
  });

  if (!resume) {
    throw new ApiError(404, "Resume not found");
  }

  await Resume.findByIdAndDelete(id);

  res.status(200).json(
    new ApiResponse(200, null, "Resume deleted successfully")
  );
});

// @desc    Duplicate a resume
// @route   POST /api/resumes/:id/duplicate
// @access  Private
const duplicateResume = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const originalResume = await Resume.findOne({ 
    _id: id, 
    userId: req.user._id 
  });

  if (!originalResume) {
    throw new ApiError(404, "Resume not found");
  }

  const currentVersionData = originalResume.currentVersionData;
  
  const duplicateResume = new Resume({
    userId: req.user._id,
    title: title || `${originalResume.title} (Copy)`,
    description: originalResume.description,
    versions: [{
      ...currentVersionData.toObject(),
      versionNumber: 1,
      title: title || `${currentVersionData.title} (Copy)`,
      createdAt: new Date(),
      updatedAt: new Date()
    }],
    currentVersion: 1,
    tags: [...originalResume.tags]
  });

  const savedResume = await duplicateResume.save();
  await savedResume.populate('userId', 'name email');

  res.status(201).json(
    new ApiResponse(201, savedResume, "Resume duplicated successfully")
  );
});

// @desc    Get resume analytics
// @route   GET /api/resumes/:id/analytics
// @access  Private
const getResumeAnalytics = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const resume = await Resume.findOne({ 
    _id: id, 
    userId: req.user._id 
  });

  if (!resume) {
    throw new ApiError(404, "Resume not found");
  }

  const analytics = {
    totalVersions: resume.versions.length,
    downloadCount: resume.downloadCount,
    lastDownloaded: resume.lastDownloaded,
    atsScore: resume.currentVersionData?.atsScore,
    status: resume.status,
    createdAt: resume.createdAt,
    lastUpdated: resume.updatedAt
  };

  res.status(200).json(
    new ApiResponse(200, analytics, "Resume analytics retrieved successfully")
  );
});

// @desc    Update ATS score for a resume
// @route   POST /api/resumes/:id/ats-score
// @access  Private
const updateATSScore = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { overallScore, breakdown, feedback } = req.body;

  if (!overallScore || !breakdown) {
    throw new ApiError(400, "Overall score and breakdown are required");
  }

  const resume = await Resume.findOne({ 
    _id: id, 
    userId: req.user._id 
  });

  if (!resume) {
    throw new ApiError(404, "Resume not found");
  }

  resume.updateATSScore({
    overallScore,
    breakdown,
    feedback: feedback || []
  });

  await resume.save();

  res.status(200).json(
    new ApiResponse(200, resume.currentVersionData.atsScore, "ATS score updated successfully")
  );
});

export {
  createResume,
  getUserResumes,
  getResumeById,
  updateResume,
  deleteResume,
  duplicateResume,
  getResumeAnalytics,
  updateATSScore
};
