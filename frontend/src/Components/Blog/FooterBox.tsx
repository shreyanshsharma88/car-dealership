import { Box, Button, Stack, Typography } from "@mui/material";
import type { IFooterBoxes } from "../../utils";
import { useViewPort } from "../../Hooks";

export const FooterBoxCard = ({
  bgColor,
  buttonColor,
  description,
  img,
  onButtonClick,
  label,
}: IFooterBoxes) => {
  const { isMobile } = useViewPort();
  return (
    <Stack
      borderRadius="25px"
      bgcolor={bgColor}
      p={isMobile ? 2 : 0}
      height="350px"
    //   maxWidth={600}
      gap={2}
      justifyContent="center"
      alignItems="center"
      direction={isMobile ? "column" : "row"}
    >
      <Stack width={isMobile ? "100%" : "50%"} direction="column" gap={2}>
        <Typography variant="h4" fontWeight={600}>
          {label}
        </Typography>
        <Typography variant="body2">{description}</Typography>
        <Button
          onClick={onButtonClick}
          variant="contained"
          sx={{
            bgcolor: buttonColor,
            color: "white",
            width: '150px',
            p:2
          }}
        >
          Get Started
        </Button>
      </Stack>
      <Box
        component="img"
        src={img}
        sx={{
          alignSelf: "end",
          justifySelf: "end",
        }}
      />
    </Stack>
  );
};
