import mongoose, { Schema, Document } from "mongoose";

const assignmentSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  dueDate: {
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

const Assignment = mongoose.model("Assignment", assignmentSchema);
export default Assignment;
