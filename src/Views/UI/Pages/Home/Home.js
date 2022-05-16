import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { useStyles } from "./Style";
import { GreyDotsRight, GreyDotsLeft } from "../../Commons/GreyDots";
import DemoForm from "./Contact";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import TextTicker from "./TextTicker";
import OurTeam from "./OurTeam";
import HeroSection from "./HeroSection";
import Aboutus from "./Aboutus";
const Home = () => {
  const classes = useStyles();
  return (
    <>
      <HeroSection />

      {/* second section */}
      <Box
        className="container"
        sx={{ margin: { md: "50px auto", xs: "50px auto" } }}
      >
        <GreyDotsRight />

        <Slide bottom>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <Typography
              textAlign="center"
              sx={{
                fontWeight: "bold",
                fontSize: { md: "48px", xs: "31px" },
                lineHeight: { md: "70px", xs: "48px" },
                color: "#1B1B1B",
              }}
            >
              Jobs in JobCrack is
            </Typography>
            <Box sx={{ width: "300px" }}>
              {" "}
              <TextTicker />
            </Box>
          </Box>
        </Slide>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          alignContent="center"
          flexWrap="wrap-reverse"
          py="50px"
        >
          <Grid item xl="5" md="7" xs="12">
            <Slide bottom>
              <br />
              <Grid
                item
                md="12"
                zIndex="5"
                style={{
                  backgroundColor: "#fbb034",
                  backgroundImage:
                    "linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)",
                  borderRadius: "142px",
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{
                    p: 7,
                    flexDirection: { md: "row", sm: "column", xs: "column" },
                  }}
                >
                  <div>
                    <Slide top>
                      <img
                        src={require("../../../Assets/home/account.png")}
                        alt="image_"
                        style={{}}
                      />
                    </Slide>
                    <Slide bottom>
                      <img
                        src={require("../../../Assets/home/profile.png")}
                        alt="image_"
                        style={{}}
                      />
                    </Slide>
                  </div>
                  <div>
                    <Slide top>
                      <img
                        src={require("../../../Assets/home/apply.png")}
                        alt="image_"
                        style={{}}
                      />
                    </Slide>
                    <Slide right>
                      <img
                        src={require("../../../Assets/home/interview.png")}
                        alt="image_"
                        style={{}}
                      />
                    </Slide>
                  </div>
                </Box>
              </Grid>
            </Slide>
          </Grid>
          <Grid item xl="6" md="4" xs="12">
            <Slide right>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { md: "48px", xs: "31px" },
                  lineHeight: { md: "70px", xs: "48px" },
                  color: "#001530",
                }}
              >
                Start Applying to jobs in few steps
              </Typography>
            </Slide>
          </Grid>
        </Grid>
      </Box>

      {/*  */}
      <Box
        className="container"
        sx={{
          margin: { md: "100px auto", xs: "50px auto" },
          display: { md: "none", xs: "block" },
        }}
      >
        <Typography
          textAlign="center"
          sx={{
            fontWeight: "bold",
            fontSize: "40px",
            lineHeight: "70px",
            color: "#1B1B1B",
          }}
        >
          The{" "}
          <span
            style={{
              color: "#f9ff00",
              textShadow: "2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c",
            }}
          >
            Crackable
          </span>{" "}
          Way
        </Typography>
        <img
          src={require("../../../Assets/home/crackableeway.png")}
          alt="rocektsbg"
          style={{ width: "100%" }}
        />
      </Box>
      <div style={{ position: "relative" }}>
        <Box
          className="container"
          maxWidth="lg"
          sx={{
            margin: { md: "100px auto", xs: "50px auto" },
            display: { md: "block", xs: "none" },
          }}
        >
          <GreyDotsLeft />
          <Typography
            textAlign="center"
            sx={{
              fontWeight: "bold",
              fontSize: { md: "48px", xs: "31px" },
              lineHeight: "70px",
              color: "#1B1B1B",
            }}
          >
            The{" "}
            <span
              style={{
                color: "#f9ff00",
                textShadow: "2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c",
              }}
            >
              Crackable
            </span>{" "}
            Way
          </Typography>
          <Grid
            container
            spacing={0}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            alignContent="center"
            wrap="wrap"
          >
            <Grid item xl="3" md="3" xs="12" zIndex="5">
              <Box sx={{ marginLeft: "-100px" }}>
                <Fade>
                  <img
                    src={require("../../../Assets/home/secn3.png")}
                    alt="Boy"
                    className="banner_image"
                  />
                </Fade>
              </Box>
            </Grid>
            <Grid item xl="9" md="9" xs="12" zIndex="5">
              <Box display="flex" alignItems="center">
                <div>
                  <Slide left>
                    <img
                      src={require("../../../Assets/home/Group 23.png")}
                      alt="image_"
                      style={{ margin: "-20px" }}
                    />
                  </Slide>
                </div>
                <div>
                  <Slide top>
                    <img
                      src={require("../../../Assets/home/Group 24.png")}
                      alt="image_"
                      style={{ margin: "-20px" }}
                    />
                  </Slide>
                  <Slide bottom>
                    <img
                      src={require("../../../Assets/home/Group 25.png")}
                      alt="image_"
                      style={{ margin: "-20px" }}
                    />
                  </Slide>
                </div>
                <div>
                  <Slide top>
                    <img
                      src={require("../../../Assets/home/Group 28.png")}
                      alt="image_"
                      style={{ margin: "-20px" }}
                    />
                  </Slide>
                  <Slide right>
                    <img
                      src={require("../../../Assets/home/Group 26.png")}
                      alt="image_"
                      style={{ margin: "-20px" }}
                    />
                  </Slide>
                  <Slide bottom>
                    <img
                      src={require("../../../Assets/home/Group 27.png")}
                      alt="image_"
                      style={{ margin: "-20px" }}
                    />
                  </Slide>
                </div>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{ position: "absolute", right: "0", top: "200px", zIndex: "1" }}
          >
            <img
              src={require("../../../Assets/home/Rectangle 301.png")}
              width="100%"
              alt="image_"
            />
          </Box>
        </Box>
      </div>
      <Aboutus />

      <OurTeam />

      <DemoForm />
    </>
  );
};

export default Home;
