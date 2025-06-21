// src/db.ts
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const CONN_STRING = "mongodb://admin:password@localhost:27017/car_dealership?authSource=admin"
const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI)
    const conn = await mongoose.connect(CONN_STRING, {});

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1); 
  }
};

export default connectDB;
