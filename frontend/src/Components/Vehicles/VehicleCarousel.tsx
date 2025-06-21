import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";
import React, { useRef } from "react";
import { useViewPort } from "../../Hooks";

interface GenericCarouselProps<T> {
  items: T[];
  RenderComponent: React.ComponentType<T>;
}

export function GenericCarousel<T extends object>({
  items,
  RenderComponent,
}: GenericCarouselProps<T>) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useViewPort();

  const itemWidth = 320;
  const itemMargin = 16;
  const scrollAmount = itemWidth + itemMargin;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{ position: "relative", width: "100%", overflow: "hidden", py: 2 }}
    >
      <Stack
        direction="row"
        ref={scrollRef}
        sx={{
          overflowX: "scroll",
          scrollSnapType: "x mandatory",
          "&::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          pb: 2,
          px: isMobile ? 2 : 0,
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              flexShrink: 0,
              scrollSnapAlign: "start",
              mr: { xs: 1.5, sm: 2 },
            }}
          >
            <RenderComponent {...(item as T)} />
          </Box>
        ))}
      </Stack>
      <Stack direction="row" spacing={1}>
        <IconButton onClick={scrollLeft} size="large">
          <KeyboardArrowLeft fontSize="inherit" />
        </IconButton>
        <IconButton onClick={scrollRight} size="large">
          <KeyboardArrowRight fontSize="inherit" />
        </IconButton>
      </Stack>
    </Box>
  );
}
