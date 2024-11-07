import mongoose from "mongoose";

export interface IEnv {
  DB_URI: string;
  DB_PASSWORD: string;
}

export interface TeacherInterface {
  teacherId: string;
  name: string;
  email: string;
  photo?: string;
  phone?: string;
  subjects: mongoose.Types.ObjectId[];
  classes: mongoose.Types.ObjectId[];
  address?: string;
}

export interface StudentInterface {
  studentId: string;
  name: string;
  email: string;
  photo?: string;
  phone?: string;
  grade: number;
  class: mongoose.Types.ObjectId;
  address: string;
  parent: mongoose.Types.ObjectId;
}

export interface ParentInterface {
  name: string;
  email: string;
  phone?: string;
  address?: string;
}

export interface SubjectInterface {
  name: string;
  teachers: mongoose.Types.ObjectId[];
}

export interface ClassInterface {
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
  teachers: mongoose.Types.ObjectId[];
}

export interface LessonInterface {
  subject: string;
  class: mongoose.Types.ObjectId;
  teacher: mongoose.Types.ObjectId;
  date?: Date;
  startTime?: string;
  endTime?: string;
}

export interface ExamInterface {
  subject: string;
  class: mongoose.Types.ObjectId;
  teacher: mongoose.Types.ObjectId;
  date: Date;
}

export interface AssignmentInterface {
  subject: string;
  class: mongoose.Types.ObjectId;
  teacher: mongoose.Types.ObjectId;
  dueDate: Date;
  description?: string;
}

export interface ResultInterface {
  subject: string;
  class: mongoose.Types.ObjectId;
  teacher: mongoose.Types.ObjectId;
  student: mongoose.Types.ObjectId;
  date: Date;
  type: string;
  score: number;
}

export interface EventInterface {
  title: string;
  class: mongoose.Types.ObjectId;
  date: Date;
  startTime: string;
  endTime: string;
}

export interface AnnouncementInterface {
  title: string;
  class: mongoose.Types.ObjectId;
  date: Date;
  message?: string;
}

export interface CalendarEventInterface {
  title: string;
  allDay: boolean;
  start: Date;
  end: Date;
}
