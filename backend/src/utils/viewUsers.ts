import { UserModel } from "../models/user.model";
import mongoose from "mongoose";
import connectDB from "../connection";

const viewUsers = async () => {
  try {
    await connectDB();
    const users = await UserModel.find({});
    console.log("Users:");
    console.log(users);
    process.exit(0);
  } catch (error) {
    console.error("Error viewing users:", error);
    process.exit(1);
  }
};

viewUsers();
