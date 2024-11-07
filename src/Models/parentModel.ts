import mongoose from "mongoose";
import { ParentInterface } from "../types";

const parentSchema = new mongoose.Schema<ParentInterface>({
  name: {
    type: String,
    required: [true, "Parent must have a name"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Parent must have an email address"],
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
});

const Parent = mongoose.model("Parent", parentSchema);

export default Parent;
