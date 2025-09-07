import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    experience: [
      {
        company: {
          type: String,
          required: true,
        },
        role: {
          type: String,
          required: true,
        },
        duration: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],
    education: [
      {
        school: {
          type: String,
          required: true,
        },
        degree: {
          type: String,
          required: true,
        },
        year: {
          type: String,
          required: true,
        },
      },
    ],
    skills: [
      {
        type: String,
        required: true,
      },
    ],
    projects: [
      {
        title: {
          type: String,
          required: true,
        },
        link: {
          type: String,
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],
    certifications: [
      {
        type: String,
      },
    ],
    socialLinks: {
      linkedin: {
        type: String,
      },
      github: {
        type: String,
      },
      portfolio: {
        type: String,
      },
    },
    theme: {
      type: String,
      default: "default",
    },
  },
  { timestamps: true }
);

export const Resume = mongoose.model("Resume", resumeSchema); 