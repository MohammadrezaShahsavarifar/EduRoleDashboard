import express from "express";
import {
  userSignUp,
  login,
  protect,
  restrictTo,
} from "../Controllers/authController";

const router = express.Router();

router.route("/signup").post(protect, restrictTo("admin"), userSignUp);
router.route("/login").post(login);

export default router;
