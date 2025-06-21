import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
  Chip,
  IconButton,
} from "@mui/material";
import {
  DirectionsCar,
  LocalGasStation,
  Settings,
  BookmarkBorder,
  Bookmark,
  ArrowOutward,
} from "@mui/icons-material";
import React from "react";
import type { VehicleCardProps } from "../../utils";

export const VehicleCard: React.FC<VehicleCardProps> = ({
  _id,
  imageUrl,
  make,
  model,
  year,
  //   description,
  mileage,
  fuelType,
  transmission,
  price,
  originalPrice,
  onViewDetails,
  onBookmarkToggle,
  isBookmarked = false,
}) => {
  const isGreatPrice = originalPrice && price < originalPrice;

  return (
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
          src={imageUrl}
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
        {onBookmarkToggle && (
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
            onClick={() => onBookmarkToggle(_id, !isBookmarked)}
          >
            {isBookmarked ? (
              <Bookmark color="primary" />
            ) : (
              <BookmarkBorder color="action" />
            )}
          </IconButton>
        )}
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
            onClick={() => onViewDetails(_id)}
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
  );
};
