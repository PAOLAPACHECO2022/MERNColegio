
import mongoose from "mongoose";

const PerformancecSchema = new mongoose.Schema(
    {
        status: String,
        date: Date,
        studentId: String,
        studentFirstName: String,
        studentLastName: String,
        period: String,
    },
    {timestamps: true}
);

const Performancec = mongoose.model("Performancec", PerformancecSchema);
export default Performancec;