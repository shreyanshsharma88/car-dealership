import { VehicleModel } from "../models/vehicle.model";


export class VehicleRepository {
  static async findVehicles(filter: any) {
    return await VehicleModel.find(filter);
  }

  static async createVehicle(vehicleData: any) {
    return await VehicleModel.create(vehicleData);
  }

  static async findVehicleByVin(vin: string) {
    return await VehicleModel.findOne({ VIN: vin });
  }

  static async findVehicleById(id: string) {
    return await VehicleModel.findById(id);
  }
}