import mongoose from "mongoose";
import { ExamInterface } from "../types";

const examSchema = new mongoose.Schema<ExamInterface>({
  subject: {
    type: String,
    required: [true, "Exam must have a subject"],
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    required: [true, "Exam must have a class"],
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: [true, "Exam must have a teacher"],
  },
  date: {
    type: Date,
    required: [true, "Exam must have a date"],
  },
});

const Exam = mongoose.model("Exam", examSchema);

export default Exam;
