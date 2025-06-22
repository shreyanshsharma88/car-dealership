import { Close } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FeaturedCarBodyTypes, makes, vehicleSchema } from "../../utils";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../http";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";


export const AddVehicleModal = ({
  open,
  onClose,
}: {
  onClose: () => void;
  open: boolean;
}) => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<VehicleInput>({
    resolver: yupResolver(vehicleSchema),
    defaultValues: {
      images: [{ url: "" }],
      status: "Available",
      isNew: false,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });

  const { mutate } = useMutation({
    mutationFn: (vehicle: VehicleInput) =>
      api.createVehicle({
        ...vehicle,
        images: vehicle.images.map((i) => i.url),
      }),
    onSuccess: () => {
      reset();
      onClose();
      toast.success("Vehicle added successfully!");
    },
  });

  const onSubmit = handleSubmit((data: VehicleInput) => {
    mutate(data);
  });

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{ sx: { p: 2 } }}
    >
      <Stack width="100%" gap={2}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h4">Let's sell your car</Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Stack>
        <DialogContent>
          <Grid container spacing={2}>
            {vehicleSelectFields.map(({ name, label, options }) => (
              <Grid size={{xs:12, sm: 6}} key={name}>
                <TextField
                  select
                  fullWidth
                  label={label}
                  error={!!errors[name as keyof VehicleInput]}
                  helperText={errors[name as keyof VehicleInput]?.message}
                  {...register(name as keyof VehicleInput)}
                >
                  {options.map((opt) => (
                    <MenuItem key={opt.value} value={opt.label}>
                      {opt.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            ))}

            {vehicleTextFields.map(({ name, label, type = "text" }) => (
              <Grid size={{xs:12, sm: 6}}  key={name}>
                <TextField
                  fullWidth
                  label={label}
                  type={type}
                  error={!!errors[name as keyof VehicleInput]}
                  helperText={errors[name as keyof VehicleInput]?.message}
                  {...register(name as keyof VehicleInput)}
                />
              </Grid>
            ))}

            <Grid size={{xs:12}}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Description"
                error={!!errors.description}
                helperText={errors.description?.message}
                {...register("description")}
              />
            </Grid>

            <Grid size={{xs:12}}>
              <Stack gap={2}>
                <Typography fontWeight={600}>Image URLs (Max 4)</Typography>
                {fields.map((field, index) => (
                  <Stack direction="row" gap={1} key={field.id}>
                    <Controller
                      name={`images.${index}.url`}
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label={`Image URL ${index + 1}`}
                          fullWidth
                          error={!!errors.images?.[index]?.url}
                          helperText={
                            errors.images?.[index]?.url?.message as string
                          }
                        />
                      )}
                    />
                    <IconButton
                      onClick={() => remove(index)}
                      disabled={fields.length <= 1}
                    >
                      <Close />
                    </IconButton>
                  </Stack>
                ))}
                {fields.length < 4 && (
                  <Button
                    variant="outlined"
                    onClick={() => append({ url: "" })}
                  >
                    Add Image URL
                  </Button>
                )}
              </Stack>
            </Grid>
          </Grid>
        </DialogContent>
        <Button
          sx={{ alignSelf: "flex-end", mr: 3 }}
          variant="contained"
          onClick={onSubmit}
        >
          Submit
        </Button>
      </Stack>
    </Dialog>
  );
};

const vehicleTextFields = [
  { name: "model", label: "Model" },
  { name: "year", label: "Year", type: "number" },
  { name: "price", label: "Price", type: "number" },
  { name: "originalPrice", label: "Original Price", type: "number" },
  { name: "mileage", label: "Mileage", type: "number" },
  { name: "color", label: "Color" },
  { name: "VIN", label: "VIN" },
];

const vehicleSelectFields = [
  {
    name: "make",
    label: "Make",
    options: makes.map((make) => ({
      label: make,
      value: make.toLowerCase(),
    })),
  },
  {
    name: "condition",
    label: "Condition",
    options: [
      { label: "New", value: "New" },
      { label: "Used", value: "Used" },
    ],
  },
  {
    name: "bodyType",
    label: "Body Type",
    options: FeaturedCarBodyTypes,
  },
  {
    name: "transmission",
    label: "Transmission",
    options: [
      { label: "Automatic", value: "Automatic" },
      { label: "Manual", value: "Manual" },
    ],
  },
  {
    name: "fuelType",
    label: "Fuel Type",
    options: [
      { label: "Petrol", value: "Petrol" },
      { label: "Diesel", value: "Diesel" },
      { label: "Electric", value: "Electric" },
      { label: "Hybrid", value: "Hybrid" },
    ],
  },
  {
    name: "status",
    label: "Status",
    options: [
      { label: "Available", value: "Available" },
      { label: "Sold", value: "Sold" },
      { label: "Pending", value: "Pending" },
    ],
  },
];

export interface VehicleInput {
  make: string;
  model: string;
  year: number;
  price: number;
  originalPrice: number;
  mileage: number;
  condition: "New" | "Used";
  bodyType: string;
  color: string;
  transmission: string;
  fuelType: string;
  description: string;
  VIN: string;
  status: string;
  isNew: boolean;
  images: { url: string }[];
}
