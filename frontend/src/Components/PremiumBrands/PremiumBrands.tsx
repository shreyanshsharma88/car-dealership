import { ArrowOutward } from "@mui/icons-material";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { toast } from "react-toastify";
import { StaticPremiumBrands } from "../../utils";
import { BrandCard } from "./BrandCard";
import { useViewPort } from "../../Hooks";

export const PremiumBrands = () => {
  const { isMobile } = useViewPort();

  return (
    <Stack
      direction="column"
      gap={isMobile ? 2 : 3}
      justifyContent="center"
      alignItems="center"
      sx={{
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
      }}
    >
      <Stack
        direction="row"
        justifyContent={isMobile ? 'center' :"space-between"}
        alignItems="center"
        width="100%"
        flexWrap="wrap"
        gap={isMobile ? 1 : 0}
      >
        <Typography
          variant={isMobile ? "h5" : "h3"}
          textAlign={isMobile ? "center" : "left"}
          flex={isMobile ? "1 1 100%" : "initial"}
        >
          Explore Our Premium Brands
        </Typography>
        <Button
          variant="text"
          onClick={() => toast.error("No brands to show currently")}
          endIcon={<ArrowOutward />}
          sx={{
            fontSize: isMobile ? "0.75rem" : "initial",
            px: isMobile ? 1 : 0,
            py: isMobile ? 0.5 : 0,
          }}
        >
          Show All Brands{" "}
        </Button>
      </Stack>

      <Grid container spacing={isMobile ? 1 : 2} justifyContent="center" sx={{
        width: "100%",
      }}>
        {StaticPremiumBrands.map((brand) => (
          <Grid
            size={{
              xs: 6,
              sm: 4,
              md:  2,
            }}
            key={brand.label}
          >
            <BrandCard brandLogo={brand.image} brandName={brand.label} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
