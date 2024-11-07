import mongoose from "mongoose";
import { EventInterface } from "../types";

const eventSchema = new mongoose.Schema<EventInterface>({
  title: {
    type: String,
    required: [true, "Event must have a title"],
  },
  class: {
    type: String,
    required: [true, "Event must have a class"],
  },
  date: {
    type: Date,
    required: [true, "Event must have a date"],
  },
  startTime: {
    type: String,
    required: [true, "Event must have a start time"],
  },
  endTime: {
    type: String,
    required: [true, "Event must have an end time"],
  },
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
