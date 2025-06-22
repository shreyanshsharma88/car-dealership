import { Button, Stack, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../http";
import { isValidEmail } from "../../utils";

export const Login = ({ onSuccess }: { onSuccess: () => void }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const loginMutation = useMutation({
    mutationFn:  () => api.loginUser(formData),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      toast.success("Login successful!");
      onSuccess();
    },
  });

  const handleLogin = () => {
    if (!isValidEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    loginMutation.mutate();
  }

  return (
    <Stack spacing={2} width="100%">
      <TextField
        label="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        fullWidth
      />
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </Stack>
  );
};
