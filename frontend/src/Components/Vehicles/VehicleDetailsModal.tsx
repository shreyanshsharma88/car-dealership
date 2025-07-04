import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { useViewPort } from "../../Hooks";
import { api } from "../../http";
import type { Vehicle } from "../../utils";
import { Close } from "@mui/icons-material";
import { useState } from "react";
import { toast } from "react-toastify";
import { useGlobalProvider } from "../../Providers/GlobalProvider";
import { motion, easeInOut } from "framer-motion";

export const VehicleDetailsModel = ({
  onClose,
  open,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [inquiry, setInquiry] = useState("");
  const { isMobile } = useViewPort();
  const [sp] = useSearchParams();
  const vehicleId = sp.get("vehicleId");
  const { data, isFetching } = useQuery({
    queryKey: ["vehicleDetails", vehicleId],
    queryFn: () => api.getVehicleDetails(vehicleId!),
    enabled: !!vehicleId,
  });
  const vehicle: Vehicle = data;
  const { isLoggedIn } = useGlobalProvider();

  const inquiryMutation = useMutation({
    mutationFn: () =>
      api.createInquiry({
        message: inquiry,
        vehicleId: vehicle?.id,
        subject: `Inquiry about ${vehicle?.year} ${vehicle?.make} ${vehicle?.model}`,
      }),
    onSuccess: () => {
      setInquiry("");
      toast.success("Inquiry sent successfully!");
    },
  });

  return (
    <Dialog
      open={open}
      maxWidth="lg"
      fullScreen={isMobile}
      fullWidth
      onClose={onClose}
      PaperProps={{
        sx: {
          p: 2,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Stack direction="row" justifyContent="space-between" width="100%" mb={2}>
        <Typography variant="h3">
          {vehicle?.year} {vehicle?.make} {vehicle?.model}
        </Typography>
        <IconButton onClick={onClose} sx={{ alignSelf: "center" }}>
          <Close />
        </IconButton>
      </Stack>

      {isFetching ? (
        <CircularProgress sx={{ alignSelf: "center" }} />
      ) : (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          transition={modalAnimation.transition}
          variants={modalAnimation}
        >
          <Stack direction="row">
            <Box
              component="img"
              src={vehicle?.images?.[0]}
              width="60%"
              maxHeight={600}
              maxWidth={350}
              sx={{ objectFit: "cover" }}
            />
            <DialogContent>
              <Stack spacing={2}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  flexWrap="wrap"
                >
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Description
                    </Typography>
                    <Typography>{vehicle?.description}</Typography>
                  </Box>
                  <Button
                    onClick={() => {
                      if (!isLoggedIn) {
                        toast.info("Sign in and then raise a query");
                        return;
                      }
                      inquiryMutation.mutate();
                    }}
                    startIcon={
                      <TextField
                        value={inquiry}
                        onChange={(e) => setInquiry(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    }
                  >
                    Ask Inquiry
                  </Button>
                </Stack>

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
                    <Typography>
                      {vehicle?.mileage.toLocaleString()} km
                    </Typography>
                  </Grid>

                  <Grid size={{ xs: 6 }}>
                    <Typography variant="subtitle2">Condition</Typography>
                    <Chip
                      label={vehicle?.condition}
                      color={
                        vehicle?.condition === "New" ? "success" : "default"
                      }
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
                      {new Date(
                        vehicle?.postedDate ?? new Date()
                      ).toLocaleString()}
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
                        {vehicle?.images
                          .filter((item) => item?.length > 0)
                          .map((img, idx) => (
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
          </Stack>
        </motion.div>
      )}
    </Dialog>
  );
};
const modalAnimation = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
  transition: { duration: 0.3, ease: easeInOut }, 
};

