import { Router } from "express";
import {
  createResume,
  getUserResumes,
  getResumeById,
  updateResume,
  deleteResume,
  duplicateResume,
  getResumeAnalytics,
  updateATSScore
} from '../controllers/Resume.Controller.js';
import { verifyJWT } from "../middlewares/auth.middleware.js";

const ResumeRouter = Router();

// Apply authentication middleware to all routes
ResumeRouter.use(verifyJWT);

// Resume CRUD operations
ResumeRouter.route('/')
  .get(getUserResumes)     // GET /api/resumes - Get all user resumes with pagination
  .post(createResume);     // POST /api/resumes - Create new resume

ResumeRouter.route('/:id')
  .get(getResumeById)      // GET /api/resumes/:id - Get specific resume
  .put(updateResume)       // PUT /api/resumes/:id - Update resume
  .delete(deleteResume);   // DELETE /api/resumes/:id - Delete resume

// Additional resume operations
ResumeRouter.route('/:id/duplicate')
  .post(duplicateResume);  // POST /api/resumes/:id/duplicate - Duplicate resume

ResumeRouter.route('/:id/analytics')
  .get(getResumeAnalytics); // GET /api/resumes/:id/analytics - Get resume analytics

ResumeRouter.route('/:id/ats-score')
  .post(updateATSScore);   // POST /api/resumes/:id/ats-score - Update ATS score

export default ResumeRouter;
