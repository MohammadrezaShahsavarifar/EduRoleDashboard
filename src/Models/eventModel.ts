import mongoose, { Schema, Document } from "mongoose";

const eventSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
    autoIncrement: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  classId: {
    type: Number,
  },
  class: {
    type: Schema.Types.ObjectId,
    ref: "Class",
  },
});

const Event = mongoose.model("Event", eventSchema);
export default Event;
