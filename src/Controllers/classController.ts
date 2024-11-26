import { NextFunction, Request, Response } from "express";
import catchAsync from "../utiles/catchAsync";
import Class from "../Models/classModel";
import User from "../Models/userModel";
import Grade from "../Models/gradeModel";
import Lesson from "../Models/lessonModel";
import Event from "../Models/eventModel";
import Announcement from "../Models/announcementModel";

// ایجاد کلاس جدید
export const createClass = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        name,
        capacity,
        supervisorName,
        lessonNames,
        studentNames,
        gradeName,
        eventNames,
        announcementNames,
      } = req.body;

      // ایجاد کلاس جدید
      const newClass = new Class({ name, capacity });

      // جایگذاری اطلاعات مرتبط
      if (supervisorName) {
        const supervisor = await User.findOne({
          name: supervisorName,
          role: "teacher",
        });
        newClass.supervisor = supervisor?._id;
      }

      if (lessonNames) {
        const lessons = await Lesson.find({ name: { $in: lessonNames } });
        newClass.lessons = lessons.map((lesson) => lesson._id);
      }

      if (studentNames) {
        const students = await User.find({
          name: { $in: studentNames },
          role: "student",
        });
        newClass.students = students.map((student) => student._id);
      }

      if (gradeName) {
        const grade = await Grade.findOne({ name: gradeName });
        newClass.grade = grade?._id;
      }

      if (eventNames) {
        const events = await Event.find({ name: { $in: eventNames } });
        newClass.events = events.map((event) => event._id);
      }

      if (announcementNames) {
        const announcements = await Announcement.find({
          name: { $in: announcementNames },
        });
        newClass.announcements = announcements.map(
          (announcement) => announcement._id
        );
      }

      await newClass.save();

      res.status(201).json({
        status: "success",
        data: {
          class: newClass,
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

// گرفتن تمام کلاس‌ها
export const getAllClasses = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const classes = await Class.find();

    res.status(200).json({
      status: "success",
      results: classes.length,
      data: {
        classes,
      },
    });
  }
);

// گرفتن یک کلاس خاص
export const getClass = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const classId = req.params.id;
    const singleClass = await Class.findById(classId).populate(
      "supervisor lessons students grade events announcements"
    );

    if (!singleClass) {
      return next(new Error("Class not found"));
    }

    res.status(200).json({
      status: "success",
      data: {
        class: singleClass,
      },
    });
  }
);

// حذف یک کلاس خاص
export const deleteClass = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const classId = req.params.id;
    const classToDelete = await Class.findByIdAndDelete(classId);

    if (!classToDelete) {
      return next(new Error("Class not found"));
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  }
);

// آپدیت یک کلاس خاص
export const updateClass = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const classId = req.params.id;
    const updatedClass = await Class.findByIdAndUpdate(classId, req.body, {
      new: true,
      runValidators: true,
    }).populate("supervisor lessons students grade events announcements");

    if (!updatedClass) {
      return next(new Error("Class not found"));
    }

    res.status(200).json({
      status: "success",
      data: {
        class: updatedClass,
      },
    });
  }
);
