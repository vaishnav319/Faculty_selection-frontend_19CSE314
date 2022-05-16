import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { useStyles } from "./Style";
import { GreyDotsRight, GreyDotsLeft } from "../../Commons/GreyDots";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
const HeroSection = () => {
  const classes = useStyles();
  return (
    <div>
      <Box
        className="container"
        sx={{ margin: { md: "100px auto", xs: "50px auto" } }}
      >
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          alignContent="flex-start"
          wrap="wrap"
        >
          <Grid
            item
            xl="5"
            md="5"
            xs="12"
            sx={{ mt: "45px", py: "50px", mr: "5px" }}
            position="relative"
            style={{
              backgroundColor: "#001531",
              borderRadius: "0 142px 0 142px",
            }}
          >
            
              <Box sx={{ marginTop: { md: "80px", xs: "50px" } }} />
              <Fade top>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { md: "48px", xs: "31px" },
                  lineHeight: { md: "70px", xs: "48px" },
                  color: "#fff",
                  ml: "30px",
                }}
              >
                Wel<span style={{ color: "#f9ff00" }}>come A</span>board
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { md: "48px", xs: "31px" },
                  textShadow: "2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c",
                  lineHeight: { md: "70px", xs: "48px" },
                  color: "#F9ff00",
                  ml: "30px",
                }}
              >
                Job Crack
              </Typography>
              </Fade>
              <br />
              <Fade left>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: { md: "20px", xs: "16px" },
                  lineHeight: "28px",
                  color: "#fff",
                  p: { md: "24px", xs: "10px" },
                }}
              >
                Finding the right fit for the right people makes JobCrack
                stronger and helps us work better together.Finding the right fit
                for the right people makes JobCrack stronger and helps us work
                better together.
              </Typography>
              <br /> <br />
              <Link to="/book-a-demo" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    ml: 5,
                    borderRadius: "26px",
                    background: "#f9ff00",
                    color: "#001531",
                    "&:hover": { background: "#e0e600", color: "" },
                    opacity: 75,
                  }}
                >
                  Click here and Join Now!
                </Button>
              </Link>
            </Fade>
          </Grid>
          
          <Box className={classes.home_img}>
            <Fade right>
              <Box sx={{ display: { md: "block", xs: "none" } }}>
                <img
                  src={require("../../../Assets/home/img11.png")}
                  alt="image_"
                  className="banner_image"
                />
              </Box>
              {/* hiding the asset in mbl view */}
              <Box sx={{ display: { md: "none", xs: "block" } }}>
                <br />
                <br />
                <img
                  src={require("../../../Assets/home/img11.png")}
                  alt="image_"
                  className="banner_image"
                />
              </Box>
            </Fade>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default HeroSection;
