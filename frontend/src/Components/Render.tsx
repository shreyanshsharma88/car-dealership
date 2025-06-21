import { Divider, Stack } from "@mui/material";
import { useViewPort } from "../Hooks";
import { DetailsContainer } from "./Details";
import { GutteredContainer } from "./GutteredContainer";
import { Hero } from "./Hero";
import { PopularMakesContainer } from "./PopularMakes";
import { PremiumBrands } from "./PremiumBrands";
import { Vehicles } from "./Vehicles";

export const Render = () => {
  const { isMobile } = useViewPort();
  return (
    <Stack direction="column">
      <Stack minHeight={isMobile ? "100dvh" : "80dvh"}>
        <Hero />
      </Stack>
      <Stack
        sx={{
          borderTopLeftRadius: "40px",
          borderTopRightRadius: "40px",
        }}
        mt={isMobile ? 0 : -10}
        zIndex={10}
        gap={isMobile ? 2 : 6}
      >
        <Stack
          sx={{
            borderTopLeftRadius: "40px",
            borderTopRightRadius: "40px",
          }}
          width="100%"
          height={isMobile ? "100%" : "55dvh"}
          justifyContent="center"
          alignItems="center"
          bgcolor="background.paper"
        >
          <GutteredContainer>
            <PremiumBrands />
          </GutteredContainer>
        </Stack>
        <GutteredContainer>
          <Vehicles />
        </GutteredContainer>
        <DetailsContainer />
        <Divider />
        <GutteredContainer>
          <PopularMakesContainer />
        </GutteredContainer>
      </Stack>
    </Stack>
  );
};
