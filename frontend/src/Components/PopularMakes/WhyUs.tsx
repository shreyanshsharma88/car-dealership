import { Box, Grid, Stack, Typography } from "@mui/material";
import { useViewPort } from "../../Hooks";
import { WhyUs } from "../../utils";

export const WhyUsContainer = () => {
  const { isMobile } = useViewPort();
  return (
    <Stack direction="column" width="100%" gap={2}>
      <Typography
        variant={isMobile ? "h5" : "h3"}
        textAlign={isMobile ? "center" : "left"}
      >
        Why Choose Us
      </Typography>
      <Grid
        container
        sx={{
          width: "100%",
        }}
      >
        {WhyUs.map((item, index) => (
          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 3,
            }}
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              pt: 3,
              gap: 1,
            }}
          >
            <Box
              component="img"
              src={item.img}
              alt={item.label}
              height={50}
              width={50}
            />
            <Typography fontWeight={600} variant="body1">
              {item.label}
            </Typography>
            <Typography variant="body2">{item.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
