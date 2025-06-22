import { Router } from "express";
import {
  addVehicle,
  getVehicleDetails,
  getVehicles,
} from "../controllers/vehicle.controller";

export const VehicleRoutes = Router();
export const ProtectedVehicleRoutes = Router();

VehicleRoutes.get("/vehicles", getVehicles);

VehicleRoutes.get("/vehicles/:id", getVehicleDetails);

ProtectedVehicleRoutes.post("/vehicles", addVehicle);
