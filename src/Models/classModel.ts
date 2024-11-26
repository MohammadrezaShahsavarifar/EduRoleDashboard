import mongoose, { Schema, Document } from "mongoose";

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  supervisorId: {
    type: String,
  },
  supervisor: {
    type: Schema.Types.ObjectId,
    ref: "Teacher",
  },
  lessons: [
    {
      type: Schema.Types.ObjectId,
      ref: "Lesson",
    },
  ],
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  gradeId: {
    type: Number,
    required: true,
  },
  grade: {
    type: Schema.Types.ObjectId,
    ref: "Grade",
  },
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
  announcements: [
    {
      type: Schema.Types.ObjectId,
      ref: "Announcement",
    },
  ],
});

const Class = mongoose.model("Class", classSchema);
export default Class;
