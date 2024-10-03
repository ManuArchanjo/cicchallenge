import React, { useState } from "react";
import { Box, TextField, Button, Typography, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid item xs={12} md={6} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5" sx={{ color: "#009688" }}>
            Sign In To Developer
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Button
              variant="outlined"
              sx={{ borderColor: "#ccc", color: "#ccc" }}
            >
              F
            </Button>
            <Button
              variant="outlined"
              sx={{ borderColor: "#ccc", color: "#ccc" }}
            >
              G
            </Button>
            <Button
              variant="outlined"
              sx={{ borderColor: "#ccc", color: "#ccc" }}
            >
              In
            </Button>
          </Box>

          <Typography component="p" variant="body2" sx={{ mt: 2 }}>
            or use your email account
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 1, width: "100%" }}
          >
            <TextField
              margin="normal"
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Typography variant="body2" sx={{ mt: 1, color: "#009688" }}>
              Forgot your password?
            </Typography>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#009688",
                color: "#fff",
              }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        md={6}
        sx={{
          backgroundColor: "#009688",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ color: "#fff", textAlign: "center" }}>
          <Typography component="h1" variant="h4">
            Hello, Friend!
          </Typography>
          <Typography component="p" variant="body2" sx={{ mt: 2 }}>
            Enter your personal details and start your journey with us
          </Typography>
          <Button
            variant="outlined"
            sx={{
              mt: 4,
              borderColor: "#fff",
              color: "#fff",
              borderRadius: "20px",
              padding: "10px 30px",
            }}
          >
            SIGN UP
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
