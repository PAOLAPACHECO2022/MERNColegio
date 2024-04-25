import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: {type: String, unique: true},
        password: String,
        role: String,
        phone: String,
        area: String,
    },
    { timestamps: true }
);

const Teacher = mongoose.model("Teacher", TeacherSchema);
export default Teacher;