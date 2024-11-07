import mongoose from "mongoose";
import { CalendarEventInterface } from "../types";

const calendarEventSchema = new mongoose.Schema<CalendarEventInterface>({
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

const CalendarEvent = mongoose.model("CalendarEvent", calendarEventSchema);

export default CalendarEvent;
