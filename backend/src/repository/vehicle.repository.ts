import { VehicleModel } from "../models/vehicle.model";

export const findVehicles = async (filter: any) => {
  return await VehicleModel.find(filter);
};
