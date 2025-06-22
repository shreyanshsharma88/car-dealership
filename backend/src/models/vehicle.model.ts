import mongoose from "mongoose";

export const vehicleSchema = new mongoose.Schema(
  {
    make: {
      type: String,
      required: [true, "Please add a make"],
      enum: [
        "Ford",
        "Honda",
        "Hyundai",
        "Infiniti",
        "Jaguar",
        "Jeep",
        "Chrysler",
        "Citroen",
        "Cupra",
        "Dacia",
        "DS",
        "Fiat",
        "Land Rover",
        "Lexus",
        "Mercedes-Benz",
        "Mazda",
        "MG",
        "Kia",
        "Abarth",
        "Romeo",
        "Audi",
        "Bentley",
        "BMW",
        "Chevrolet",
        "Mini",
        "Mitsubishi",
        "Nissan",
        "Peugeot",
        "Porsche",
        "Renault",
        "Toyota"
      ],
    },
    model: {
      type: String,
      required: [true, "Please add a model"],
    },
    year: {
      type: Number,
      required: [true, "Please add a year"],
      min: 1900,
      max: new Date().getFullYear() + 1,
    },
    price: {
      type: Number,
      required: [true, "Please add a price"],
      min: 0,
    },
    originalPrice: {
      type: Number,
      required: [true, "Please add an original price"],
      min: 0,
    },
    mileage: {
      type: Number,
      required: [true, "Please add mileage"],
      min: 0,
    },
    condition: {
      type: String,
      enum: ["New", "Used"],
      required: [true, "Please specify condition"],
    },
    bodyType: {
      type: String,
      required: [true, "Please add a body type"],
      enum: [
        "Sedan",
        "SUV",
        "Truck",
        "Coupe",
        "Convertible",
        "Hatchback",
        "Minivan",
        "Hybrid",
      ],
    },
    color: {
      type: String,
      required: [true, "Please add a color"],
    },
    transmission: {
      type: String,
      enum: ["Automatic", "Manual"],
      required: [true, "Please specify transmission type"],
    },
    fuelType: {
      type: String,
      enum: ["Petrol", "Diesel", "Electric", "Hybrid"],
      required: [true, "Please specify fuel type"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
      maxlength: 1000,
    },
    images: {
      type: [String],
      default: [],
    },
    VIN: {
      type: String,
      unique: true,
      required: [true, "Please add a VIN"],
      minlength: 17,
      maxlength: 17,
    },
    status: {
      type: String,
      enum: ["Available", "Sold", "Pending"],
      default: "Available",
    },
    isNew: {
      type: Boolean,
      required: [true, "Please specify if the vehicle is new"],
      default: false,
    },
    postedDate: {
      type: Date,
      default: Date.now,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please add a user ID"],
    }
  },
  {
    timestamps: true,
  }
);

vehicleSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (_, ret) => {
    ret.id = ret._id;
    delete ret._id;
  },
});

export const VehicleModel = mongoose.model("Vehicle", vehicleSchema);
