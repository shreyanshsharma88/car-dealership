import {
  CircularProgress,
  Dialog,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import type { Vehicle } from "../../utils";
import { useViewPort } from "../../Hooks";
import { VehicleCard } from "./VehicleCard";
import { useGlobalProvider } from "../../Providers/GlobalProvider";

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
    >
      <Stack p={2} direction="column" gap={2} width="100%">
        <Typography variant="h2">Searched Cars as per your needs</Typography>
        {vehicles?.length === 0 && (
          <Typography variant="h6">No Results Found...</Typography>
        )}
        {loading ? (
          <CircularProgress sx={{alignSelf:'center'}}/>
        ) : (
          <Grid container spacing={2}>
            {" "}
            {vehicles?.map((item) => (
              <Grid
                key={item.id}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                  lg: 3,
                }}
                sx={{m:2}}
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
