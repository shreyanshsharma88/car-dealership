import mongoose from "mongoose";
import { VehicleModel } from "../models/vehicle.model";
import { UserModel } from "../models/user.model";
import { InquiryModel } from "../models/inquiry.model";
import connectDB from "../connection";
import bcrypt from "bcryptjs"; // Import bcrypt for hashing passwords

const seedDB = async () => {
  await connectDB();

  // Clear existing data
  await UserModel.deleteMany({});
  await VehicleModel.deleteMany({});
  await InquiryModel.deleteMany({});

  console.log("Cleared existing data.");

  // --- Seed Users ---
  const users = [
    {
      username: "john_doe",
      email: "john.doe@example.com",
      password: "password123", 
    },
    {
      username: "jane_smith",
      email: "jane.smith@example.com",
      password: "password456",
    },
    {
      username: "peter_jones",
      email: "peter.jones@example.com",
      password: "password789",
    },
  ];

  const createdUsers = await UserModel.insertMany(users);
  console.log("Users seeded!");

  // --- Seed Vehicles ---
  const seedVehicles = [
    {
      make: "Toyota",
      model: "Camry",
      year: 2022,
      price: 25000,
      originalPrice: 28000,
      mileage: 15000,
      condition: "Used",
      bodyType: "Sedan",
      color: "Silver",
      transmission: "Automatic",
      fuelType: "Petrol",
      description:
        "A reliable and fuel-efficient sedan, perfect for city driving.",
      VIN: "12345678901234567",
      status: "Available",
      isNew: false,
     images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0GURvw-_0QbEltAiWlzbhcHyaXiXgjL3kw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7u1ed4Bj68rNt4ZGcutnd-qaVnoUPkor24w&s"
     ],
      userId: createdUsers[0]._id, // John Doe's ID
    },
    {
      make: "Honda",
      model: "CR-V",
      year: 2023,
      price: 32000,
      originalPrice: 33000,
      mileage: 5000,
      condition: "New",
      bodyType: "SUV",
      color: "Blue",
      transmission: "Automatic",
      fuelType: "Petrol",
      description: "A spacious and versatile SUV, great for families.",
      VIN: "23456789012345678",
      status: "Available",
      isNew: true,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkSJagro4VvEdnNZDn0XABAg-0OAPb7fDNIg&s"
      ],
      userId: createdUsers[1]._id, // Jane Smith's ID
    },
    {
      make: "Ford",
      model: "F-150",
      year: 2021,
      price: 45000,
      originalPrice: 50000,
      mileage: 25000,
      condition: "Used",
      bodyType: "Truck",
      color: "Black",
      transmission: "Automatic",
      fuelType: "Petrol",
      description: "A powerful and rugged truck, perfect for heavy-duty work.",
      VIN: "34567890123456789",
      status: "Available",
      isNew: false,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqD3hUvEheVvwIXUu_pbKfFzPV3XDYDGgJEQ&s",
      ],
      userId: createdUsers[2]._id, // Peter Jones' ID
    },
    {
      make: "BMW",
      model: "X5",
      year: 2022,
      price: 60000,
      originalPrice: 65000,
      mileage: 12000,
      condition: "Used",
      bodyType: "SUV",
      color: "White",
      transmission: "Automatic",
      fuelType: "Petrol",
      description: "A luxurious and powerful SUV, offering a smooth ride.",
      VIN: "45678901234567890",
      status: "Available",
      isNew: false,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUetRZIUs0hyjA-_7dnfvRIJLCKa_gCcywPw&s",
      ],
      userId: createdUsers[0]._id, // John Doe's ID
    },
    {
      make: "Audi",
      model: "A4",
      year: 2023,
      price: 48000,
      originalPrice: 50000,
      mileage: 3000,
      condition: "New",
      bodyType: "Sedan",
      color: "Gray",
      transmission: "Automatic",
      fuelType: "Petrol",
      description: "A stylish and modern sedan with advanced features.",
      VIN: "56789012345678901",
      status: "Available",
      isNew: true,
      images: [
        "https://cdn.pixabay.com/photo/2024/07/13/07/40/cars-8891625_1280.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD5qpouUifCa9x1-td7i8_4gkiIOh81MjO0g&s"
      ],
      userId: createdUsers[1]._id, // Jane Smith's ID
    },
    {
      make: "Mercedes",
      model: "C-Class",
      year: 2020,
      price: 40000,
      originalPrice: 45000,
      mileage: 30000,
      condition: "Used",
      bodyType: "Sedan",
      color: "Red",
      transmission: "Automatic",
      fuelType: "Diesel",
      description:
        "A classic luxury sedan, well-maintained and in great condition.",
      VIN: "67890123456789012",
      status: "Sold",
      isNew: false,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD5qpouUifCa9x1-td7i8_4gkiIOh81MjO0g&s"
      ],
      userId: createdUsers[2]._id, // Peter Jones' ID
    },
  ];

  const createdVehicles = await VehicleModel.insertMany(seedVehicles);
  console.log("Vehicles seeded!");

  // --- Seed Inquiries ---
  const inquiries = [
    {
      userId: createdUsers[0]._id, // John Doe
      name: "John Doe",
      email: "john.doe@example.com",
      vehicleId: createdVehicles[0]._id, // Inquiry about the Toyota Camry
      subject: "Inquiry about Toyota Camry",
      message:
        "I am interested in the 2022 Toyota Camry. Could you provide more details?",
    },
    {
      userId: createdUsers[1]._id, // Jane Smith
      name: "Jane Smith",
      email: "jane.smith@example.com",
      vehicleId: createdVehicles[1]._id, // Inquiry about the Honda CR-V
      subject: "Question about Honda CR-V",
      message: "Is the 2023 Honda CR-V still available for a test drive?",
    },
    {
      userId: createdUsers[2]._id, // Peter Jones
      name: "Peter Jones",
      email: "peter.jones@example.com",
      vehicleId: null, // General inquiry, not tied to a specific vehicle
      subject: "General Inquiry",
      message: "I'd like to learn more about your financing options.",
    },
    {
      userId: createdUsers[0]._id, // John Doe
      name: "John Doe",
      email: "john.doe@example.com",
      vehicleId: createdVehicles[3]._id, // Inquiry about the Audi A4
      subject: "Audi A4 availability",
      message: "Is the 2023 Audi A4 still in stock?",
    },
  ];

  await InquiryModel.insertMany(inquiries);
  console.log("Inquiries seeded!");

  mongoose.connection.close();
  console.log("Database seeded and connection closed.");
};

seedDB();
