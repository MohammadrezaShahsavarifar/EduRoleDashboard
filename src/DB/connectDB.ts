import mongoose from "mongoose";
import dotenv from "dotenv";
import { IEnv } from "../types";

dotenv.config({ path: "../../config.env" });

const env: IEnv = process.env as any;

// Construct the DB_URI dynamically
const dbUri = env.DB_URI.replace("DB_PASSWORD", env.DB_PASSWORD);

export const connectDb = async () => {
  try {
    const connect = await mongoose.connect(dbUri);
    console.log(`mongodb connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
