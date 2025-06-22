import { Response, Request } from "express";
import { InquiryInput } from "../utils/types";
import { findUserById } from "../repository/user.repository";
import { createInquiry } from "../repository/inquiry.repository";
import { findVehicleById } from "../repository/vehicle.repository";

export const addInquiry = async (req: Request, res: Response): Promise<any> => {
  const { message, subject, vehicleId } = req.body;

  const user = await findUserById(req.body.user.id);
  const vehicle = await findVehicleById(vehicleId);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }
  if (!vehicle) {
    return res.status(404).json({
      success: false,
      message: "Vehicle not found",
    });
  }
  const payload: InquiryInput = {
    userId: req.body.user.id,
    message,
    subject,
    name: user?.username || "",
    email: user?.email || "",
    vehicleId: vehicleId,
  };
  const inquiry = await createInquiry(payload);
  res.status(201).json({
    inquiry,
  });
  try {
  } catch (err) {
    if (err instanceof Error && err.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
