import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";
import {
  AddVehicleModal,
  LoginSignupContainer,
  SearchedVehicles,
  VehicleDetailsModel,
} from "../Components";
import { api } from "../http";
import type { GlobalModalContextType, IFilter, IUser } from "../utils";

const GlobalContext = createContext<GlobalModalContextType | undefined>(
  undefined
);
const token = localStorage.getItem("token");

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mode, setMode] = useState<"login" | "signup" | null>(null);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [userDetails, setUserDetails] = useState<IUser | null>(null);

  useQuery({
    queryKey: ["userDetails", token],
    queryFn: async () => {
      const data = await api.getUserDetails();
      setUserDetails(data);
      return data;
    },
    enabled: !!token
  });

  const openAuthModal = useCallback(
    (mode: "login" | "signup" = "login") => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        newParams.set("auth", mode);
        return newParams;
      });
    },
    [setSearchParams]
  );

  const closeAuthModal = useCallback(() => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.delete("auth");
      return newParams;
    });
  }, [setSearchParams]);

  const handleSubmitListing = useCallback(() => {
    if (!userDetails || !token) {
      openAuthModal("login");
      return;
    }
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("submit-listing", "true");
      return newParams;
    });
  }, [openAuthModal, setSearchParams, token, userDetails]);

  const getVehiclesMutation = useMutation({
    mutationKey: ["vehicles"],
    mutationFn: (filters: IFilter) => api.getVehicles(filters),
    onSuccess: () => {
      setShowSearchResults(true);
    },
  });

  const handleSearchVehicles = useCallback(
    (filters: IFilter) => {
      getVehiclesMutation.mutate(filters);
      return getVehiclesMutation.data;
    },
    [getVehiclesMutation]
  );

  const isLoggedIn = useMemo(() => {
    return !!userDetails && !!token;
  }, [token, userDetails]);

  const handleViewCarDetails = useCallback(
    (vehicleId: string) => {
      if (!isLoggedIn) {
        openAuthModal("login");
        return;
      }
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        newParams.set("vehicleId", vehicleId);
        return newParams;
      });
    },
    [isLoggedIn, openAuthModal, setSearchParams]
  );

  const vehicleModalOpen = useMemo(() => {
    return searchParams.has("vehicleId") && isLoggedIn;
  }, [isLoggedIn, searchParams]);

  useEffect(() => {
    const param = searchParams.get("auth");
    if (param === "login" || param === "signup") {
      setMode(param);
    } else {
      setMode(null);
    }
  }, [searchParams]);

  const value = useMemo(
    () => ({
      openAuthModal,
      closeAuthModal,
      mode,
      userDetails,
      handleSubmitListing,
      handleViewCarDetails,
      handleSearchVehicles,
    }),
    [
      closeAuthModal,
      mode,
      openAuthModal,
      userDetails,
      handleSubmitListing,
      handleViewCarDetails,
      handleSearchVehicles,
    ]
  );

  return (
    <GlobalContext.Provider value={value}>
      {children}
      <>
        <SearchedVehicles
          onClose={() => setShowSearchResults(false)}
          open={showSearchResults}
          vehicles={getVehiclesMutation.data}
          loading={getVehiclesMutation.isPending}
        />
        <VehicleDetailsModel
          open={vehicleModalOpen}
          onClose={() => {
            setSearchParams((prev) => {
              const newParams = new URLSearchParams(prev);
              newParams.delete("vehicleId");
              return newParams;
            });
          }}
        />
        <AddVehicleModal
          open={!!searchParams.get("submit-listing") && isLoggedIn}
          onClose={() => {
            setSearchParams((prev) => {
              const newParams = new URLSearchParams(prev);
              newParams.delete("submit-listing");
              return newParams;
            });
          }}
        />
        <LoginSignupContainer open={!!mode} onClose={closeAuthModal} />
      </>
    </GlobalContext.Provider>
  );
};

export const useGlobalProvider = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalModal must be used within GlobalProvider");
  }
  return context;
};
