import { Router } from "express";
import { Controllers } from "../controllers";

export const ProtectedInquiryRoutes = Router();

ProtectedInquiryRoutes.post("/inquiries", Controllers.Inquiry.addInquiry);
