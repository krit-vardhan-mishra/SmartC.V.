import { asyncHandler } from "../utils/AsyncHandeler.js";
import { User } from "../models/User.Model.js";
import { generateAccessAndRefreshToken } from "../utils/GenerateAccessAndRefreshToken.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResposne.js";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const PDFDocument = require('pdfkit');

// register user api
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, phone } = req.body;
  if (!(email && password && name && phone)) {
    throw new ApiError(400, "All fields are required");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(400, "User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    phone,
  });

  const registerUser = await User.findOne({ email }).select(
    "-password -refreshToken"
  );

  if (!registerUser)
    throw new ApiError(500, "Something went wrong while registering the user");
  

  return res
    .status(200)
    .json(new ApiResponse(200, "User registered successfully", registerUser));
});

// login user api
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!(email && password)) {
    throw new ApiError(400, "All fields are required");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(400, "Invalid credentials");
  }

  // Generate access and refresh tokens

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);
  // Save the refresh token in the user document
  const loggedInUser = await User.findById(user._id).select("-password -refreshToken");
  const options = {
    httpOnly: true, //only server can modify them
    secure: true

  };
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(

        200, {
        user: loggedInUser, accessToken, refreshToken
      },
        "User logged in successfully"
      )
    );

})

export const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {

        refreshToken: undefined
      }
    },
    {
      new: true
    }
  )
  const options = {
    httpOnly: true, //only server can modify them
    secure: true
  }

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)

    .json(new ApiResponse(200, {}, "User logged out"))

});

// Update resume for authenticated user
export const updateResume = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { resume } = req.body;

  // Ensure the user can only update their own resume
  if (id !== req.user._id.toString()) {
    throw new ApiError(403, "You can only update your own resume");
  }

  // Validate resume data
  if (!resume || typeof resume !== 'object') {
    throw new ApiError(400, "Valid resume data is required");
  }

  // Update the user's resume
  const updatedUser = await User.findByIdAndUpdate(
    id,
    { $set: { resume } },
    { new: true, runValidators: true }
  ).select("-password -refreshToken");

  if (!updatedUser) {
    throw new ApiError(404, "User not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, updatedUser, "Resume updated successfully"));
});

export const downloadResume = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (id !== req.user._id.toString()) {
    throw new ApiError(403, "You can only download your own resume");
  }
  const user = await User.findById(id).select("name email phone resume");
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  if (!user.resume) {
    throw new ApiError(404, "Resume not found");
  }
  const resume = user.resume;  const doc = new PDFDocument();
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
  doc.pipe(res);
  doc.fontSize(20).text(
    user.name || resume.personalInfo?.fullName || 'Name',
    { align: 'center' }
  );
  doc.fontSize(12).text(`Email: ${user.email}`, { align: 'center' });
  doc.fontSize(12).text(`Phone: ${user.phone}`, { align: 'center' });
  doc.moveDown();
  doc.fontSize(14).text('Personal Information');
  doc.fontSize(12).text(
    `Address: ${resume.personalInfo?.address || ''}`
  );
  doc.text(
    `LinkedIn: ${resume.personalInfo?.linkedin || ''}`
  );
  doc.text(
    `GitHub: ${resume.personalInfo?.github || ''}`
  );
  doc.text(
    `Portfolio: ${resume.personalInfo?.portfolio || ''}`
  );
  doc.moveDown();  if (resume.summary) {
    doc.fontSize(14).text('Summary');
    doc.fontSize(12).text(resume.summary);
    doc.moveDown();
  }
  if (resume.experience && resume.experience.length > 0) {
    doc.fontSize(14).text('Experience');
    resume.experience.forEach(exp => {
      doc.fontSize(12).text(`${exp.position} at ${exp.company}`);
      doc.text(`${exp.startDate ? new Date(exp.startDate).toLocaleDateString() : ''} - ${exp.endDate ? new Date(exp.endDate).toLocaleDateString() : (exp.current ? 'Present' : '')}`);
      doc.text(exp.description || '');
      doc.moveDown(0.5);
    });
    doc.moveDown();
  }
  if (resume.education && resume.education.length > 0) {
    doc.fontSize(14).text('Education');
    resume.education.forEach(edu => {
      doc.fontSize(12).text(`${edu.degree} in ${edu.field || ''}, ${edu.institution}`);
      doc.text(`${edu.startDate ? new Date(edu.startDate).toLocaleDateString() : ''} - ${edu.endDate ? new Date(edu.endDate).toLocaleDateString() : ''}`);
      doc.text(`GPA: ${edu.gpa || ''}`);
      doc.moveDown(0.5);
    });
    doc.moveDown();
  }
  if (resume.skills && resume.skills.length > 0) {
    doc.fontSize(14).text('Skills');
    doc.fontSize(12).text(resume.skills.join(', '));
    doc.moveDown();
  }
  if (resume.projects && resume.projects.length > 0) {
    doc.fontSize(14).text('Projects');
    resume.projects.forEach(proj => {
      doc.fontSize(12).text(proj.name);
      doc.text(proj.description || '');
      doc.text(`Technologies: ${proj.technologies ? proj.technologies.join(', ') : ''}`);
      doc.text(`GitHub: ${proj.github || ''}`);
      doc.text(`Demo: ${proj.demo || ''}`);
      doc.moveDown(0.5);
    });
    doc.moveDown();
  }
  if (resume.certifications && resume.certifications.length > 0) {
    doc.fontSize(14).text('Certifications');
    resume.certifications.forEach(cert => {
      doc.fontSize(12).text(`${cert.name}, ${cert.issuer}`);
      doc.text(`Date: ${cert.date ? new Date(cert.date).toLocaleDateString() : ''}`);
      doc.text(`Credential ID: ${cert.credentialId || ''}`);
      doc.moveDown(0.5);
    });
  }
  doc.end();
});
