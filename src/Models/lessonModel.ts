import mongoose, { Schema, Document } from "mongoose";

const lessonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    enum: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"],
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  subjectId: {
    type: Number,
    required: true,
  },
  subject: {
    type: Schema.Types.ObjectId,
    ref: "Subject",
  },
  classId: {
    type: Number,
    required: true,
  },
  class: {
    type: Schema.Types.ObjectId,
    ref: "Class",
  },
  teacherId: {
    type: String,
    required: true,
  },
  teacher: {
    type: Schema.Types.ObjectId,
    ref: "Teacher",
  },
  exams: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exam",
    },
  ],
  assignments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Assignment",
    },
  ],
  attendances: [
    {
      type: Schema.Types.ObjectId,
      ref: "Attendance",
    },
  ],
});

const Lesson = mongoose.model("Lesson", lessonSchema);
export default Lesson;
