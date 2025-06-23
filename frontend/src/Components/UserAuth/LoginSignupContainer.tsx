import {
  Button,
  Dialog,
  DialogContent,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Login } from "./Login";
import { Signup } from "./Signup";

export const LoginSignupContainer = ({
  open,
  onClose,
  mode,
}: {
  open: boolean;
  onClose: () => void;
  mode: "login" | "signup";
}) => {
  const [isLogin, setIsLogin] = useState(mode === "login");
  useEffect(() => {
    setIsLogin(mode === "login");
  }, [mode]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      PaperProps={{
        sx: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          pb: 4,
        },
      }}
    >
      <DialogContent>
        <Stack spacing={3} alignItems="center">
          <Typography variant="h3">
            {isLogin ? "Welcome Back 👋" : "Join Us 🚀"}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {isLogin
              ? "Login to access your dashboard."
              : "Sign up to explore amazing cars."}
          </Typography>
          {isLogin ? (
            <Login onSuccess={onClose} />
          ) : (
            <Signup onSuccess={onClose} />
          )}
          <Button variant="text" onClick={() => setIsLogin(!isLogin)}>
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Login"}
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
