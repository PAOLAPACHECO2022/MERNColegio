import Performancec from "../models/Performancec.js";
import Student from "../models/Student.js";

// CREATE
export const registerPerformancec = async (req, res) => {
    try {
        const {date, performancecData, period, gradeId} = req.body;
        const students = await Student.find({gradeId}).exec();

        students.forEach(async (student) => {
            await Performancec.findOneAndDelete({date, studentId: student._id});
        })       

        const savedPerformancec= await Promise.all(performancecData.map(async data => {
            const performancec = new Performancec({
                status: data.status,
                date: date,
                studentId: data.student._id,
                studentFirstName: data.student.firstName,
                studentLastName: data.student.lastName,
                period: period,
            })
            return performancec.save();
        }));
        res.status(201).json(savedPerformancec);
    } catch (error) {
        console.log(error);
        res.status(409).json({message: error.message});
    }
}

// READ
export const getPerformancec = async (req, res) => {
    try {
        const {gradeId, date} = req.params;
        const performancecData = await Performancec.find({date: date});
        const students = await Student.find({gradeId});
        const studentsData = students.map(student => {
            const performancec = performancecData.find(a => a.studentId.toString() === student._id.toString());
            return {
                student: {_id: student._id, firstName: student.firstName, lastName: student.lastName},
                status: performancec ? performancec.status : 'High disciplinary deficiency'
            };
        });
        res.status(200).json(studentsData);
    } catch (error) {
        console.log(error);
        res.status(409).json({message: error.message});
    }
}

export const getPerformancecbyStudent = async (req, res) => {
    try {
        const {studentId} = req.params;
        const performancecRecord = await Performancec.find({studentId, status: {$in: ["Very good discipline", "High disciplinary deficiency"]}});
        res.status(200).json(performancecRecord);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}
