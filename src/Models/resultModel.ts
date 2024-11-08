import mongoose, { Schema, Document } from "mongoose";
import { ResultInterface } from "../types";

const resultSchema = new mongoose.Schema<ResultInterface>({
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
  student: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

const Result = mongoose.model<ResultInterface>("Result", resultSchema);

export default Result;
