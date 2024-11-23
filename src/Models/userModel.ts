import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function (el: any) {
        return el === (this as any).password;
      },
      message: "Passwords are not the same!",
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  role: {
    type: String,
    enum: ["admin", "parent", "teacher", "student"],
    required: true,
  },
  name: {
    type: String,
  },
  surname: {
    type: String,
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
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Role-specific fields
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  parentId: {
    type: String,
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "Parent",
  },
  classId: {
    type: Number,
  },
  class: {
    type: Schema.Types.ObjectId,
    ref: "Class",
  },
  gradeId: {
    type: Number,
  },
  grade: {
    type: Schema.Types.ObjectId,
    ref: "Grade",
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
  },
  img: {
    type: String,
  },
  bloodType: {
    type: String,
  },
  sex: {
    type: String,
    enum: ["MALE", "FEMALE"],
  },
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangedAt = new Date(Date.now() - 1000);
  next();
});

userSchema.pre(/^find/, function (this: mongoose.Query<any, any>, next) {
  // this points to the current query
  this.where({ active: { $ne: false } });
  next();
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("User", userSchema);
export default User;
