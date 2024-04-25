
import express from "express";
import { getPerformancec, getPerformancecbyStudent, registerPerformancec } from "../controllers/performancec.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// CREATE
router.post("/registerPerformancec", verifyToken, registerPerformancec);

// READ
router.get("/:gradeId/:date", verifyToken, getPerformancec);
router.get("/:studentId", verifyToken, getPerformancecbyStudent);

export default router;