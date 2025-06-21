import express from "express";
import { signup, login, getUserProfile } from "../controllers/user.controller";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/user", getUserProfile);

export default router;
