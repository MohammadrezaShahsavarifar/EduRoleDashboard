import mongoose from "mongoose";
import { AssignmentInterface } from "../types";

const assignmentSchema = new mongoose.Schema<AssignmentInterface>({
  subject: {
    type: String,
    required: [true, "Assignment must have a subject"],
  },
  class: {
    type: String,
    required: [true, "Assignment must have a class"],
  },
  teacher: {
    type: String,
    required: [true, "Assignment must have a teacher"],
  },
  dueDate: {
    type: Date,
    required: [true, "Assignment must have a due date"],
  },
  description: {
    type: String,
  },
  // ... other fields
});

const Assignment = mongoose.model("Assignment", assignmentSchema);

export default Assignment;
