import { ArrowOutward } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import { useViewPort } from "../../Hooks";
import { dummyVehicles } from "../../utils";
import { GenericCarousel } from "./VehicleCarousel";
import { VehicleCard } from "./VehicleCard";
export const Vehicles = () => {
  const { isMobile } = useViewPort();
  const [selectedCarType, setSelectedCarType] = useState<TCarType>("In Stock");

  return (
    <Stack
      direction="column"
      gap={isMobile ? 2 : 3}
      justifyContent="center"
      alignItems="center"
      sx={{
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
      }}
    >
      <Stack
        direction="row"
        justifyContent={isMobile ? "center" : "space-between"}
        alignItems="center"
        width="100%"
        flexWrap="wrap"
        gap={isMobile ? 1 : 0}
      >
        <Typography
          variant={isMobile ? "h5" : "h3"}
          textAlign={isMobile ? "center" : "left"}
          flex={isMobile ? "1 1 100%" : "initial"}
        >
          Explore All Vehicles
        </Typography>
        <Button
          variant="text"
          onClick={() => toast.error("No vehicles to show currently")}
          endIcon={<ArrowOutward />}
          sx={{
            fontSize: isMobile ? "0.75rem" : "initial",
            px: isMobile ? 1 : 0,
            py: isMobile ? 0.5 : 0,
          }}
        >
          Show All Brands{" "}
        </Button>
      </Stack>
      <Stack
        direction="row"
        borderBottom="1px solid gray"
        justifyContent="start"
        width="100%"
        gap={2}
      >
        {CarTypes.map((type) => (
          <Stack
            py={1}
            key={type}
            onClick={() => setSelectedCarType(type)}
            sx={{
              borderBottom: selectedCarType === type ? "2px solid" : "none",
              borderColor:
                selectedCarType === type ? "info.main" : "transparent",
              cursor: "pointer",
            }}
          >
            <Typography>{type}</Typography>
          </Stack>
        ))}
      </Stack>

      <GenericCarousel
        items={dummyVehicles}
        RenderComponent={VehicleCard}
      />
    </Stack>
  );
};

type TCarType = "In Stock" | "New Cars" | "Used Cars" | "All";

const CarTypes: TCarType[] = ["In Stock", "New Cars", "Used Cars"];
