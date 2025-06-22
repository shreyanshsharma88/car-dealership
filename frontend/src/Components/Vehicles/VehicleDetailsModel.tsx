import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Grid,
  Chip,
  Divider,
  Box,
  Stack,
} from "@mui/material";
import { useViewPort } from "../../Hooks";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { api } from "../../http";

export const VehicleDetailsModel = ({
  onClose,
  open,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const { isMobile } = useViewPort();
  const [sp] = useSearchParams();
  const vehicleId = sp.get("vehicleId");
  const { data: vehicle } = useQuery({
    queryKey: ["vehicleDetails", vehicleId],
    queryFn: () => api.getVehicleDetails(vehicleId!),
    enabled: !!vehicleId,
  });
  return (
    <Dialog
      open={open}
      maxWidth="md"
      fullScreen={isMobile}
      fullWidth
      onClose={onClose}
    >
      <DialogTitle>
        {vehicle?.year} {vehicle?.make} {vehicle?.model}
      </DialogTitle>

      <DialogContent>
        <Stack spacing={2}>
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Description
            </Typography>
            <Typography>{vehicle?.description}</Typography>
          </Box>

          <Divider />

          <Grid container spacing={2}>
            <Grid size={{ xs: 6 }}>
              <Typography variant="subtitle2">Price</Typography>
              <Typography>${vehicle?.price.toLocaleString()}</Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textDecoration: "line-through" }}
              >
                ${vehicle?.originalPrice.toLocaleString()}
              </Typography>
            </Grid>

            <Grid size={{ xs: 6 }}>
              <Typography variant="subtitle2">Mileage</Typography>
              <Typography>{vehicle?.mileage.toLocaleString()} km</Typography>
            </Grid>

            <Grid size={{ xs: 6 }}>
              <Typography variant="subtitle2">Condition</Typography>
              <Chip
                label={vehicle?.condition}
                color={vehicle?.condition === "New" ? "success" : "default"}
              />
            </Grid>

            <Grid size={{ xs: 6 }}>
              <Typography variant="subtitle2">Status</Typography>
              <Chip label={vehicle?.status} color="primary" />
            </Grid>

            <Grid size={{ xs: 6 }}>
              <Typography variant="subtitle2">Body Type</Typography>
              <Typography>{vehicle?.bodyType}</Typography>
            </Grid>

            <Grid size={{ xs: 6 }}>
              <Typography variant="subtitle2">Color</Typography>
              <Typography>{vehicle?.color}</Typography>
            </Grid>

            <Grid size={{ xs: 6 }}>
              <Typography variant="subtitle2">Transmission</Typography>
              <Typography>{vehicle?.transmission}</Typography>
            </Grid>

            <Grid size={{ xs: 6 }}>
              <Typography variant="subtitle2">Fuel Type</Typography>
              <Typography>{vehicle?.fuelType}</Typography>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Typography variant="subtitle2">VIN</Typography>
              <Typography>{vehicle?.VIN}</Typography>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Typography variant="subtitle2">Posted Date</Typography>
              <Typography>
                {new Date(vehicle?.postedDate ?? new Date()).toLocaleString()}
              </Typography>
            </Grid>
          </Grid>

          {(vehicle?.images?.length || 0) > 0 && (
            <>
              <Divider />
              <Box>
                <Typography variant="subtitle2">Images</Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ overflowX: "auto", mt: 1 }}
                >
                  {vehicle?.images.map((img, idx) => (
                    <Box
                      component="img"
                      key={idx}
                      src={img}
                      alt={`vehicle-img-${idx}`}
                      sx={{
                        width: 120,
                        height: 80,
                        objectFit: "cover",
                        borderRadius: 1,
                        border: "1px solid #ccc",
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            </>
          )}
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
