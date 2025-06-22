import { Stack } from "@mui/material";
import { HeroBackground } from "./HeroBackground";
import { Navbar } from "./Navbar";
import { useGlobalProvider } from "../../Providers/GlobalProvider";

export const Hero = () => {
  const { userDetails , handleSubmitListing} = useGlobalProvider();

  return (
    <Stack height="100%">
      <Stack p={3} position="absolute" width="100%" height="100%" zIndex={1}>
        <Navbar  handleSubmitListing={handleSubmitListing} userDetails={userDetails} />
      </Stack>
      <Stack position="relative" width="100%" height="100%">
        <HeroBackground />
      </Stack>
    </Stack>
  );
};
