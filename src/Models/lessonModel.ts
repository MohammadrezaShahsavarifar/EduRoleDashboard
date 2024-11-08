import mongoose, { Schema, Document } from "mongoose";

import { LessonInterface } from "../types";

const lessonSchema = new mongoose.Schema<LessonInterface>({
  subject: {
    type: Schema.Types.ObjectId,
    ref: "Subject",
    required: true,
  },
  class: {
    type: Schema.Types.ObjectId,
    ref: "Class",
    required: true,
  },
  teacher: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Lesson = mongoose.model<LessonInterface>("Lesson", lessonSchema);

export default Lesson;
