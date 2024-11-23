import mongoose, { Document, Schema, Model } from "mongoose";
import { Request, Response, NextFunction } from "express";

export interface AdminInterface extends Document {
  id: string;
  username: string;
  password: string;
}

export interface StudentInterface extends Document {
  id: string;
  username: string;
  name: string;
  surname: string;
  email?: string;
  phone?: string;
  address: string;
  img?: string;
  bloodType: string;
  sex: "MALE" | "FEMALE";
  createdAt: Date;
  parentId: string;
  parent: Schema.Types.ObjectId;
  classId: number;
  class: Schema.Types.ObjectId;
  gradeId: number;
  grade: Schema.Types.ObjectId;
  attendances: Schema.Types.ObjectId[];
  results: Schema.Types.ObjectId[];
  birthday: Date;
}

export interface TeacherInterface extends Document {
  id: string;
  username: string;
  name: string;
  surname: string;
  email?: string;
  phone?: string;
  address: string;
  img?: string;
  bloodType: string;
  sex: "MALE" | "FEMALE";
  createdAt: Date;
  subjects: Schema.Types.ObjectId[];
  lessons: Schema.Types.ObjectId[];
  classes: Schema.Types.ObjectId[];
  birthday: Date;
}

export interface ParentInterface extends Document {
  id: string;
  username: string;
  name: string;
  surname: string;
  email?: string;
  phone: string;
  address: string;
  createdAt: Date;
  students: Schema.Types.ObjectId[];
}

export interface SubjectInterface extends Document {
  id: number;
  name: string;
  teachers: Schema.Types.ObjectId[];
  lessons: Schema.Types.ObjectId[];
}

export interface ClassInterface extends Document {
  id: number;
  name: string;
  capacity: number;
  supervisorId?: string;
  supervisor: Schema.Types.ObjectId;
  lessons: Schema.Types.ObjectId[];
  students: Schema.Types.ObjectId[];
  gradeId: number;
  grade: Schema.Types.ObjectId;
  events: Schema.Types.ObjectId[];
  announcements: Schema.Types.ObjectId[];
}

export interface LessonInterface extends Document {
  id: number;
  name: string;
  day: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY";
  startTime: Date;
  endTime: Date;
  subjectId: number;
  subject: Schema.Types.ObjectId;
  classId: number;
  class: Schema.Types.ObjectId;
  teacherId: string;
  teacher: Schema.Types.ObjectId;
  exams: Schema.Types.ObjectId[];
  assignments: Schema.Types.ObjectId[];
  attendances: Schema.Types.ObjectId[];
}

export interface ExamInterface extends Document {
  id: number;
  title: string;
  startDate: Date;
  endDate: Date;
  lessonId: number;
  lesson: Schema.Types.ObjectId;
  results: Schema.Types.ObjectId[];
}

export interface AssignmentInterface extends Document {
  id: number;
  title: string;
  startDate: Date;
  dueDate: Date;
  lessonId: number;
  lesson: Schema.Types.ObjectId;
  results: Schema.Types.ObjectId[];
}

export interface ResultInterface extends Document {
  id: number;
  score: number;
  examId: number;
  exam: Schema.Types.ObjectId;
  assignmentId: number;
  assignment: Schema.Types.ObjectId;
  studentId: string;
  student: Schema.Types.ObjectId;
}

export interface EventInterface extends Document {
  id: number;
  title: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  classId: number;
  class: Schema.Types.ObjectId;
}

export interface AnnouncementInterface extends Document {
  id: number;
  title: string;
  description: string;
  classId: number;
  class: Schema.Types.ObjectId;
}

export interface AttendanceInterface extends Document {
  id: number;
  date: Date;
  present: boolean;
  studentId: string;
  student: Schema.Types.ObjectId;
  lessonId: number;
  lesson: Schema.Types.ObjectId;
}

export interface AppErrorInterface extends Error {
  statusCode: number;
  status: string;
  isOperational: boolean;
}

export type HandlerFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

export type AsyncFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

export type CatchAsyncFunction = (fn: AsyncFunction) => HandlerFunction;

export interface IEnv {
  DB_URI: string;
  DB_PASSWORD: string;
  PORT?: string;
  // Add any other environment variables you are using
}
