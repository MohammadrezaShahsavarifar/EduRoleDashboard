import express from "express";
import { config } from "dotenv";

config({ path: "./config.env" });

const app = express();

app.use("/", (_req, res) => {
  res.end("Hello from server part");
});

export default app;
