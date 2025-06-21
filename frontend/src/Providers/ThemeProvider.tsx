import { CssBaseline, ThemeProvider } from "@mui/material";
import { customTheme } from "../theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AppThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const theme = customTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {children}
        </>
      </CssBaseline>
    </ThemeProvider>
  );
};
