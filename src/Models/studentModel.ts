import mongoose from "mongoose";
import { StudentInterface } from "../types";
import Parent from "./parentModel";

const studentSchema = new mongoose.Schema<StudentInterface>({
  studentId: {
    type: String,
    unique: true,
    required: [true, "Student must have a unique studentId"],
  },
  name: {
    type: String,
    required: [true, "Student must have a name"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Student must have an email address"],
  },
  photo: {
    type: String,
  },
  phone: {
    type: String,
  },
  grade: {
    type: Number,
    required: [true, "Student must have a grade"],
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    required: [true, "Student must be assigned to a class"],
  },
  address: {
    type: String,
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Parent",
    required: [true, "Student must have a parent"],
  },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
