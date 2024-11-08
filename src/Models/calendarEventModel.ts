import mongoose, { Schema } from "mongoose";
import { CalendarEventInterface } from "../types";

const calendarEventSchema = new Schema<CalendarEventInterface>({
  title: {
    type: String,
    required: [true, "Event must have a title"],
  },
  allDay: {
    type: Boolean,
    default: false,
  },
  start: {
    type: Date,
    required: [true, "Event must have a start time"],
  },
  end: {
    type: Date,
    required: [true, "Event must have an end time"],
  },
});

const CalendarEvent = mongoose.model<CalendarEventInterface>(
  "CalendarEvent",
  calendarEventSchema
);

export default CalendarEvent;
