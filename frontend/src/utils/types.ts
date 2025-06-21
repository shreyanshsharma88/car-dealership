export interface IUserDetails {
  username: string;
  email: string;
  id: string;
}

export type TCarType = "All" | "New" | "Used";

export interface VehicleCardProps {
  _id: string;
  imageUrl: string;
  make: string;
  model: string;
  year: number;
  description: string;
  mileage: number;
  fuelType: "Petrol" | "Diesel" | "Electric" | "Hybrid";
  transmission: "Automatic" | "Manual";
  price: number;
  originalPrice?: number;
  onViewDetails: (vehicleId: string) => void;
  onBookmarkToggle?: (vehicleId: string, isBookmarked: boolean) => void;
  isBookmarked?: boolean;
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
