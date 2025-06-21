import { Request, Response } from "express";
import {
  createUser,
  findUserByEmail,
  findUserById,
} from "../repository/user.repository";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { generateToken, verifyToken } from "../utils/jwt";

export const signup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    const user = await createUser({
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
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
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
};

export const getUserProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
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
    const user = await findUserById(userId);
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
};
