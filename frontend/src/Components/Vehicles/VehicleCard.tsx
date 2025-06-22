import {
  ArrowOutward,
  Bookmark,
  DirectionsCar,
  LocalGasStation,
  Settings,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import type { VehicleCardProps } from "../../utils";

import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

export const VehicleCard = (props: VehicleCardProps) => {
  const {
    make,
    model,
    year,
    mileage,
    fuelType,
    transmission,
    price,
    originalPrice,
    onViewDetails,
    images,
    id,
    mode = "light",
  } = props;
  if (mode === "dark") {
    return <DarkVehicleCard {...props} />;
  }
  const isGreatPrice = originalPrice && price < originalPrice;

  return (
    <motion.div
      variants={cardVariant}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.02 }}
    >
      <Card
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: 1,
          width: {
            xs: "calc(100% - 16px)",
            sm: 300,
            md: 320,
          },
          flexShrink: 0,
          m: 1,
        }}
      >
        <Box sx={{ position: "relative", height: 180, width: "100%" }}>
          <Box
            component="img"
            src={images?.[0] || "/placeholder-car.jpg"}
            alt={`${make} ${model}`}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          {isGreatPrice && (
            <Chip
              label="Great Price"
              size="small"
              color="success"
              sx={{
                position: "absolute",
                top: 12,
                left: 12,
                bgcolor: "success.main",
                color: "#fff",
                fontWeight: "bold",
              }}
            />
          )}
          <IconButton
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              bgcolor: "rgba(255,255,255,0.7)",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.9)",
              },
            }}
          >
            <Bookmark color="primary" />
          </IconButton>
        </Box>

        <CardContent sx={{ p: 2 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              maxWidth: "300px",
              mb: 0.5,
            }}
          >
            {make} {model} – {year}
          </Typography>

          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              borderTop: "1px solid #eee",
              borderBottom: "1px solid #eee",
              py: 1.5,
              mb: 2,
            }}
          >
            <Stack alignItems="center">
              <DirectionsCar sx={{ color: "text.secondary", fontSize: 20 }} />
              <Typography variant="caption" color="text.secondary">
                {mileage.toLocaleString()} Miles
              </Typography>
            </Stack>
            <Stack alignItems="center">
              <LocalGasStation sx={{ color: "text.secondary", fontSize: 20 }} />
              <Typography variant="caption" color="text.secondary">
                {fuelType}
              </Typography>
            </Stack>
            <Stack alignItems="center">
              <Settings sx={{ color: "text.secondary", fontSize: 20 }} />
              <Typography variant="caption" color="text.secondary">
                {transmission}
              </Typography>
            </Stack>
          </Stack>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" fontWeight="bold">
              ${price.toLocaleString()}
            </Typography>
            <Button
              variant="text"
              onClick={() => onViewDetails(id)}
              endIcon={<ArrowOutward />}
              sx={{
                textTransform: "none",
                color: "info.main",
                fontWeight: "bold",
              }}
            >
              View Details
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const DarkVehicleCard: React.FC<Omit<VehicleCardProps, "mode">> = ({
  make,
  model,
  year,
  description,
  mileage,
  fuelType,
  transmission,
  price,
  originalPrice,
  onViewDetails,
  images,
  id,
}) => {
  const isSale = originalPrice && price < originalPrice;

  return (
    <Card
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 3,
        width: {
          xs: "calc(100% - 16px)",
          sm: 450,
          md: 500,
        },
        flexShrink: 0,
        m: 1,
        bgcolor: "secondary.contrastText",
        color: "#fff",
        height: "300px",
      }}
    >
      <Stack direction="row" sx={{ height: { xs: 200, sm: "100%" } }}>
        {" "}
        <Box sx={{ flex: "1 1 40%", position: "relative" }}>
          <Box
            component="img"
            src={images?.[0]}
            alt={`${make} ${model}`}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          {isSale && (
            <Chip
              label="Sale"
              size="small"
              sx={{
                position: "absolute",
                top: 12,
                left: 12,
                bgcolor: "#8b00ff",
                color: "#fff",
                fontWeight: "bold",
              }}
            />
          )}
          <IconButton
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              bgcolor: "rgba(255,255,255,0.2)",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.4)",
              },
              color: "#fff",
            }}
          >
            <Bookmark sx={{ color: "#fff" }} />
          </IconButton>
        </Box>
        <CardContent
          sx={{
            flex: "1 1 50%",
            p: { xs: 2, sm: 3 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Stack gap={1}>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="#fff"
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                maxWidth: "200px",
              }}
            >
              {make} {model} – {year}
            </Typography>
            <Typography
              variant="body2"
              color="#ccc"
              sx={{
                minHeight: "36px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {description.split(" ").slice(0, 8).join(" ") +
                (description.split(" ").length > 8 ? "..." : "")}
            </Typography>

            <Stack gap={1}>
              <Stack direction="row" alignItems="center" gap={1}>
                <DirectionsCar sx={{ color: "#aaa", fontSize: 18 }} />
                <Typography variant="body2" color="#ccc">
                  {mileage.toLocaleString()} Miles
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" gap={1}>
                <LocalGasStation sx={{ color: "#aaa", fontSize: 18 }} />
                <Typography variant="body2" color="#ccc">
                  {fuelType}
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" gap={1}>
                <Settings sx={{ color: "#aaa", fontSize: 18 }} />
                <Typography variant="body2" color="#ccc">
                  {transmission}
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack sx={{ mt: 2 }}>
            {originalPrice && (
              <Typography
                variant="body2"
                color="#aaa"
                sx={{ textDecoration: "line-through" }}
              >
                ${originalPrice.toLocaleString()}
              </Typography>
            )}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h5" fontWeight="bold" color="#fff">
                ${price.toLocaleString()}
              </Typography>
              <Button
                variant="text"
                onClick={() => onViewDetails(id)}
                endIcon={<ArrowOutward />}
                sx={{
                  textTransform: "none",
                  color: "#8b00ff",
                  fontWeight: "bold",
                }}
              >
                Details
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  );
};
