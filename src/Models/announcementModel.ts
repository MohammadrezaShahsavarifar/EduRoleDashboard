import mongoose, { Schema, Document } from "mongoose";
import { AnnouncementInterface } from "../types";

const announcementSchema = new mongoose.Schema<AnnouncementInterface>({
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
});

const Announcement = mongoose.model<AnnouncementInterface>(
  "Announcement",
  announcementSchema
);

export default Announcement;
