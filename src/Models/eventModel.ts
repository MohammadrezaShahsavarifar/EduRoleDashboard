import mongoose, { Schema, Document } from "mongoose";
import { EventInterface } from "../types";

const eventSchema = new mongoose.Schema<EventInterface>({
  title: {
    type: String,
    required: true,
  },
  class: {
    type: Schema.Types.ObjectId,
    ref: "Class",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model<EventInterface>("Event", eventSchema);

export default Event;
