import mongoose from "mongoose";
import { ResultInterface } from "../types";

const resultSchema = new mongoose.Schema<ResultInterface>({
  subject: {
    type: String,
    required: [true, "Result must have a subject"],
  },
  class: {
    type: String,
    required: [true, "Result must have a class"],
  },
  teacher: {
    type: String,
    required: [true, "Result must have a teacher"],
  },
  student: {
    type: String,
    required: [true, "Result must have a student"],
  },
  date: {
    type: Date,
    required: [true, "Result must have a date"],
  },
  type: {
    type: String,
    enum: ["exam", "assignment", "quiz"], // Define allowed types
    required: [true, "Result must have a type"],
  },
  score: {
    type: Number,
    required: [true, "Result must have a score"],
  },
});

const Result = mongoose.model("Result", resultSchema);

export default Result;
