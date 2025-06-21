import { ArrowOutward, CheckCircleOutline } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useViewPort } from "../../Hooks";

export const FairPriceContainer = () => {
  const { isMobile } = useViewPort();
  return (
    <Stack
      direction={isMobile ? "column" : "row"}
      sx={{
        width: "100%",
        bgcolor: "secondary.main",
        borderRadius: { xs: 2, sm: 4 },
        overflow: "hidden",
        my: { xs: 4, sm: 8 },
        mx: "auto",
        maxWidth: { xs: "95%", md: "1200px" },
      }}
    >
      <Box
        sx={{
          flex: { xs: "0.5 1 100%", sm: "1 1 40%" },
          backgroundImage: "url(/public/assets/images/fair-price-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: { xs: "250px", sm: "450px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      />

      <Stack
        sx={{
          flex: { xs: "1 1 100%", sm: "1 1 40%" },
          p: { xs: 3, sm: 5 },
          bgcolor: "secondary.main",
          borderRadius: { xs: "0 0 8px 8px", sm: "0 40px 40px 0" },
        }}
        gap={isMobile ? 2 : 3}
      >
        <Typography
          variant={isMobile ? "h5" : "h4"}
          fontWeight="bold"
          color="text.primary"
        >
          Get A Fair Price For Your Car
        </Typography>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight="bold"
          color="text.primary"
        >
          Sell To Us Today
        </Typography>

        <Typography
          variant={isMobile ? "body2" : "body1"}
          color="text.secondary"
        >
          We are committed to providing our customers with exceptional service,
          competitive pricing, and a wide range of.
        </Typography>

        <Stack gap={1}>
          {[
            "We are the UK's largest provider, with more patrols in more places",
            "You get 24/7 roadside assistance",
            "We fix 4 out of 5 cars at the roadside",
          ].map((item, index) => (
            <Stack key={index} direction="row" alignItems="center" gap={1}>
              <CheckCircleOutline
                sx={{ color: "success.main", fontSize: isMobile ? 18 : 20 }}
              />
              <Typography
                variant={isMobile ? "body2" : "caption"}
                color="text.primary"
              >
                {item}
              </Typography>
            </Stack>
          ))}
        </Stack>

        <Button
          variant="contained"
          sx={{
            mt: 2,
            bgcolor: "info.main",
            color: "#fff",
            borderRadius: "99px",
            textTransform: "none",
            px: 4,
            py: 1.5,
            width: isMobile ? "100%" : "fit-content",
            alignSelf: isMobile ? "center" : "flex-start",
            "&:hover": {
              bgcolor: "info.dark",
            },
          }}
          endIcon={<ArrowOutward />}
          onClick={() => alert("Get Started (not implemented)")}
        >
          Get Started
        </Button>
      </Stack>
    </Stack>
  );
};
