import mongoose from "mongoose";

const resumeVersionSchema = new mongoose.Schema({
  versionNumber: { type: Number, required: true, default: 1 },
  title: { type: String, required: true },
  personalInfo: {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    location: { type: String },
    website: { type: String },
    linkedIn: { type: String },
    github: { type: String }
  },
  summary: { type: String },
  experience: [{
    jobTitle: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    current: { type: Boolean, default: false },
    description: { type: String },
    achievements: [{ type: String }]
  }],
  education: [{
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    location: { type: String },
    graduationDate: { type: Date },
    gpa: { type: String },
    coursework: [{ type: String }]
  }],
  skills: {
    technical: [{ type: String }],
    soft: [{ type: String }],
    languages: [{ type: String }],
    certifications: [{ type: String }]
  },
  projects: [{
    name: { type: String, required: true },
    description: { type: String },
    technologies: [{ type: String }],
    url: { type: String },
    github: { type: String },
    startDate: { type: Date },
    endDate: { type: Date }
  }],
  template: {
    name: { type: String, enum: ['modern', 'classic', 'ats-safe'], default: 'modern' },
    theme: {
      primaryColor: { type: String, default: '#3B82F6' },
      fontFamily: { type: String, default: 'Inter' },
      fontSize: { type: String, default: '12px' }
    }
  },
  atsScore: {
    overallScore: { type: Number, min: 0, max: 100 },
    breakdown: {
      keywordMatch: { type: Number, min: 0, max: 100 },
      formatting: { type: Number, min: 0, max: 100 },
      sentenceStructure: { type: Number, min: 0, max: 100 },
      length: { type: Number, min: 0, max: 100 }
    },
    feedback: [{ type: String }],
    lastAnalyzed: { type: Date }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const resumeSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  title: { type: String, required: true },
  description: { type: String },
  status: { 
    type: String, 
    enum: ['draft', 'published', 'archived'], 
    default: 'draft' 
  },
  versions: [resumeVersionSchema],
  currentVersion: { type: Number, default: 1 },
  tags: [{ type: String }],
  isPublic: { type: Boolean, default: false },
  downloadCount: { type: Number, default: 0 },
  lastDownloaded: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { 
  timestamps: true 
});

// Middleware to update the updatedAt field
resumeSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Virtual to get the current version data
resumeSchema.virtual('currentVersionData').get(function() {
  return this.versions.find(v => v.versionNumber === this.currentVersion);
});

// Method to create a new version
resumeSchema.methods.createNewVersion = function(versionData) {
  const newVersionNumber = this.versions.length + 1;
  const newVersion = {
    ...versionData,
    versionNumber: newVersionNumber,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  this.versions.push(newVersion);
  this.currentVersion = newVersionNumber;
  return newVersion;
};

// Method to get version by number
resumeSchema.methods.getVersion = function(versionNumber) {
  return this.versions.find(v => v.versionNumber === versionNumber);
};

// Method to update ATS score
resumeSchema.methods.updateATSScore = function(scoreData) {
  const currentVersionIndex = this.versions.findIndex(v => v.versionNumber === this.currentVersion);
  if (currentVersionIndex !== -1) {
    this.versions[currentVersionIndex].atsScore = {
      ...scoreData,
      lastAnalyzed: new Date()
    };
  }
};

// Static method to find resumes by user with pagination
resumeSchema.statics.findByUserWithPagination = function(userId, page = 1, limit = 10) {
  const skip = (page - 1) * limit;
  return this.find({ userId })
    .sort({ updatedAt: -1 })
    .skip(skip)
    .limit(limit)
    .populate('userId', 'name email');
};

// Index for better query performance
resumeSchema.index({ userId: 1, updatedAt: -1 });
resumeSchema.index({ status: 1 });
resumeSchema.index({ tags: 1 });

const Resume = mongoose.model('Resume', resumeSchema);

export default Resume;
