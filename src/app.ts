import express from "express";
import { config } from "dotenv";
import { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import AppError from "./utiles/AppError";

import userRouter from "./Routes/userRouter";

config({ path: "./config.env" });

const app = express();
app.use(express.json());
app.use(cookieParser());

//endpoints
app.use("/api/v1/users", userRouter);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

export default app;
