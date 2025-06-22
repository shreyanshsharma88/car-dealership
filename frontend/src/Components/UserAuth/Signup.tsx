import { Button, Stack, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../http";
export const Signup = ({ onSuccess }: { onSuccess: () => void }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const signupMutation = useMutation({
    mutationFn: () => api.signupUser(formData),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      toast.success("Signup successful!");
      onSuccess();
    },
  });

  return (
    <Stack spacing={2} width="100%">
      <TextField
        label="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        fullWidth
      />
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
      <Button variant="contained" onClick={() => signupMutation.mutate()}>
        Create Account
      </Button>
    </Stack>
  );
};
