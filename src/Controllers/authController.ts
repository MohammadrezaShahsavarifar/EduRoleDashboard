import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import AppError from "../utiles/AppError";
import User from "../Models/userModel";
import Admin from "../Models/adminModel";
import catchAsync from "../utiles/catchAsync";

const signToken = (id: string) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined in the environment variables");
  }
  return jwt.sign({ id }, secret, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user: any, statusCode: number, res: Response) => {
  const token = signToken(user._id);
  const cookieOptions: { expires: Date; httpOnly: boolean; secure?: boolean } =
    {
      expires: new Date(
        Date.now() +
          Number(process.env.JWT_COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

export const userSignUp = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.create(req.body);
      if (user) {
        res.status(201).json({
          status: "success",
          message: "User created successfully",
        });
      }
    } catch (error) {
      next(error);
      console.error(error);
    }
  }
);

export const login = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    // 1) Check if username and password exist
    if (!username || !password) {
      return next(new AppError("Please provide username and password!", 400));
    }
    // 2) Check if user exists && password is correct
    const user = await User.findOne({ username }).select("+password");

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return next(new AppError("Incorrect username or password", 401));
    }

    // 3) If everything ok, send token to client
    createSendToken(user, 200, res);
  }
);

interface CustomRequest extends Request {
  user?: any;
}

export const protect = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // 1) Getting token and check if it's there
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies && req.cookies.jwt) {
      token = req.cookies.jwt;
    }

    console.log("Cookies:", req.cookies); // Debugging line

    // 2) Verify token
    if (!token) {
      return next(
        new AppError("You are not logged in! Please log in to get access.", 401)
      );
    }

    // Ensure JWT_SECRET is defined
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      return next(
        new AppError(
          "JWT_SECRET is not defined in the environment variables",
          500
        )
      );
    }

    // Assuming you have a function to verify the token and get the user
    const decoded = jwt.verify(token, secret) as jwt.JwtPayload;

    // 3) Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return next(
        new AppError(
          "The user belonging to this token does no longer exist.",
          401
        )
      );
    }

    console.log("User found:", currentUser); // Debugging line

    // 4) Grant access to protected route
    (req as CustomRequest).user = currentUser; // Cast req to CustomRequest

    next();
  }
);

export const restrictTo = (...roles: string[]) => {
  return (req: CustomRequest, res: Response, next: NextFunction) => {
    // roles ['admin', 'lead-guide']. role='user'
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }

    next();
  };
};
