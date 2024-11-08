import mongoose, { Schema } from "mongoose";
import { UserInterface } from "../types";

const userSchema = new mongoose.Schema<UserInterface>({
  userId: {
    type: String,
    unique: true,
    required: [true, "User must have a unique userId"],
  },
  name: {
    type: String,
    required: [true, "User must have a name"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "User must have an email address"],
  },
  role: {
    type: String,
    enum: ["admin", "teacher", "student", "parent"],
    required: [true, "User must have a role"],
  },
  password: {
    type: String,
    select: false,
  },
  photo: {
    type: String,
  },
  phone: {
    type: String,
  },
  subjects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Subject",
    },
  ],
  classes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Class",
    },
  ],
  grade: {
    type: Number,
  },
  address: {
    type: String,
  },
  parents: [
    {
      type: Schema.Types.ObjectId,
      ref: "Parent",
    },
  ],
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  teacherId: {
    type: String,
    unique: true,
    sparse: true, // Optional field, sparse index
  },
});

// Middleware for adding teacherId if role is teacher
// userSchema.pre<UserInterface>('save', async function(next) {
//   if (this.role === 'teacher' && !this.teacherId) {
//     this.teacherId = `T-${new Date().getTime()}`;
//   }
//   next();
// });

const User = mongoose.model<UserInterface>("User", userSchema);

export default User;
