import mongoose, { Schema, Document } from "mongoose";

const resultSchema = new mongoose.Schema({
  score: {
    type: Number,
    required: true,
  },
  examId: {
    type: Number,
  },
  exam: {
    type: Schema.Types.ObjectId,
    ref: "Exam",
  },
  assignmentId: {
    type: Number,
  },
  assignment: {
    type: Schema.Types.ObjectId,
    ref: "Assignment",
  },
  studentId: {
    type: String,
    required: true,
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: "Student",
  },
});

const Result = mongoose.model("Result", resultSchema);
export default Result;
