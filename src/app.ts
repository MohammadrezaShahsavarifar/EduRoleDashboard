import express from "express";
import { config } from "dotenv";
import { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import AppError from "./utiles/AppError";

import userRouter from "./Routes/userRouter";
import classRouter from "./Routes/classRouter";

config({ path: "./config.env" });

const app = express();
app.use(express.json());
app.use(cookieParser());

// مسیرهای مربوط به کاربران
app.use("/api/v1/users", userRouter);

// مسیرهای مربوط به کلاس‌ها
app.use("/api/v1/classes", classRouter);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

export default app;
