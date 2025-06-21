import { Button, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useViewPort } from "../../Hooks";
import { ArrowOutward } from "@mui/icons-material";
import { toast } from "react-toastify";
import { carBrands } from "../../utils";

type TOptions =
  | "New Cars for sale"
  | "Used Cars for sale"
  | "Browse by type"
  | "Browse by brand";
const options: TOptions[] = [
  "New Cars for sale",
  "Used Cars for sale",
  "Browse by type",
  "Browse by brand",
];
export const ShopYourWay = () => {
  const [selected, setSelected] = useState<TOptions>("New Cars for sale");
  const { isMobile } = useViewPort();
  return (
    <Stack
      direction="column"
      gap={isMobile ? 2 : 3}
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        direction="row"
        justifyContent={isMobile ? "center" : "space-between"}
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
          Shop Box Car your way
        </Typography>
        <Button
          variant="text"
          onClick={() => toast.error("Not available")}
          endIcon={<ArrowOutward />}
          sx={{
            fontSize: isMobile ? "0.75rem" : "initial",
            px: isMobile ? 1 : 0,
            py: isMobile ? 0.5 : 0,
          }}
        >
          View All
        </Button>
      </Stack>
      <Stack
        direction="row"
        borderBottom="1px solid gray"
        justifyContent="start"
        width="100%"
        gap={4}
      >
        {options.map((type) => (
          <Stack
            py={1}
            key={type}
            onClick={() => setSelected(type)}
            sx={{
              borderBottom: selected === type ? "2px solid" : "none",
              borderColor: selected === type ? "info.main" : "transparent",
              cursor: "pointer",
            }}
          >
            <Typography>{type}</Typography>
          </Stack>
        ))}
      </Stack>
      <Grid container spacing={2}>
        {carBrands.map(brand => (
            <Grid key={brand} size={{
                xs:2
            }}>
                <Typography variant="body2">{brand}</Typography>
            </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
