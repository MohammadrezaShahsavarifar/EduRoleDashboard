import mongoose, { Schema, Document } from "mongoose";

import { ClassInterface } from "../types";

const classSchema = new mongoose.Schema<ClassInterface>({
  name: {
    type: String,
    required: [true, "Class must have a name"],
    unique: true,
  },
  capacity: {
    type: Number,
    required: [true, "Class must have a capacity"],
  },
  grade: {
    type: Number,
    required: [true, "Class must have a grade"],
  },
  supervisor: {
    type: String,
    required: [true, "Class must have a supervisor"],
  },
  teachers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User", // ارتباط با مدل User با نقش Teacher
    },
  ],
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "User", // ارتباط با مدل User با نقش Student
    },
  ],
});

const Class = mongoose.model<ClassInterface>("Class", classSchema);

export default Class;
