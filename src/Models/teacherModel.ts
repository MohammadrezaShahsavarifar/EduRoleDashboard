import mongoose, { Schema, Document } from "mongoose";

const teacherSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    unique: true,
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
  subjects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Subject",
    },
  ],
  lessons: [
    {
      type: Schema.Types.ObjectId,
      ref: "Lesson",
    },
  ],
  classes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Class",
    },
  ],
  birthday: {
    type: Date,
    required: true,
  },
});

const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;
