import { Stack } from "@mui/material";
import { WhyUsContainer } from "./WhyUs";
import { GutteredContainer } from "../GutteredContainer";
import { PopularMakes } from "./PopularMakes";
import { useViewPort } from "../../Hooks";

export const PopularMakesContainer = () => {
  const { isMobile } = useViewPort();
  return (
    <Stack gap={isMobile ? 2 :8}>
      <GutteredContainer>
        <WhyUsContainer />
      </GutteredContainer>
      <Stack
        width="100%"
        bgcolor="secondary.dark"
        height={isMobile ? "auto" : "70dvh"}
        justifyContent="center"
      >
        <GutteredContainer >
          <PopularMakes />
        </GutteredContainer>
      </Stack>
    </Stack>
  );
};
