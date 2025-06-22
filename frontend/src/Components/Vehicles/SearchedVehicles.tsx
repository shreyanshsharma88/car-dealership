import {
  CircularProgress,
  Dialog,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import type { Vehicle } from "../../utils";
import { useViewPort } from "../../Hooks";
import { VehicleCard } from "./VehicleCard";
import { useGlobalProvider } from "../../Providers/GlobalProvider";
import { Close } from "@mui/icons-material";

export const SearchedVehicles = ({
  vehicles,
  open,
  onClose,
  loading,
}: {
  vehicles: Vehicle[];
  open: boolean;
  onClose: () => void;
  loading: boolean;
}) => {
  const { isMobile } = useViewPort();
  const { handleViewCarDetails } = useGlobalProvider();
  return (
    <Dialog
      open={open}
      maxWidth="lg"
      fullScreen={isMobile}
      fullWidth
      onClose={onClose}
      sx={{
        ".MuiPaper-root": {
          height: isMobile ? "100%" : "auto",
          minHeight: "300px",
        },
      }}
    >
      <Stack p={2} direction="column" gap={2} width="100%">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h2">Searched Cars as per your needs</Typography>
          {vehicles?.length === 0 && (
            <Typography variant="h6">No Results Found...</Typography>
          )}
          <IconButton onClick={onClose} sx={{ alignSelf: "center" }}>
            <Close />
          </IconButton>
        </Stack>
        {loading ? (
          <CircularProgress sx={{ alignSelf: "center" }} />
        ) : (
          <Grid container spacing={2} sx={{ width: "100%" }}>
            {vehicles?.map((item) => (
              <Grid
                key={item.id}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                  lg: 3.6,
                }}
                sx={{ m: 2 }}
              >
                <VehicleCard
                  {...item}
                  images={item.images}
                  onViewDetails={() => {
                    handleViewCarDetails(item.id);
                    onClose();
                  }}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Stack>
    </Dialog>
  );
};
