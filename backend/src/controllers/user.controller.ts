import { Request, Response } from "express";

import jwt from "jsonwebtoken";
import { generateToken, verifyToken } from "../utils/jwt";
import { Repository } from "../repository";

export class UserController {
  static async signup(req: Request, res: Response): Promise<void> {
    try {
      const { username, email, password } = req.body;

      const existingUser = await Repository.User.findUserByEmail(email);
      if (existingUser) {
        res.status(400).json({ message: "User already exists" });
        return;
      }

      const user = await Repository.User.createUser({
        username,
        email,
        password: password,
      });

      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id.toString()),
      });
      return;
    } catch (error) {
      console.error("Signup error:", error);
      if (error instanceof Error && error.name === "ValidationError") {
        res.status(400).json({ message: error.message });
        return;
      }
      res.status(500).json({ message: "Server error" });
      return;
    }
  }

  static async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const user = await Repository.User.findUserByEmail(email);

      if (!user?.id || password !== user.password) {
        res.status(401).json({ message: "Invalid credentials" });
        return;
      }

      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id.toString()),
      });
      return;
    } catch (error) {
      console.error("Login error:", error);
      if (error instanceof Error && error.name === "ValidationError") {
        res.status(400).json({ message: error.message });
        return;
      }
      res.status(500).json({ message: "Server error" });
      return;
    }
  }

  static async getUserProfile(req: Request, res: Response): Promise<void> {
    try {
      const token = req.headers.token as string | undefined;
      if (!token) {
        res.status(401).json({ message: "No token provided" });
        return;
      }

      const data = verifyToken(token);
      if (!data) {
        res.status(401).json({ message: "Invalid token" });
        return;
      }
      const userId = (data as jwt.JwtPayload).id;
      const user = await Repository.User.findUserById(userId);
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }
      res.json(user).status(200);
    } catch (error) {
      console.error("Get user profile error:", error);
      res.status(500).json({ message: "Server error" });
      return;
    }
  }
}
