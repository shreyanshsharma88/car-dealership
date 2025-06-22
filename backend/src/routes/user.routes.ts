import express from "express";
import { signup, login, getUserProfile } from "../controllers/user.controller";

export const userRoutes = express.Router();

userRoutes.post("/signup", signup);
userRoutes.post("/login", login);

userRoutes.get("/user", getUserProfile);

