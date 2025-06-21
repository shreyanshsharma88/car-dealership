import { Stack } from "@mui/material";
import { useViewPort } from "../../Hooks";
import { footerBoxes, testimonialData } from "../../utils";
import { GutteredContainer } from "../GutteredContainer";
import { BlogPosts } from "./BlogPosts";
import { FooterBoxCard } from "./FooterBox";
import { ShopYourWay } from "./ShopYourWay";
import { TestimonialCarousel } from "./Testimonials";

export const BlogContainer = () => {
  const { isMobile } = useViewPort();
  return (
    <Stack gap={isMobile ? 2 : 10}>
      <GutteredContainer>
        <ShopYourWay />
      </GutteredContainer>
      <Stack width="100%"  >
        <GutteredContainer>
          <TestimonialCarousel testimonials={testimonialData} />
        </GutteredContainer>
      </Stack>
      <GutteredContainer gap={isMobile ? 2 : 10}>
        <BlogPosts />
        <Stack
          direction={isMobile ? "column" : "row"}
          gap={2}
          justifyContent="space-between"
        >
          {footerBoxes.map((item) => (
            <FooterBoxCard key={item.label} {...item} />
          ))}
        </Stack>
      </GutteredContainer>
    </Stack>
  );
};
