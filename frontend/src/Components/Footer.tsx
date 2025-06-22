import {
  Apple,
  Facebook,
  Google,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useViewPort } from "../Hooks";
import { useGlobalProvider } from "../Providers/GlobalProvider";

const footerData = [
  {
    title: "Company",
    links: ["About Us", "Blog", "Services", "FAQs", "Terms", "Contact Us"],
  },
  {
    title: "Quick Links",
    links: ["Get in Touch", "Help center", "Live chat", "How it works"],
  },
  {
    title: "Our Brands",
    links: [
      "Toyota",
      "Porsche",
      "Audi",
      "BMW",
      "Ford",
      "Nissan",
      "Peugeot",
      "Volkswagen",
    ],
  },
  {
    title: "Vehicles Type",
    links: [
      "Sedan",
      "Hatchback",
      "SUV",
      "Hybrid",
      "Electric",
      "Coupe",
      "Truck",
      "Convertible",
    ],
  },
];

const appButtons = [
  { line1: "Download on the", line2: "Apple Store", icon: <Apple /> },
  { line1: "Get it on", line2: "Google Play", icon: <Google /> },
];

const socialIcons = [Facebook, Twitter, Instagram, LinkedIn];

export default function Footer() {
  const { isDesktop } = useViewPort();
  const { userDetails } = useGlobalProvider();
  return (
    <Stack
      p={2}
      alignItems="center"
      zIndex={100}
      sx={{ color: "white", py: isDesktop ? 15 : 4 }}
    >
      <Stack width={isDesktop ? "70%" : "100%"} alignSelf="center" gap={4}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
          mb={6}
        >
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Typography color="#fff" variant="h3" fontWeight="bold" mb={1}>
              Join BoxCar
            </Typography>
            <Typography color="#fff" variant="body2">
              Receive pricing updates, shopping tips & more!
            </Typography>
          </Grid>
          {!userDetails && (
            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                justifyContent={{ xs: "flex-start", md: "flex-end" }}
              >
                <TextField
                  placeholder="Your email address"
                  variant="outlined"
                  sx={{
                    bgcolor: "#1A1A3D",
                    input: { color: "white" },
                    borderRadius: 8,
                    width: 300,
                    "& fieldset": { border: "none" },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#6C4EF2",
                    borderRadius: 8,
                    textTransform: "none",
                    px: 3,
                    "&:hover": { bgcolor: "#5b3de2" },
                  }}
                >
                  Sign Up
                </Button>
              </Stack>
            </Grid>
          )}
        </Grid>
        <Divider sx={{ borderColor: "#808080", border: "0.5px solid" }} />

        <Grid container spacing={4} justifyContent="space-between">
          {footerData.map((section) => (
            <Grid
              size={{
                xs: 6,
                md: 2,
              }}
              key={section.title}
            >
              <Typography color="#fff" fontWeight="bold" gutterBottom>
                {section.title}
              </Typography>
              <Stack spacing={1}>
                {section.links.map((link) => (
                  <Typography color="#fff" variant="body2" key={link}>
                    {link}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          ))}
          <Grid
            size={{
              xs: 12,
              md: 3,
            }}
          >
            <Typography color="#fff" fontWeight="bold" gutterBottom mb={2}>
              Our Mobile App
            </Typography>
            <Stack spacing={2} mb={2}>
              {appButtons.map(({ line1, line2, icon }, index) => (
                <Stack
                  sx={{
                    bgcolor: "#161c30",
                    borderRadius: 4,
                    px: 2,
                    py: 1.2,
                    cursor: "pointer",
                  }}
                  key={index}
                  alignItems="center"
                  direction="row"
                  gap={2}
                >
                  {icon}
                  <Box display="flex" flexDirection="column">
                    <Typography color="#fff" variant="body2">
                      {line1}
                    </Typography>
                    <Typography color="#fff" fontWeight="bold">
                      {line2}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>

            <Typography color="#fff" fontWeight="bold" gutterBottom>
              Connect With Us
            </Typography>
            <Stack direction="row" spacing={1}>
              {socialIcons.map((Icon, i) => (
                <IconButton key={i} sx={{ color: "white" }}>
                  <Icon />
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Box
          mt={6}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          gap={2}
        >
          <Typography variant="body2" color="gray">
            © 2024 example.com. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            {["Terms & Conditions", "Privacy Notice"].map((text) => (
              <Typography
                key={text}
                variant="body2"
                color="gray"
                sx={{ cursor: "pointer" }}
              >
                {text}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
