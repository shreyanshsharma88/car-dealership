import { useQuery } from "@tanstack/react-query";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";
import { LoginSignupContainer } from "../Components";
import { api } from "../http";
import type { GlobalModalContextType, IUser } from "../utils";

const GlobalContext = createContext<GlobalModalContextType | undefined>(
  undefined
);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mode, setMode] = useState<"login" | "signup" | null>(null);
  const [userDetails, setUserDetails] = useState<IUser | null>(null);
  const token = localStorage.getItem("token");

  useQuery({
    queryKey: ["userDetails", token],
    queryFn: async () => {
      const data = await api.getUserDetails();
      setUserDetails(data);
      return data.data;
    },
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

  useEffect(() => {
    const param = searchParams.get("auth");
    if (param === "login" || param === "signup") {
      setMode(param);
    } else {
      setMode(null);
    }
  }, [searchParams]);

  const isOpen = !!mode;

  const value = useMemo(
    () => ({
      openAuthModal,
      closeAuthModal,
      isOpen,
      mode,
      userDetails,
      handleSubmitListing,
    }),
    [
      closeAuthModal,
      isOpen,
      mode,
      openAuthModal,
      userDetails,
      handleSubmitListing,
    ]
  );

  return (
    <GlobalContext.Provider value={value}>
      {children}
      <>
        <LoginSignupContainer open={isOpen} onClose={closeAuthModal} />
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
