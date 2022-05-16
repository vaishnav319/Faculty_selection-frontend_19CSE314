import React from "react";
import { Grid, Box } from "@mui/material";
import LoginForm from "./LoginForm";
import Description from "./Description";
const Login = () => {
  return (
    <div>
      <Grid container style={{ height: "100vh" }} spacing={1}>
        <Grid
          item
          lg="4"
          md="5"
          xs="12"
          sm="12"
          style={{ backgroundColor: "#001531" }}
        >
          <LoginForm />
        </Grid>
        <Grid item lg="5" md="6">
          <Grid item sx={{ display: { md: "block", xs: "none" } }}>
            <Description />
          </Grid>
        </Grid>
        <Grid item lg="3" sx={{ display: { lg: "block", xs: "none" } }}>
          <Box>
            <img
              src={require("../../../Assets/home/background.png")}
              alt="image_"
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "25%",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
