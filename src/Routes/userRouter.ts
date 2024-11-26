import express from "express";
import {
  userSignUp,
  login,
  logout,
  protect,
  restrictTo,
  forgotPassword,
  resetPassword,
  updatePassword,
} from "../Controllers/authController";

const router = express.Router();

// مسیرهای مربوط به احراز هویت
router.route("/signup").post(protect, restrictTo("admin"), userSignUp);
router.route("/login").post(login);
router.route("/logout").get(logout);

// مسیرهای مربوط به مدیریت رمز عبور
router.route("/forgotPassword").post(forgotPassword);
router.route("/resetPassword/:token").patch(resetPassword);
router.route("/updatePassword").patch(protect, updatePassword);

export default router;
