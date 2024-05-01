import Student from "../models/Student.js";
import Grade from "../models/Grade.js";
import Score from "../models/Score.js";
import Activity from "../models/Activity.js";
import fs from "fs-extra";
import bcrypt from "bcrypt";
import Attendance from "../models/Attendance.js";


// READ
export const getStudentsByGrade = async (req, res) => {
  try {
    const { gradeId } = req.params;
    const student = await Student.find({ gradeId });
    res.status(201).json(student);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const student = await Student.findById(studentId);
    res.status(201).json(student);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const quantityStudents = async (req, res) => {
  try {
    const countStudents = await Student.countDocuments({});
    res.status(201).json(countStudents);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
}

// UPDATE
export const editStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const {
      firstName,
      lastName,
      dni,
      password,
      phone,
      fechaNacimiento,
      nacionality,
      gradeId,
    } = req.body;
    const student = await Student.findById(studentId);
    const grade = await Grade.findById(gradeId);



    if (password === "") {
      const updatedStudent = await Student.findByIdAndUpdate(
        studentId,
        {
          firstName,
          lastName,
          dni,
          phone,
          fechaNacimiento,
          nacionality,
          gradeId,
          gradeName: grade.gradeName,
        },
        { new: true }
      );
      await Score.updateMany(
        { studentId: studentId },
        { studentName: `${firstName} ${lastName}` }
      );
      await Activity.updateMany(
        { studentId: studentId },
        { studentName: `${firstName} ${lastName}` }
      );
      await Attendance.updateMany(
        { studentId: studentId },
        { studentFirstName: firstName, studentLastName: lastName }
      );
   
      res.status(200).json(updatedStudent);
    } else {
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
      const updatedStudent = await Student.findByIdAndUpdate(
        studentId,
        {
          firstName,
          lastName,
          dni,
          password: passwordHash,
          phone,
          fechaNacimiento,
          nacionality,
          gradeId,
          gradeName: grade.gradeName,
        },
        { new: true }
      );
      await Score.updateMany(
        { studentId: studentId },
        { studentName: `${firstName} ${lastName}` }
      );
      await Activity.updateMany(
        { studentId: studentId },
        { studentName: `${firstName} ${lastName}` }
      );
      await Attendance.updateMany(
        { studentId: studentId },
        { studentFirstName: firstName, studentLastName: lastName }
      );
   
      res.status(200).json(updatedStudent);
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// DELETE
export const deleteStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const deletedStudent = await Student.findByIdAndDelete(studentId);
    const filePath = "./public/assets/students/" + deletedStudent.picturePath;
    if (fs.existsSync(filePath)) {
      fs.unlink(filePath, function (err) {
        if (err) throw err;
        console.log("File deleted!");
      });
    }
    res.status(200).json(deletedStudent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
