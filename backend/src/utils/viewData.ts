import mongoose from "mongoose";
import { VehicleModel } from "../models/vehicle.model";
import connectDB from "../connection";

const viewData = async () => {
  await connectDB();
  const vehicles = await VehicleModel.find({});
  console.log(vehicles);
  mongoose.connection.close();
};

viewData();
