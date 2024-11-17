import mongoose, { Schema, Document } from "mongoose";

const gradeSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
    autoIncrement: true,
  },
  level: {
    type: Number,
    unique: true,
    required: true,
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  classes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Class",
    },
  ],
});

const Grade = mongoose.model("Grade", gradeSchema);
export default Grade;
