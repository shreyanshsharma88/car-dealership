import express from "express";
import { Controllers } from "../controllers";

export const userRoutes = express.Router();

userRoutes.post("/signup", Controllers.User.signup);
userRoutes.post("/login", Controllers.User.login);
userRoutes.get("/user", Controllers.User.getUserProfile);
