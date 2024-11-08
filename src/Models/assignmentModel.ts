import mongoose, { Schema, Document } from "mongoose";
import { AssignmentInterface } from "../types";

const assignmentSchema = new mongoose.Schema<AssignmentInterface>({
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
  dueDate: {
    type: Date,
    required: true,
  },
});

const Assignment = mongoose.model<AssignmentInterface>(
  "Assignment",
  assignmentSchema
);

export default Assignment;
