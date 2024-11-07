import mongoose from "mongoose";
import Teacher from "./teacherModel";
import { SubjectInterface } from "../types";

const subjectSchema = new mongoose.Schema<SubjectInterface>({
  name: {
    type: String,
    required: [true, "Subject must have a name"],
    unique: true,
  },
  teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Teacher" }],
});

const Subject = mongoose.model("Subject", subjectSchema);

export default Subject;
