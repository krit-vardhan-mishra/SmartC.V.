import Resume from "../models/resumeModel.js";

// Create Resume
export const createResume = async (req, res) => {
  try {
    const resume = new Resume({
      ...req.body,
      user: req.user.id
    });
    const savedResume = await resume.save();
    res.status(201).json(savedResume);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get User Resumes
export const getUserResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ user: req.user.id });
    res.status(200).json(resumes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Resume
export const deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!resume) return res.status(404).json({ message: "Resume not found or unauthorized" });
    res.status(200).json({ message: "Resume deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
