import { Router } from "express";
import { Controllers } from "../controllers";

export const VehicleRoutes = Router();
export const ProtectedVehicleRoutes = Router();

VehicleRoutes.get("/vehicles", Controllers.Vehicle.getVehicles);

VehicleRoutes.get("/vehicles/:id", Controllers.Vehicle.getVehicleDetails);

ProtectedVehicleRoutes.post("/vehicles", Controllers.Vehicle.addVehicle);
