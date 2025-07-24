import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/match", async (req, res) => {
  const { resume, jobDescription } = req.body;

  try {
    const response = await axios.post("http://localhost:8000/match", {
      resume,
      jd: jobDescription
    });

    res.json(response.data);
  } catch (error) {
    console.error("Skill match error:", error.message);
    res.status(500).json({ error: "Skill matching failed" });
  }
});

export default router;
