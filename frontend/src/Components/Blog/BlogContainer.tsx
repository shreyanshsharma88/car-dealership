import { Stack } from "@mui/material";
import { useViewPort } from "../../Hooks";
import { testimonialData } from "../../utils";
import { GutteredContainer } from "../GutteredContainer";
import { BlogPosts } from "./BlogPosts";
import { FooterBoxCard } from "./FooterBox";
import { ShopYourWay } from "./ShopYourWay";
import { TestimonialCarousel } from "./Testimonials";
import { useGlobalProvider } from "../../Providers/GlobalProvider";

export const BlogContainer = () => {
  const { handleSubmitListing } = useGlobalProvider();
  const footerBoxes = [
    {
      label: "Are you Looking for a car?",
      description:
        "We are committed to providing our customers with exceptional service.",
      img: "/public/assets/images/electric-car.svg.svg",
      bgColor: "#e9f2fe",
      buttonColor: "info.main",
      onButtonClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    {
      label: "Do you want to sell a Car?",
      description:
        "We are committed to providing our customers with exceptional service.",
      img: "/public/assets/images/electric-car2.svg fill.svg",
      bgColor: "#fae8f3",
      buttonColor: "#000",
      onButtonClick: () => handleSubmitListing(),
    },
  ];
  const { isMobile } = useViewPort();
  return (
    <Stack gap={isMobile ? 2 : 10}>
      <GutteredContainer>
        <ShopYourWay />
      </GutteredContainer>
      <Stack width="100%">
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
