import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Rating,
  Stack,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Testimonial } from "../../utils";
import { useViewPort } from "../../Hooks";

interface CarouselProps {
  testimonials: Testimonial[];
}

export const TestimonialCarousel = ({ testimonials }: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); 
  const {isMobile} = useViewPort()
  const total = testimonials.length;

  const handleChange = (newIndex: number) => {
    setDirection(newIndex > current ? 1 : -1);
    setCurrent((newIndex + total) % total);
  };

  const { name, title, rating, message, image } = testimonials[current];

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      
      gap={4}
    >
      <IconButton sx={{maxHeight: 50, alignSelf:'center'}} onClick={() => handleChange(current - 1)}>
        <ArrowBackIos />
      </IconButton>

      <Box width={'100%'} overflow="hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.4 }}
          >
            <Stack direction={isMobile ? 'column':"row"} spacing={4} alignItems="center">
              <Avatar
                src={image}
                alt={name}
                sx={{ width: 450, height: 470, borderRadius: 2 }}
              />
              <Box>
                <Rating value={rating} readOnly />
                <Typography fontWeight="bold" mt={1}>
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  {title}
                </Typography>
                <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                  {message}
                </Typography>
              </Box>
            </Stack>
          </motion.div>
        </AnimatePresence>
      </Box>

      <IconButton sx={{maxHeight: 50, alignSelf:'center'}} onClick={() => handleChange(current + 1)}>
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};
