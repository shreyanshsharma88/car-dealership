import { Router } from "express";
import { addInquiry } from "../controllers/inquiry.controller";

export const ProtectedInquiryRoutes = Router();

ProtectedInquiryRoutes.post("/inquiry", addInquiry);
