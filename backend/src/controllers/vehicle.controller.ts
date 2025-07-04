import { Request, Response } from "express";

import { VehicleInput } from "../utils/types";
import { Repository } from "../repository";

export class VehicleController {
  static async getVehicles(req: Request, res: Response) {
    try {
      const { make, model, year, minPrice, maxPrice, bodyType, isNew } =
        req.query;

      const filter: any = {};

      if (isNew && (isNew === "true" || isNew === "false")) {
        filter.isNew = isNew === "true";
      }

      if (make) {
        filter.make = make;
      }

      if (model) {
        filter.model = model;
      }

      if (year) {
        filter.year = Number(year);
      }
      if (bodyType) {
        filter.bodyType = bodyType;
      }

      if (minPrice || maxPrice) {
        filter.price = {};
        if (minPrice) {
          filter.price.$gte = Number(minPrice);
        }
        if (maxPrice) {
          filter.price.$lte = Number(maxPrice);
        }
      }

      const vehicles = await Repository.Vehicle.findVehicles(filter);

      res.status(200).json(vehicles);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred" });
      }
    }
  }

  static async getVehicleDetails(req: Request, res: Response): Promise<any> {
    try {
      const vehicleId = req.params.id;

      if (!vehicleId) {
        return res.status(400).json({ message: "Vehicle ID is required" });
      }

      const vehicle = await Repository.Vehicle.findVehicleById(vehicleId);

      if (!vehicle) {
        return res.status(404).json({ message: "Vehicle not found" });
      }

      res.status(200).json(vehicle);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred" });
      }
    }
  }
  static async addVehicle(req: Request, res: Response): Promise<void> {
    try {
      const {
        make,
        model,
        year,
        price,
        originalPrice,
        mileage,
        condition,
        bodyType,
        color,
        transmission,
        fuelType,
        description,
        images,
        VIN,
        status,
        isNew,
        postedDate,
      } = req.body as VehicleInput;

      if (
        !make ||
        !model ||
        !year ||
        !price ||
        !originalPrice ||
        !mileage ||
        !condition ||
        !bodyType ||
        !color ||
        !transmission ||
        !fuelType ||
        !description ||
        !VIN ||
        typeof isNew === "undefined"
      ) {
        res.status(400).json({ message: "Missing required fields" });
        return;
      }

      const existing = await Repository.Vehicle.findVehicleByVin(VIN);
      console.log(existing, "existing vehicle", VIN);
      if (existing) {
        res
          .status(400)
          .json({ message: "Vehicle with this VIN already exists" });
        return;
      }

      const newVehicle = await Repository.Vehicle.createVehicle({
        make,
        model,
        year,
        price,
        originalPrice,
        mileage,
        condition,
        bodyType,
        color,
        transmission,
        fuelType,
        description,
        images: images || [],
        VIN,
        status: status || "Available",
        isNew,
        postedDate: postedDate || new Date(),
        userId: req.body.user?.id,
      });

      res.status(201).json(newVehicle);
    } catch (error) {
      console.error(error);
      if (error instanceof Error && error.name === "ValidationError") {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }
}
