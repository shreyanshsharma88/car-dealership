import { Stack } from "@mui/material";
import { toast } from "react-toastify";
import { HeroBackground } from "./HeroBackground";
import { Navbar } from "./Navbar";

export const Hero = () => {

  return (
    <Stack height='100%' >
      <Stack p={3} position="absolute" width="100%" height="100%" zIndex={1}>
        <Navbar
          userDetails={null}
          handleSignin={() => toast("integrate something")}
        />
      </Stack>
      <Stack position="relative" width='100%' height='100%'  >
        <HeroBackground />
      </Stack>
    </Stack>
  );
};