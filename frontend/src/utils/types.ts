export interface IUserDetails {
  username: string;
  email: string;
  id: string;
}

export type TCarType = "All" | "New" | "Used";

export interface VehicleCardProps extends Vehicle {
  onViewDetails: (vehicleId: string) => void;
  mode?: "light" | "dark";
}
export interface IFooterBoxes {
  label: string;
  description: string;
  img: string;
  bgColor: string;
  buttonColor: string;
  onButtonClick?: () => void;
}

export interface IArticleCardProps {
  id: string;
  imageUrl: string;
  category?: string;
  author: string;
  date: string;
  title: string;
}

export interface Testimonial {
  name: string;
  title: string;
  rating: number;
  message: string;
  image: string;
}

export interface GlobalModalContextType {
  openAuthModal: (mode?: "login" | "signup") => void;
  closeAuthModal: () => void;
  mode: "login" | "signup" | null;
  userDetails: IUserDetails | null;
  handleSubmitListing: () => void;
  handleViewCarDetails: (vehicleId: string) => void;
  handleSearchVehicles: (filters: IFilter) => void;
  isLoggedIn: boolean;
}

export interface IUser {
  username: string;
  email: string;
  id: string;
}

export interface Vehicle {
  id: string;
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
  images: string[];
  VIN: string;
  status: "Available" | "Sold" | "Pending";
  isNew: boolean;
  postedDate: string;
  updatedAt: string;
}

export interface IFilter {
  make?: string;
  model?: string;
  year?: number;
  minPrice?: number;
  maxPrice?: number;
  bodyType?: string;
  isNew?: boolean;
}
