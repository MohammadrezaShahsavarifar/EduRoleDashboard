import mongoose from "mongoose";
import { TeacherInterface } from "../types";

const teacherSchema = new mongoose.Schema<TeacherInterface>({
  teacherId: {
    type: String,
    unique: true,
    required: [true, "Teacher must have a unique teacherId"],
  },
  name: {
    type: String,
    required: [true, "Teacher must have a name"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Teacher must have an email address"],
  },
  photo: {
    type: String,
  },
  phone: { type: String },
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
  classes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }],
  address: { type: String },
});

const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;
