import { useQuery } from "@tanstack/react-query";
import { api } from "../http";
import type { IFilter } from "../utils";

export const useGetVehicles = ({ params }: { params: IFilter }) => {
  return useQuery({
    queryKey: ["vehicles", params],
    queryFn: () => api.getVehicles(params),
  });
};
