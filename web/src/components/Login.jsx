import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import background from "../assets/background.webp";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import "../App.css";
import { storeAuthToken } from "./utils/authToken";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState(true);

  const navigate = useNavigate();

  function LoginForm() {
    return (
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.8 }}
      >
        <Container
          className="rounded-md"
          style={{ backgroundColor: "#fff" }}
          component="main"
          maxWidth="xs"
        >
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingBottom: 3,
            }}
          >
            <Typography
              style={{ fontWeight: "bold", color: "#000", padding: 10 }}
              component="h1"
              variant="h5"
            >
              🔒 Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                color="secondary"
                required
                fullWidth
                id="email"
                label="Email Address"
                variant="filled"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                variant="filled"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
                name="remember"
                control={
                  <Checkbox name="remember" value="remember" color="primary" />
                }
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </motion.div>
    );
  }

  function Logo() {
    return (
      <div className="rounded-full m-5 w-32 h-32 bg-white flex justify-center items-center">
        <img className="w-20 h-20" src={logo} />
      </div>
    );
  }

  function Landing() {
    return (
      <>
        <div className="w-2/3">
          <h1
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
              fontWeight: "bolder",
            }}
            className="text-white font-extrabold text-6xl text-center shadow shadow-black"
          >
            Task Matrix: Streamline Your Schedule, Master Your Productivity
          </h1>
        </div>
        <button
          onClick={() => setLogin(!login)}
          className="border-4 text-xl bg-white border-white p-2 text-backfont font-bold text-center mt-8 rounded-full px-16 hover:bg-backfont hover:text-white hover:border-backfont hover:translate-x-3 relative"
        >
          Login{" "}
          <span
            style={{
              position: "absolute",
              height: 24,
              width: 24,
              marginleft: 20,
            }}
            className="point"
          >
            👉🏽
          </span>
        </button>
      </>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    axios
      .post("http://localhost:3001/users/authenticate", {
        username: data.get("email"),
        password: data.get("password"),
      })
      .then((res) => {
        const { first_name, last_name, ID, helpdesk_profile, system_role } =
          res.data.user;
        const { authToken } = res.data;

        console.log(res.data);

        storeAuthToken(
          JSON.stringify({
            first_name,
            last_name,
            ID,
            helpdesk_profile,
            authToken,
            system_role,
          })
        );
        navigate("/matrix");
      })
      .catch((err) => {
        console.log("Error");
        console.log(err);
        //alert(err.response.data);
      });
  }

  return (
    <div
      className="flex justify-center items-center flex-col"
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(63,94,251,0.95) 0%, rgba(252,70,107,0.8) 90%), url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        marginTop: -10,
      }}
    >
      <Logo />

      {login ? <Landing /> : <LoginForm />}
    </div>
  );
}
