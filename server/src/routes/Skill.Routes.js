// import express from "express";
// import axios from "axios";

// const router = express.Router();

// router.post("/match", async (req, res) => {
//   const { resume, jobDescription } = req.body;

//   try {
//     const response = await axios.post("http://localhost:9000/match", {
//       resume,
//       jd: jobDescription
//     });

//     res.json(response.data);
//   } catch (error) {
//     console.error("Skill match error:", error.message);
//     res.status(500).json({ error: "Skill matching failed" });
//   }
// });

// export default router;



// skillroute.js
import express from "express";
import axios from "axios";
import fs from "fs";
import path from "path";
import { upload } from "../middlewares/Multer.js";

const router = express.Router();

// Two file uploads: resume + jd
router.post("/match", upload.fields([
  { name: "resume", maxCount: 1 },
  { name: "jobDescription", maxCount: 1 },
]), async (req, res) => {
  try {
    const resumePath = req.files.resume[0].path;
    const jdPath = req.files.jobDescription[0].path;

    // Read both files and convert to base64 (if sending as text) or stream
    const resumeFile = fs.readFileSync(resumePath, "base64");
    const jdFile = fs.readFileSync(jdPath, "base64");

    // Call Python ATS API
    const response = await axios.post("http://localhost:9000/match", {
      resume: resumeFile,
      jd: jdFile,
      resume_name: req.files.resume[0].originalname,
      jd_name: req.files.jobDescription[0].originalname,
    });

    res.json(response.data);

    // Optionally: delete temp files
    fs.unlinkSync(resumePath);
    fs.unlinkSync(jdPath);
  } catch (error) {
    console.error("Skill match error:", error.message);
    res.status(500).json({ error: "Skill matching failed" });
  }
});

export default router;
