import React from "react";
import { Typography, Box } from "@mui/material";

import SouthEastIcon from "@mui/icons-material/SouthEast";
import StarRateIcon from "@mui/icons-material/StarRate";
const Aboutus = () => {
  return (
    <div>
      <Box
        className="container"
        sx={{ margin: { md: "100px 50px", xs: "50px 25px" } }}
      >
        <Box className="container">
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "40px",
              lineHeight: "70px",
              color: "#1B1B1B",
            }}
          >
            About Us{" "}
            <SouthEastIcon
              sx={{
                backgroundColor: "#FFD223",
                color: "white",
                fontSize: "2rem",
                borderRadius: "10px",
              }}
            />
          </Typography>
          <Typography
            sx={{
              fontSize: { md: "20px", xs: "16px" },
              lineHeight: "28px",
              color: "#000",
            }}
          >
            We are a technology company on a mission to help get the best
            possible start to your careers. Imagine a world full of freedom and
            possibilities. A world where you can discover your passion and turn
            it into your career. A world where you confident, and prepared to
            stake a claim on your place in the world.
          </Typography>
        </Box>
      </Box>
      <Box
        className="container"
        sx={{
          margin: { md: "100px 0", xs: "50px 0" },
          backgroundColor: "#001531",
          width: "100%",
          display: "flex",
          py: "8rem",
          justifyContent: "space-around",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <div style={{ display: "flex" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "40px",
                lineHeight: "70px",
                color: "#1B1B1B",
              }}
            >
              <StarRateIcon
                sx={{
                  color: "#FFD223",
                  fontSize: "4rem",
                }}
              />
              <StarRateIcon
                sx={{
                  color: "#FFD223",
                  fontSize: "4rem",
                }}
              />
              <StarRateIcon
                sx={{
                  color: "#FFD223",
                  fontSize: "4rem",
                }}
              />
            </Typography>
          </div>
          <Typography
            sx={{ color: "#fff", fontSize: "30px", fontWeight: "500" }}
          >
            80% users like JobCrack
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <div style={{ display: "flex" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { md: "4rem", xs: "3rem" },
                lineHeight: "70px",
                color: "#FFD223",
                pb: "1rem",
              }}
            >
              500+
            </Typography>
          </div>
          <Typography
            sx={{ color: "#fff", fontSize: "30px", fontWeight: "500" }}
          >
            Platform Members
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <div style={{ display: "flex" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "4rem",
                lineHeight: "70px",
                color: "#FFD223",
                pb: "1rem",
              }}
            >
              1
            </Typography>
          </div>
          <Typography
            sx={{ color: "#fff", fontSize: "30px", fontWeight: "500" }}
          >
            Universities
          </Typography>
        </div>
      </Box>
    </div>
  );
};

export default Aboutus;
