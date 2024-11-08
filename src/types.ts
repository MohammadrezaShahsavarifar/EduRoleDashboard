import mongoose, { Document, Schema, Model } from "mongoose";
import { Request, Response, NextFunction } from "express";

export interface IEnv {
  DB_URI: string;
  DB_PASSWORD: string;
}

export interface UserInterface extends Document {
  userId: string;
  name: string;
  email: string;
  role: "admin" | "teacher" | "student" | "parent";
  password?: string;
  photo?: string;
  phone?: string;
  subjects?: Schema.Types.ObjectId[];
  classes?: Schema.Types.ObjectId[];
  grade?: number;
  address?: string;
  parents?: Schema.Types.ObjectId[];
  students?: Schema.Types.ObjectId[];
  teacherId?: string;
}

export interface SubjectInterface extends Document {
  name: string;
  teachers: Schema.Types.ObjectId[];
}

export interface ClassInterface extends Document {
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
  teachers: Schema.Types.ObjectId[];
  students: Schema.Types.ObjectId[];
}

export interface LessonInterface extends Document {
  subject: Schema.Types.ObjectId;
  class: Schema.Types.ObjectId;
  teacher: Schema.Types.ObjectId;
}

export interface ExamInterface extends Document {
  subject: Schema.Types.ObjectId;
  class: Schema.Types.ObjectId;
  teacher: Schema.Types.ObjectId;
  date: Date;
}

export interface AssignmentInterface extends Document {
  subject: Schema.Types.ObjectId;
  class: Schema.Types.ObjectId;
  teacher: Schema.Types.ObjectId;
  dueDate: Date;
}

export interface ResultInterface extends Document {
  subject: Schema.Types.ObjectId;
  class: Schema.Types.ObjectId;
  teacher: Schema.Types.ObjectId;
  student: Schema.Types.ObjectId;
  date: Date;
  type: string;
  score: number;
}

export interface EventInterface extends Document {
  title: string;
  class: Schema.Types.ObjectId;
  date: Date;
  startTime: string;
  endTime: string;
}

export interface AnnouncementInterface extends Document {
  title: string;
  class: Schema.Types.ObjectId;
  date: Date;
}

export interface CalendarEventInterface extends Document {
  title: string;
  allDay?: boolean;
  start: Date;
  end: Date;
}

export type AsyncFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

export type CatchAsyncFunction = (
  fn: AsyncFunction
) => (req: Request, res: Response, next: NextFunction) => Promise<void>;

export interface AppErrorInterface extends Error {
  statusCode: number;
  status: string;
  isOperational: boolean;
}

export interface QueryString {
  page?: string;
  sort?: string;
  limit?: string;
  fields?: string;
  [key: string]: any;
}

export interface APIFeaturesInterface {
  query: any;
  queryString: QueryString;
}

export type ModelType = Model<DocumentType>;
export type DocumentType = Document & { [key: string]: any };
export type HandlerFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;
