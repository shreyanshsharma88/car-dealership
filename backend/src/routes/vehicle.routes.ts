import { Router } from "express";
import {
  getVehicleDetails,
  getVehicles,
} from "../controllers/vehicle.controller";

const router = Router();

router.get("/vehicles", getVehicles);

router.get("/vehicles/:id", getVehicleDetails);

export default router;
