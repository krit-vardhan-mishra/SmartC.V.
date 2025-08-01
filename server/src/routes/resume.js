import express from "express";
import { createResume, deleteResume, getUserResumes } from "../controllers/resumeController.js";
import verifyUser from "../middleware/verifyUser.js";

const router = express.Router();

router.post("/create", verifyUser, createResume);
router.delete("/:id", verifyUser, deleteResume);
router.get("/my-resumes", verifyUser, getUserResumes);

export default router;
