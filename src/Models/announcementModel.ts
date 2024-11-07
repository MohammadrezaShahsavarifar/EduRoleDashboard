import mongoose from "mongoose";
import { AnnouncementInterface } from "../types";
const announcementSchema = new mongoose.Schema<AnnouncementInterface>({
  title: {
    type: String,
    required: [true, "Announcement must have a title"],
  },
  class: {
    type: String,
    required: [true, "Announcement must have a class"],
  },
  date: {
    type: Date,
    required: [true, "Announcement must have a date"],
  },
  message: {
    type: String,
  },
});

const Announcement = mongoose.model("Announcement", announcementSchema);

export default Announcement;
