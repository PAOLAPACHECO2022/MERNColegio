import Course from "../models/Course.js";
import Activity from "../models/Activity.js";
import Student from "../models/Student.js";
// CREATE
export const registerActivity = async (req, res) => {
  try {
    const {
      area,
      indicator,
      actity,
      statea,
      date,
      studentId,
      courseId,
      period,
    } = req.body;
    const student = await Student.findById(studentId);
    const course = await Course.findById(courseId);
    const newActivity = new Activity({
      area,
      indicator,
      actity,
      statea,
      date,
      studentId,
      studentName: `${student.firstName} ${student.lastName}`,
      courseId,
      courseName: course.nameCourse,
      period,
    });
    const savedActivity = await newActivity.save();
    res.status(201).json(savedActivity);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// READ
export const getActivitiesByCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const activity = await Activity.find({ courseId });
    res.status(201).json(activity);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getActivitiesByStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const activity = await Activity.find({ studentId });
    res.status(201).json(activity);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getActivity = async (req, res) => {
  try {
    const { activityId } = req.params;
    const activity = await Activity.findById(activityId);
    res.status(201).json(activity);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// UPDATE
export const editActivity = async (req, res) => {
  try {
    const { activityId } = req.params;
    const {
      area,
      indicator,
      actity,
      statea,
      date,
      studentId,
      courseId,
      period,
     
    } = req.body;
    const updatedActivity = await Activity.findByIdAndUpdate(
      activityId,
      { area, 
        indicator,
        actity,
        statea,
        date,
        studentId, 
        courseId, 
        period },
      { new: true }
    );
    res.status(200).json(updatedActivity);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// DELETE
export const deleteActivity = async (req, res) => {
  try {
    const { activityId } = req.params;
    const deletedActivity = await Activity.findByIdAndDelete(activityId);
    res.status(200).json(deletedActivity);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
