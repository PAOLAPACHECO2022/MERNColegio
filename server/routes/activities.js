import express from "express";
import { deleteActivity, editActivity, getActivity, getActivitiesByCourse, getActivitiesByStudent, registerActivity} from "../controllers/activities.js";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

// CREATE
router.post("/createActivity", verifyToken, registerActivity);

// READ
router.get("/:courseId/course", verifyToken, getActivitiesByCourse);
router.get("/:studentId/student", verifyToken, getActivitiesByStudent);
router.get("/:activityId/activity", verifyToken, getActivity);

// UPDATE
router.patch("/:activityId/edit", verifyToken, editActivity);

// DELETE
router.delete("/:activityId/delete", verifyToken, deleteActivity);

export default router;