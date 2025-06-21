import { Request, Response } from "express";
import { createUser, findUserByEmail } from "../repository/user.repository";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (userId: string): string => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET || "fallback_secret", {
    expiresIn: "30d",
  });
};

export { generateToken };

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
    res.status(500).json({ message: "Server error" });
    return;
  }
};
