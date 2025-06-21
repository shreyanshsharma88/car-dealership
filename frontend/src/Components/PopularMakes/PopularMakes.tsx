import { ArrowOutward } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import { useViewPort } from "../../Hooks";
import { dummyVehicles, type VehicleCardProps } from "../../utils";
import { VehicleCard } from "../Vehicles";
import { GenericCarousel } from "../Vehicles/VehicleCarousel";

type TMake = "Audi" | "Ford" | "Mercedes";
const StaticMakes: TMake[] = ["Audi", "Ford", "Mercedes"];

const DarkModeVehicleCard: React.FC<VehicleCardProps> = (props) => {
  return <VehicleCard {...props} mode="dark" />;
};
export const PopularMakes = () => {
  const [selectedMake, setSelectedMake] = useState<TMake>("Audi");

  const { isMobile } = useViewPort();
  return (
    <Stack width="100%" gap={2}>
      <Stack
        direction="row"
        justifyContent={isMobile ? "center" : "space-between"}
        alignItems="center"
        width="100%"
        flexWrap="wrap"
        gap={isMobile ? 1 : 0}
        sx={{
          ".MuiTypography-root": {
            color: "#fff",
          },
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h3"}
          textAlign={isMobile ? "center" : "left"}
          flex={isMobile ? "1 1 100%" : "initial"}
        >
          Explore Our Premium Brands
        </Typography>
        <Button
          variant="text"
          onClick={() => toast.error("No popular makes to show currently")}
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
        sx={{
          ".MuiTypography-root": {
            color: "#fff",
          },
        }}
      >
        {StaticMakes.map((make) => (
          <Stack
            py={1}
            key={make}
            onClick={() => setSelectedMake(make)}
            sx={{
              borderBottom: selectedMake === make ? "2px solid" : "none",
              borderColor: selectedMake === make ? "info.main" : "transparent",
              cursor: "pointer",
            }}
          >
            <Typography>{make}</Typography>
          </Stack>
        ))}
      </Stack>
      <GenericCarousel
        RenderComponent={DarkModeVehicleCard}
        items={dummyVehicles}
        mode="dark"
      />
    </Stack>
  );
};
