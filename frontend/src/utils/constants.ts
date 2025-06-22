import { toast } from "react-toastify";
import type { IArticleCardProps, TCarType, Testimonial } from "./types";
import * as yup from "yup";

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

export const FeaturedCarBodyTypes = [
  {
    label: "SUV",
    icon: "/public/assets/images/suv.svg",
    value: "suv",
  },
  {
    label: "Sedan",
    icon: "/public/assets/images/sedan.svg",
    value: "sedan",
  },
  {
    label: "Hatchback",
    icon: "/public/assets/images/hatchback.svg",
    value: "hatchback",
  },
  {
    label: "Coupe",
    icon: "/public/assets/images/coupe.svg",
    value: "coupe",
  },
  {
    label: "Hybrid",
    icon: "/public/assets/images/hybrid.svg",
    value: "hybrid",
  },
];

export const makes = [
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
  "Mercedes",
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
  "Toyota",
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
      ...makes.map((make) => ({
        label: make,
        value: make.toLowerCase(),
      })),
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

export const WhyUs = [
  {
    label: "Special Financing Offers",
    description:
      "Our stress-free finance department that can find financial solutions to save you money.",
    img: "/public/assets/images/f1.svg.svg",
  },
  {
    label: "Trusted Car Dealership",
    description:
      "Our stress-free finance department that can find financial solutions to save you money.",
    img: "/public/assets/images/f2.svg.svg",
  },
  {
    label: "Transparent Pricing",
    description:
      "Our stress-free finance department that can find financial solutions to save you money.",
    img: "/public/assets/images/f3.svg.svg",
  },
  {
    label: "Expert Car Service",
    description:
      "Our stress-free finance department that can find financial solutions to save you money.",
    img: "/public/assets/images/f4.svg.svg",
  },
];

export const carBrands = [
  "Ford Cars",
  "Honda Cars",
  "Hyundai Cars",
  "Infiniti Cars",
  "Jaguar Cars",
  "Jeep Cars",
  "Chrysler Cars",
  "Citroen Cars",
  "Cupra Cars",
  "Dacia Cars",
  "DS Cars",
  "Fiat Cars",
  "Land Rover Cars",
  "Lexus Cars",
  "Mercedes-Benz Cars",
  "Mazda Cars",
  "MG Cars",
  "Kia Cars",
  "Abarth Cars",
  "Romeo Cars",
  "Audi Cars",
  "Bentley Cars",
  "BMW Cars",
  "Chevrolet Cars",
  "Mini Cars",
  "Mitsubishi Cars",
  "Nissan Cars",
  "Peugeot Cars",
  "Porsche Cars",
  "Renault Cars",
];

export const dummyArticles: IArticleCardProps[] = [
  {
    id: "article-001",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/2025-mini-cooper-s-hardtop-2-door-123-66f2bf63dab9c.jpg?crop=0.561xw:0.473xh;0.246xw,0.341xh&resize=2048:*",
    category: "News",
    author: "Admin",
    date: "June 20, 2025",
    title:
      "Mini Cooper S 2025 Unveiled: A Closer Look at the Future of Compact Cars",
  },
  {
    id: "article-002",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/2025-mini-cooper-s-hardtop-2-door-123-66f2bf63dab9c.jpg?crop=0.561xw:0.473xh;0.246xw,0.341xh&resize=2048:*",
    category: "Review",
    author: "Jane Doe",
    date: "June 18, 2025",
    title:
      "First Drive: Experiencing the Nimble Handling of the New Mini Cooper",
  },
  {
    id: "article-003",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/2025-mini-cooper-s-hardtop-2-door-123-66f2bf63dab9c.jpg?crop=0.561xw:0.473xh;0.246xw,0.341xh&resize=2048:*",
    category: "Tech",
    author: "Tech Enthusiast",
    date: "June 15, 2025",
    title:
      "Innovative Infotainment: Inside the Mini Cooper's Next-Gen Tech Suite",
  },
];

export const testimonialData: Testimonial[] = [
  {
    name: "Ali Tufan",
    title: "Designer",
    rating: 5,
    message:
      "I’d suggest Macklin Motors Nissan Glasgow South to a friend because I had great service from my salesman Patrick and all of the team.",
    image: "https://randomuser.me/api/portraits/men/32.jpg", // Replace with your own image
  },
  {
    name: "Samantha Lee",
    title: "Developer",
    rating: 4,
    message: "Really satisfied with the support. Highly recommend the team!",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];



export const vehicleSchema = yup.object().shape({
  make: yup.string().required("Make is required"),
  model: yup.string().required("Model is required"),
  year: yup
    .number()
    .typeError("Year must be a number")
    .min(1900)
    .max(new Date().getFullYear() + 1)
    .required("Year is required"),
  price: yup.number().required("Price is required"),
  originalPrice: yup.number().required("Original price is required"),
  mileage: yup.number().required("Mileage is required"),
  condition: yup.string().oneOf(["New", "Used"] as const).required("Condition is required"),
  bodyType: yup.string().required("Body type is required"),
  color: yup.string().required("Color is required"),
  transmission: yup.string().required("Transmission is required"),
  fuelType: yup.string().required("Fuel type is required"),
  description: yup.string().required("Description is required"),
  VIN: yup
    .string()
    .length(17, "VIN must be exactly 17 characters")
    .required("VIN is required"),
  status: yup.string().required("Status is required"),
  isNew: yup.boolean().required(),
  images: yup
    .array()
    .of(
      yup.object().shape({
        url: yup.string().url("Must be a valid URL").required("Image URL is required"),
      })
    )
    .max(4, "Maximum 4 images allowed")
    .min(1, "At least 1 image URL is required")
    .required("Images are required")
    .default([]),
});