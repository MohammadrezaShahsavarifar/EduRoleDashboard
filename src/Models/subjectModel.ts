import mongoose, { Schema, Document } from "mongoose";
import { SubjectInterface } from "../types";
const subjectSchema = new mongoose.Schema<SubjectInterface>({
  name: {
    type: String,
    required: [true, "Subject must have a name"],
    unique: true,
  },
  teachers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User", // ارتباط با مدل User با نقش Teacher
    },
  ],
});

const Subject = mongoose.model<SubjectInterface>("Subject", subjectSchema);

export default Subject;
