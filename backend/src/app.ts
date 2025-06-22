import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import connectDB from "./connection";
import { ProtectedVehicleRoutes, VehicleRoutes } from "./routes/vehicle.routes";
import { userRoutes } from "./routes/user.routes";
import { authMiddleware } from "./middleware/auth.middleware";
import { ProtectedInquiryRoutes } from "./routes/inquirt.routes";
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

app.use("/api", VehicleRoutes);
app.use("/api/auth", userRoutes);

app.use("/api", authMiddleware, ProtectedVehicleRoutes);
app.use("/api", authMiddleware, ProtectedInquiryRoutes);
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
