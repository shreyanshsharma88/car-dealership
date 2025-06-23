import { Request, Response } from "express";
import { InquiryInput } from "../utils/types";
import { Repository } from "../repository";

export class InquiryController {
  static async addInquiry(req: Request, res: Response): Promise<any> {
    const { message, subject, vehicleId } = req.body;

    const user = await Repository.User.findUserById(req.body.user.id);
    const vehicle = await Repository.Vehicle.findVehicleById(vehicleId);
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
    const inquiry = await Repository.Inquiry.createInquiry(payload);
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
  }
}
