import { Divider, Stack } from "@mui/material";
import { useViewPort } from "../Hooks";
import { DetailsContainer } from "./Details";
import { GutteredContainer } from "./GutteredContainer";
import { Hero } from "./Hero";
import { PopularMakesContainer } from "./PopularMakes";
import { PremiumBrands } from "./PremiumBrands";
import { Vehicles } from "./Vehicles";
import { BlogContainer } from "./Blog";
import Footer from "./Footer";

export const Render = () => {
  const { isMobile } = useViewPort();
  return (
    <Stack direction="column" position="relative">
      <Stack minHeight={isMobile ? "100dvh" : "80dvh"}>
        <Hero />
      </Stack>
      <Stack
        position="absolute"
        top={isMobile ? "100dvh" : "80dvh"}
        left={0}
        width="100%"
        height={isMobile ? '90%':"88.5%"}
        bgcolor="primary.dark"
        zIndex={0}
      />
      <Stack
        sx={{
          borderRadius:isMobile ? 0: "60px",
        }}
        mt={isMobile ? 0 : -10}
        gap={isMobile ? 2 : 10}
        zIndex={100}
        overflow="hidden"
        bgcolor="background.default"
        pb={isMobile ? 2 : 10}
      >
        <Stack
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
        <PopularMakesContainer />
        <BlogContainer />
      </Stack>
        <Footer/>
    </Stack>
  );
};
