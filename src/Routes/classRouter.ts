import express from "express";
import {
  createClass,
  getAllClasses,
  getClass,
  deleteClass,
  updateClass,
} from "../Controllers/classController";
import { protect, restrictTo } from "../Controllers/authController";

const router = express.Router();

router
  .route("/")
  .post(protect, restrictTo("admin"), createClass)
  .get(protect, restrictTo("admin"), getAllClasses);

router
  .route("/:id")
  .get(protect, restrictTo("admin"), getClass)
  .patch(protect, restrictTo("admin"), updateClass)
  .delete(protect, restrictTo("admin"), deleteClass);

export default router;
