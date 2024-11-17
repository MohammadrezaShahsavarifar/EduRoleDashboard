import mongoose, { Schema, Document } from "mongoose";

const examSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
    autoIncrement: true,
  },
  title: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  lessonId: {
    type: Number,
    required: true,
  },
  lesson: {
    type: Schema.Types.ObjectId,
    ref: "Lesson",
  },
  results: [
    {
      type: Schema.Types.ObjectId,
      ref: "Result",
    },
  ],
});

const Exam = mongoose.model("Exam", examSchema);
export default Exam;
