import { Grid, Stack, Typography } from "@mui/material";
import { FairPriceContainer } from "./FairPriceContainer";

export const DetailsContainer = () => {
  return (
    <Stack
      sx={{
        gap: { xs: 0, sm: 4, md: 6 },
      }}
    >
      <FairPriceContainer />
      <StatsContainer />
    </Stack>
  );
};

const StatsContainer = () => {
  return (
    <Stack
      width={"100%"}
      justifyContent="center"
      alignItems="center"
      alignSelf="center"
    >
      <Grid
        container
        sx={{
          width: { xs: "90%", sm: "70%" },
        }}
      >
        {Stats.map((stat, index) => (
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
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              p: 2,
            }}
          >
            <Typography variant="h3">{stat.value}</Typography>
            <Typography variant="body1">{stat.label}</Typography>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
const Stats = [
  {
    label: "Cars for sale",
    value: "836M",
  },
  {
    label: "Dealer Reviews",
    value: "738M",
  },
  {
    label: "Visitors per day",
    value: "100M",
  },
  {
    label: "Verified Dealers",
    value: "238M",
  },
];
