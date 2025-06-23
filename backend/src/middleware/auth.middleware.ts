import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt";
import { JwtPayload } from "jsonwebtoken";

export class MiddleWares {
  static authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const token = req.headers.token as string;

    if (!token) {
      res.status(401).json({ message: "Access denied, no token provided." });
      return;
    }

    try {
      const userDetails = verifyToken(token);
      req.body.user = userDetails as JwtPayload;
      next();
    } catch (error) {
      res.status(400).json({ message: "Invalid token." });
      return;
    }
  };
}