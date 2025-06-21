import { toast } from "react-toastify";
import type { TCarType, VehicleCardProps } from "./types";

export const NavbarStaticOptions = [
  {
    label: "Home",
    action: () => toast.error("Static page, no action defined"),
    options: [
      {
        label: "Home",
        action: () => toast.error("Static page, no action defined"),
      },
      {
        label: "Browse cars",
        action: () => toast.error("Static page, no action defined"),
      },
    ],
  },
  {
    label: "Listings",
    action: () => toast.error("Static page, no action defined"),
    options: [
      {
        label: "My listings",
        action: () => toast.error("Static page, no action defined"),
      },
      {
        label: "Add listing",
        action: () => toast.error("Static page, no action defined"),
      },
    ],
  },
  {
    label: "Blog",
    action: () => toast.error("Static page, no action defined"),
    options: [
      {
        label: "Blog",
        action: () => toast.error("Static page, no action defined"),
      },
      {
        label: "Add post",
        action: () => toast.error("Static page, no action defined"),
      },
    ],
  },
  {
    label: "Pages",
    action: () => toast.error("Static page, no action defined"),
    options: [
      {
        label: "About us",
        action: () => toast.error("Static page, no action defined"),
      },
      {
        label: "Contact us",
        action: () => toast.error("Static page, no action defined"),
      },
    ],
  },
  {
    label: "About",
    action: () => toast.error("Static page, no action defined"),
    options: null,
  },
  {
    label: "Contact",
    action: () => toast.error("Static page, no action defined"),
    options: null,
  },
];

export const FeaturedCarModels = [
  {
    label: "SUV",
    icon: "/public/assets/images/suv.svg",
    id: "suv",
  },
  {
    label: "Sedan",
    icon: "/public/assets/images/sedan.svg",
    id: "sedan",
  },
  {
    label: "Hatchback",
    icon: "/public/assets/images/hatchback.svg",
    id: "hatchback",
  },
  {
    label: "Coupe",
    icon: "/public/assets/images/coupe.svg",
    id: "coupe",
  },
  {
    label: "Hybrid",
    icon: "/public/assets/images/hybrid.svg",
    id: "hybrid",
  },
];

export const SearchOptions = [
  {
    label: "Makes",
    value: "makes",
    options: [
      {
        label: "Any Make",
        value: "any-make",
      },
      {
        label: "Toyota",
        value: "toyota",
      },
      {
        label: "Honda",
        value: "honda",
      },
      {
        label: "Ford",
        value: "ford",
      },
      {
        label: "Chevrolet",
        value: "chevrolet",
      },
    ],
  },
  {
    label: "Model",
    value: "model",
    options: [
      {
        label: "Any Model",
        value: "any-model",
      },
      {
        label: "Camry",
        value: "camry",
      },
      {
        label: "Civic",
        value: "civic",
      },
      {
        label: "Mustang",
        value: "mustang",
      },
      {
        label: "Malibu",
        value: "malibu",
      },
    ],
  },
];

export const CarTypeOptions: TCarType[] = ["All", "New", "Used"];

export const StaticPremiumBrands = [
  {
    label: "Audi",
    image:
      "https://blog.logomaster.ai/hs-fs/hubfs/audi-logo-2016.jpg?width=672&height=454&name=audi-logo-2016.jpg",
  },
  {
    label: "BMW",
    image:
      "https://pngdownload.io/wp-content/uploads/2023/12/BMW-Logo-emblem-of-Bayerische-Motoren-Werke-AG-transparent-png-jpg.webp",
  },
  {
    label: "Ford",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKmKs_cw0wfgO6vQLLlG9hg0DNWVopHG1gQA&s",
  },
  {
    label: "Mercedes Benz",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0nYQ0IdVBSyIWZBHmaNZA7gF0pqBqtQvAKA&s",
  },
  {
    label: "Peugeot",
    image:
      "https://brandlogos.net/wp-content/uploads/2021/04/peugeot-logo-512x512.png",
  },
  {
    label: "Volkswagen",
    image: "https://icon2.cleanpng.com/20171220/xze/avjb44v76.webp",
  },
];


export const dummyVehicles: VehicleCardProps[] = [
  {
    _id: "6674e1d7a3f4b5c6d7e8f0a1",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZz_oWKikNFL_-5s4qAU2ucLL0O97kbc1DA&s",
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    description: "Long Range AWD with Autopilot. Excellent condition.",
    mileage: 15000,
    fuelType: "Electric",
    transmission: "Automatic",
    price: 45000,
    originalPrice: 48000, // Will show "Great Price"
    onViewDetails: (id) => console.log(`View details for ${id}`),
    onBookmarkToggle: (id, isBookmarked) => console.log(`Bookmark toggle for ${id}: ${!isBookmarked}`),
    isBookmarked: false,
  },
  {
    _id: "6674e1d7a3f4b5c6d7e8f0a2",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZz_oWKikNFL_-5s4qAU2ucLL0O97kbc1DA&s",
    make: "Ford",
    model: "F-150",
    year: 2022,
    description: "Lariat SuperCrew 4x4 with FX4 Off-Road Package. Low mileage.",
    mileage: 28000,
    fuelType: "Petrol",
    transmission: "Automatic",
    price: 52000,
    onViewDetails: (id) => console.log(`View details for ${id}`),
    onBookmarkToggle: (id, isBookmarked) => console.log(`Bookmark toggle for ${id}: ${!isBookmarked}`),
    isBookmarked: true,
  },
  {
    _id: "6674e1d7a3f4b5c6d7e8f0a3",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZz_oWKikNFL_-5s4qAU2ucLL0O97kbc1DA&s",
    make: "Honda",
    model: "Civic",
    year: 2021,
    description: "EX Sedan, well-maintained, perfect for city driving.",
    mileage: 45000,
    fuelType: "Petrol",
    transmission: "Manual",
    price: 20000,
    originalPrice: 21500, // Will show "Great Price"
    onViewDetails: (id) => console.log(`View details for ${id}`),
    onBookmarkToggle: (id, isBookmarked) => console.log(`Bookmark toggle for ${id}: ${!isBookmarked}`),
    isBookmarked: false,
  },
  {
    _id: "6674e1d7a3f4b5c6d7e8f0a4",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZz_oWKikNFL_-5s4qAU2ucLL0O97kbc1DA&s",
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2020,
    description: "C 300 Sedan, Luxury Package. Premium interior.",
    mileage: 35000,
    fuelType: "Petrol",
    transmission: "Automatic",
    price: 38000,
    onViewDetails: (id) => console.log(`View details for ${id}`),
    onBookmarkToggle: (id, isBookmarked) => console.log(`Bookmark toggle for ${id}: ${!isBookmarked}`),
    isBookmarked: true,
  },
  {
    _id: "6674e1d7a3f4b5c6d7e8f0a5",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZz_oWKikNFL_-5s4qAU2ucLL0O97kbc1DA&s",
    make: "Toyota",
    model: "RAV4 Hybrid",
    year: 2023,
    description: "XSE AWD Hybrid, excellent fuel economy, advanced safety features.",
    mileage: 12000,
    fuelType: "Hybrid",
    transmission: "Automatic",
    price: 35000,
    originalPrice: 36500, // Will show "Great Price"
    onViewDetails: (id) => console.log(`View details for ${id}`),
    onBookmarkToggle: (id, isBookmarked) => console.log(`Bookmark toggle for ${id}: ${!isBookmarked}`),
    isBookmarked: false,
  },
  {
    _id: "6674e1d7a3f4b5c6d7e8f0a6",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZz_oWKikNFL_-5s4qAU2ucLL0O97kbc1DA&s",
    make: "BMW",
    model: "X5",
    year: 2021,
    description: "xDrive40i SUV, M Sport Package. Luxurious and powerful.",
    mileage: 20000,
    fuelType: "Petrol",
    transmission: "Automatic",
    price: 60000,
    onViewDetails: (id) => console.log(`View details for ${id}`),
    onBookmarkToggle: (id, isBookmarked) => console.log(`Bookmark toggle for ${id}: ${!isBookmarked}`),
    isBookmarked: false,
  }
];

export const WhyUs = [
  {
    label: 'Special Financing Offers',
    description: "Our stress-free finance department that can find financial solutions to save you money.",
    img: "/public/assets/images/f1.svg.svg",
  },
  {
    label: 'Trusted Car Dealership',
    description: "Our stress-free finance department that can find financial solutions to save you money.",
    img: "/public/assets/images/f2.svg.svg",
  },
  {
    label: 'Transparent Pricing',
    description: "Our stress-free finance department that can find financial solutions to save you money.",
    img: "/public/assets/images/f3.svg.svg",
  },
  {
    label: 'Expert Car Service',
    description: "Our stress-free finance department that can find financial solutions to save you money.",
    img: "/public/assets/images/f4.svg.svg",
  },
]