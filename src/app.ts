import express from "express";
import { config } from "dotenv";
import { Request, Response, NextFunction } from "express";

import AppError from "./utiles/AppError";

config({ path: "./config.env" });

const app = express();
app.use(express.json());

//endpoints
// app.use("/api/v1");

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

export default app;
