import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

const studentSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  bloodType: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    enum: ["MALE", "FEMALE"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  parentId: {
    type: String,
    required: true,
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "Parent",
  },
  classId: {
    type: Number,
    required: true,
  },
  class: {
    type: Schema.Types.ObjectId,
    ref: "Class",
  },
  gradeId: {
    type: Number,
    required: true,
  },
  grade: {
    type: Schema.Types.ObjectId,
    ref: "Grade",
  },
  attendances: [
    {
      type: Schema.Types.ObjectId,
      ref: "Attendance",
    },
  ],
  results: [
    {
      type: Schema.Types.ObjectId,
      ref: "Result",
    },
  ],
  birthday: {
    type: Date,
    required: true,
  },
});

studentSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
const Student = mongoose.model("Student", studentSchema);
export default Student;
