import mongoose, { Schema, Document } from "mongoose";
import { ExamInterface } from "../types";

const examSchema = new mongoose.Schema<ExamInterface>({
  subject: {
    type: Schema.Types.ObjectId,
    ref: "Subject",
    required: true,
  },
  class: {
    type: Schema.Types.ObjectId,
    ref: "Class",
    required: true,
  },
  teacher: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Exam = mongoose.model<ExamInterface>("Exam", examSchema);

export default Exam;
