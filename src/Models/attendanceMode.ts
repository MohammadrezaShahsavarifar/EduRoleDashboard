import mongoose, { Schema, Document } from "mongoose";

const attendanceSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  present: {
    type: Boolean,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: "Student",
  },
  lessonId: {
    type: Number,
    required: true,
  },
  lesson: {
    type: Schema.Types.ObjectId,
    ref: "Lesson",
  },
});

const Attendance = mongoose.model("Attendance", attendanceSchema);
export default Attendance;
