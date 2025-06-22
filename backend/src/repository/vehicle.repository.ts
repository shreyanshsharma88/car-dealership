import { VehicleModel } from "../models/vehicle.model";

export const findVehicles = async (filter: any) => {
  return await VehicleModel.find();
};

export const createVehicle = async (vehicleData: any) => {
  return await VehicleModel.create(vehicleData);
}

export const findVehicleByVin = async (vin: string) => {
  return await VehicleModel.findOne({ VIN: vin });
}