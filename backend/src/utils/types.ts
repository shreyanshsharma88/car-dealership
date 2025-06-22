export interface VehicleInput {
    make: string;
    model: string;
    year: number;
    price: number;
    originalPrice: number;
    mileage: number;
    condition: "New" | "Used";
    bodyType:
      | "Sedan"
      | "SUV"
      | "Truck"
      | "Coupe"
      | "Convertible"
      | "Hatchback"
      | "Minivan"
      | "Hybrid";
    color: string;
    transmission: "Automatic" | "Manual";
    fuelType: "Petrol" | "Diesel" | "Electric" | "Hybrid";
    description: string;
    images?: string[];
    VIN: string;
    status?: "Available" | "Sold" | "Pending";
    isNew: boolean;
    postedDate?: Date;
    userId: string; 
  }
  