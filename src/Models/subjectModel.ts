import mongoose, { Schema, Document } from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  teachers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Teacher",
    },
  ],
  lessons: [
    {
      type: Schema.Types.ObjectId,
      ref: "Lesson",
    },
  ],
});

const Subject = mongoose.model("Subject", subjectSchema);
export default Subject;
