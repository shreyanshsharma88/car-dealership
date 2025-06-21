import { createTheme } from "@mui/material";

export const customTheme = () => {
  return createTheme({
    typography: {
      fontFamily: "DM Sans",
      allVariants: {
        color: "#050B20",
      },
    },
    palette: {
      background: {
        default: "#fff",
        paper: "#F9FBFC",
      },
      success: {
        main: "#3D923A",
      },
      info: {
        main: "#405FF2",
        dark: "#FFE9F3",
        contrastText: "#FF5CF4",
      },
      primary: {
        main: "#fff",
        dark: "#0F172A",
      },
      secondary:{
        main:'#EEF1FB'
      }
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: "contained" },
            style: {
              borderRadius: "8px",
              textTransform: "capitalize",
              fontWeight: 500,
              padding: "8px 16px",
              backgroundColor: "#405FF2",
              color: "#F9FBFC",
            },
          },
          {
            props: { variant: "outlined" },
            style: {
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: 500,
              padding: "8px 16px",
              backgroundColor: "#fff",
              color: "#050B20",
            },
          },
          {
            props : {variant: "text"},
            style: {
              textTransform: "none",
              fontWeight: 500,
              padding: "8px 16px",
              color: "#050B20",
            },
          }
        ],
      },
      MuiTypography: {
        styleOverrides: TypographyOverrides(),
      },
    },
  });
};
const TypographyOverrides = () => ({
  h1: {
    fontSize: "4rem",
    fontWeight: 800,
    "@media (max-width: 1100px)": {
      fontSize: "3rem",
    },
    "@media (max-width: 600px)": {
      fontSize: "2.25rem",
    },
  },
  h2: {
    fontSize: "3rem",
    fontWeight: 700,
    "@media (max-width: 1100px)": {
      fontSize: "2.25rem",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.75rem",
    },
  },
  h3: {
    fontSize: "2.25rem",
    fontWeight: 700,
    "@media (max-width: 1100px)": {
      fontSize: "1.75rem",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.5rem",
    },
  },
  h4: {
    fontSize: "1.75rem",
    fontWeight: 600,
    "@media (max-width: 1100px)": {
      fontSize: "1.5rem",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.25rem",
    },
  },
  h5: {
    fontSize: "1.5rem",
    fontWeight: 600,
    "@media (max-width: 1100px)": {
      fontSize: "1.25rem",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.125rem",
    },
  },
  h6: {
    fontSize: "1.25rem",
    fontWeight: 500,
    "@media (max-width: 1100px)": {
      fontSize: "1.125rem",
    },
    "@media (max-width: 600px)": {
      fontSize: "1rem",
    },
  },
  body1: {
    fontSize: "1.125rem",
    fontWeight: 400,
    "@media (max-width: 1100px)": {
      fontSize: "1rem",
    },
    "@media (max-width: 600px)": {
      fontSize: "0.95rem",
    },
  },
});
