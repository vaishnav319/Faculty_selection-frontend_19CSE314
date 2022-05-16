import React from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { Grid, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  Footer: {
    background: "#001531",
    width: "100%",
    height: "auto",
    padding: "30px  0",
    // "&:hover": {
    // },
    [theme.breakpoints.down(500)]: {},
  },
}));

const LinkTwo = [
  // {
  //     link: "/",
  //     title: "Community & Clubs"
  // },
  // {
  //     link: "/",
  //     title: "Refer and Earn"
  // },
  {
    link: "/privacy-policy",
    title: "Privacy Policy",
  },
  {
    link: "/careers",
    title: "Hiring",
  },
  {
    link: "/terms-conditions",
    title: "Payments and Refunds",
  },
  {
    link: "/terms-conditions",
    title: "T&C",
  },
  {
    link: "/about-us",
    title: "Team",
  },
];

const LinkOne = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/about-us",
    title: "About Us",
  },
  {
    link: "/curriculum",
    title: "Curriculum & Pricing",
  },
  {
    link: "/book-a-demo",
    title: "Book a Demo",
  },
  {
    link: "/careers",
    title: "Become a Trainer",
  },
];
const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <section id="Footer" className={classes.Footer}>
        <Box sx={{ width: "100%" }}>
          <Box
            maxWidth="lg"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#FFFFFF",
                fontSize: { md: "30px", xs: "20px" },
                fontWeight: "700",
                lineHeight: "73px",
                px: "1rem",
              }}
            >
              Find your fit. Make your mark!
            </Typography>
            <NavLink to="/book-a-demo" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  background: "#FFD223",
                  color: "#001531",
                  borderRadius: "26px",
                  "&:hover": { background: "#fff", color: "#227AEB" },
                }}
              >
                Join Now
              </Button>
            </NavLink>
          </Box>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box
            maxWidth="lg"
            sx={{ background: "#fff", width: "75%", mx: "auto", my: "1rem" }}
            style={{ alignItems: "center" }}
          >
            <hr />
          </Box>
        </Box>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "space-around",
            padding: "20px ",
            alignItems: "flex-end",
          }}
        >
          <Grid item lg={3} md={6} xs={12}>
            <img
              style={{ width: "70%" }}
              src={require("../Assets/home/bluelogo.png")}
              alt=""
            />
            <br />
            <br />
          </Grid>
          <Grid item lg={2} md={6} xs={12}>
            {LinkOne.map((item, i) => (
              <NavLink to={item.link} style={{ textDecoration: "none" }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "16px",
                    color: "#fff",
                    paddingTop: "10px",
                    lineHeight: "23px",
                    fontWeight: "normal",
                  }}
                >
                  {item.title}
                </Typography>
              </NavLink>
            ))}
          </Grid>
          <Grid item lg={2} md={6} xs={12}>
            {LinkTwo.map((item, i) => (
              <NavLink to={item.link} style={{ textDecoration: "none" }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "16px",
                    color: "#fff",
                    paddingTop: "10px",
                    lineHeight: "23px",
                    fontWeight: "normal",
                  }}
                >
                  {item.title}
                </Typography>
              </NavLink>
            ))}
          </Grid>
          <Grid item lg={2} md={6} xs={12}>
            <Typography
              variant="h3"
              sx={{ fontSize: "20px", color: "#fff", fontWeight: "500" }}
            >
              You can reach us in
            </Typography>
            <Box display="flex" margin="15px 0">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/kapable.club"
              >
                <img
                  src={require("../Assets/home/contact1.png")}
                  alt="icon"
                  style={{ marginLeft: "-15px", width: "100%" }}
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/kapable.club/"
              >
                <img
                  src={require("../Assets/home/contact2.png")}
                  alt="icon"
                  style={{ marginLeft: "-15px", width: "100%" }}
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/26574261/admin/"
              >
                <img
                  src={require("../Assets/home/contact3.png")}
                  alt="icon"
                  style={{ marginLeft: "-15px", width: "100%" }}
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/c/kapableclub:"
              >
                <img
                  src={require("../Assets/home/contact4.png")}
                  alt="icon"
                  style={{ marginLeft: "-15px", width: "100%" }}
                />
              </a>
            </Box>
            <NavLink to="/book-a-demo" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  color: "#001531",
                  borderRadius: "26px",
                }}
                style={{ backgroundColor: "#FFD223" }}
              >
                Let's Connect
              </Button>
            </NavLink>
            <Box sx={{ marginTop: { md: "20px", xs: "0" } }} />
          </Grid>
        </Grid>
      </section>
      <Box sx={{ width: "100%", background: "#001531", padding: "30px 0px" }}>
        <Box className="container">
          <Typography variant="h6" sx={{ color: "#FFFFFF", fontSize: "13px" }}>
            Copyright ® 2022 Job Crack Private Limited . All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
