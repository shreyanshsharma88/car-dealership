import { Request, Response } from "express";
import { findVehicles } from "../repository/vehicle.repository";

export const getVehicles = async (req: Request, res: Response) => {
  try {
    const { make, model, year, minPrice, maxPrice, bodyType } = req.query;

    const filter: any = {};

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

    const vehicles = await findVehicles(filter);

    res.status(200).json(vehicles);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

export const getVehicleDetails = async (req: Request, res: Response): Promise<any> => {
  try {
    const vehicleId = req.params.id;

    if (!vehicleId) {
      return res.status(400).json({ message: "Vehicle ID is required" });
    }

    const vehicle = await findVehicles({ _id: vehicleId });

    if (!vehicle || vehicle.length === 0) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    res.status(200).json(vehicle[0]);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};
