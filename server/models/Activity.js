import mongoose from "mongoose";

const ActivitySchema = new mongoose.Schema(
    { 
        area: String,
        indicator: String,
        actity: String,
        statea: String,
        date: Date,
        studentId: String,
        studentName: String,
        courseId: String,
        courseName: String,
        period: String,
    },
    {timestamps: true}
);

const Activity = mongoose.model("Activity", ActivitySchema);
export default Activity;
