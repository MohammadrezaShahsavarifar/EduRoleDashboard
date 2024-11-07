import mongoose from "mongoose";
import { LessonInterface } from "../types";

const lessonSchema = new mongoose.Schema<LessonInterface>({
  subject: {
    type: String,
    required: [true, "Lesson must have a subject"],
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    required: [true, "Lesson must have a class"],
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: [true, "Lesson must have a teacher"],
  },
  date: Date,
  startTime: String,
  endTime: String,
});

const Lesson = mongoose.model("Lesson", lessonSchema);

export default Lesson;
