import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import connectDB from "./connection";
import { InquiryModel, inquirySchema } from "./models/model.inquiry";
import { VehicleModel, vehicleSchema } from "./models/model.vehicle";
import { UserModel, userSchema } from "./models/model.user";
dotenv.config();

const app = express();

connectDB();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
export default app;
