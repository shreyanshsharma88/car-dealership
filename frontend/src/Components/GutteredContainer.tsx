import { Stack, styled } from "@mui/material";

export const GutteredContainer = styled(Stack)(({ theme }) => ({
  width: "75%",
  alignSelf: "center",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    alignSelf: "center",
  },
}));
