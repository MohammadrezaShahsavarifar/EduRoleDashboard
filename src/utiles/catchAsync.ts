import { Request, Response, NextFunction } from "express";
import { AsyncFunction, CatchAsyncFunction } from "../types";

// Define the async function type

const catchAsync: CatchAsyncFunction = (fn: AsyncFunction) => {
  return (req: Request, res: Response, next: NextFunction): Promise<void> => {
    return fn(req, res, next).catch(next);
  };
};

export default catchAsync;
