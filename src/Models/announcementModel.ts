import mongoose, { Schema, Document } from "mongoose";

const announcementSchema = new mongoose.Schema({
 
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
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

const Announcement = mongoose.model("Announcement", announcementSchema);
export default Announcement;
