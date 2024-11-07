import mongoose from "mongoose";
import Teacher from "./teacherModel";
import { ClassInterface } from "../types";

const classSchema = new mongoose.Schema<ClassInterface>({
  name: {
    type: String,
    required: [true, "Class must have a name"],
    unique: true,
  },
  capacity: {
    type: Number,
    required: [true, "Class must have a capacity"],
  },
  grade: {
    type: Number,
    required: [true, "Class must have a grade"],
  },
  supervisor: {
    type: String,
    required: [true, "Class must have a supervisor"],
  },
  teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Teacher" }],
});

const Class = mongoose.model("Class", classSchema);

export default Class;
