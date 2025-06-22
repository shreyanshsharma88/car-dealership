import type { IFilter, Vehicle } from "../utils";
import authAxios from "./axios";

export const api = {
  loginUser: async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const res = await authAxios.post("/auth/login", {
      email,
      password,
    });
    return res.data;
  },
  signupUser: async ({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }) => {
    const res = await authAxios.post("/auth/signup", {
      username,
      email,
      password,
    });
    return res.data;
  },
  getUserDetails: async () => {
    const res = await authAxios.get("/auth/user");
    return res.data;
  },
  getVehicles: async (params: IFilter) => {
    const urlParams = new URLSearchParams();
    if (params.make) urlParams.append("make", params.make);
    if (params.model) urlParams.append("model", params.model);
    if (params.year) urlParams.append("year", params.year.toString());
    if (params.isNew) urlParams.append("isNew", params.isNew.toString());
    if (params.minPrice)
      urlParams.append("minPrice", params.minPrice.toString());
    if (params.maxPrice)
      urlParams.append("maxPrice", params.maxPrice.toString());
    if (params.bodyType) urlParams.append("bodyType", params.bodyType);
    const res = await authAxios.get(`/vehicles?${urlParams.toString()}`);
    return res.data;
  },
  getVehicleDetails: async (vehicleId: string) => {
    const res = await authAxios.get(`/vehicles/${vehicleId}`);
    return res.data;
  },
  submitVehicleListing: async (vehicleData: any) => {
    const res = await authAxios.post("/vehicles", vehicleData);
    return res.data;
  },
};
