import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String, // hashed
    phone: String,
    role: { type: String, enum: ["client", "ADMIN"], default: "client" },
    resumeUsage: { type: Number, default: 0 },
    atsUsage: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    refreshToken: String,
    resume: {
      personalInfo: {
        fullName: String,
        email: String,
        phone: String,
        address: String,
        linkedin: String,
        github: String,
        portfolio: String,
      },
      summary: String,
      experience: [{
        company: String,
        position: String,
        startDate: Date,
        endDate: Date,
        current: Boolean,
        description: String,
      }],
      education: [{
        institution: String,
        degree: String,
        field: String,
        startDate: Date,
        endDate: Date,
        gpa: String,
      }],
      skills: [String],
      projects: [{
        name: String,
        description: String,
        technologies: [String],
        github: String,
        demo: String,
      }],
      certifications: [{
        name: String,
        issuer: String,
        date: Date,
        credentialId: String,
      }],
    },
  },
  { timestamps: true }
);

// Password hash and compare logic as in Agent/Client
userSchema.pre("save", async function (next) {
  if (this.password === null) {
    return next();
  }
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10); // Hash the password before saving
  next();
});

// Instance method to check if the password is correct
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password); // Compare given password with hashed password
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email, // fixed property name
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "1h" }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign({ _id: this._id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY || "7d",
  });
};

export const User = mongoose.model("User", userSchema);
