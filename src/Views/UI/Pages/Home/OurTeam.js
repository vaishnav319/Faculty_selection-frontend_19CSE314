import React from "react";
import { Typography, Box } from "@mui/material";
import { GreyDotsLeft } from "../../Commons/GreyDots";
import Slide from "react-reveal/Slide";

const OurTeam = () => {
  return (
    <>
      <Box
        className="container"
        sx={{ margin: { md: "100px auto", xs: "50px auto" } }}
      >
        <Typography
          textAlign="center"
          sx={{
            fontWeight: "bold",
            fontSize: { md: "48px", xs: "31px" },
            lineHeight: { md: "70px", xs: "48px" },
            color: "#1b1b1b",
          }}
        >
          Our Team
        </Typography>
        <br /> <br />
        <Box display="flex" flexWrap="wrap" gap="30px" justifyContent="center">
          <Slide bottom>
            {TeamData.map((item, i) => (
              <Box sx={{ width: "281px" }}>
                {item.img}
                <Box
                  textAlign="center"
                  sx={{
                    "&:hover": {
                      transition: "1s",
                      transform: "scale(1.1)",
                    },
                    margin: "0 auto 0 auto",
                    padding: "10px",
                    background: "#FFD223",
                    boxShadow: "0px 7px 13px rgba(0, 0, 0, 0.05)",
                    maxWidth: "234px",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: { md: "20px", xs: "16px" },
                      lineHeight: { md: "40px", xs: "20px" },
                      color: "#1b1b1b",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    sx={{
                      fontWeight: "normal",
                      fontSize: { md: "16px", xs: "14px" },
                      lineHeight: "180%",
                      color: "rgba(27, 27, 27, 0.4)",
                    }}
                  >
                    {item.speciality}
                  </Typography>
                  <a
                    href={item.linkedinLink}
                    without
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={require("../../../Assets/about/ln.png")} alt="" />
                  </a>
                </Box>
              </Box>
            ))}
          </Slide>
        </Box>
        <br />
        <GreyDotsLeft />
      </Box>
    </>
  );
};

export default OurTeam;

const TeamData = [
  {
    img: (
      <img
        src={require("../../../Assets/home/person.png")}
        className="team_img"
        alt=""
      />
    ),
    name: "Varadharajan",
    speciality: "CEO",
    linkedinLink: "https://www.linkedin.com/in/",
  },
  {
    img: (
      <img
        src={require("../../../Assets/home/person.png")}
        className="team_img"
        alt=""
      />
    ),
    name: "Tharunika",
    speciality: "Co-founder",
    linkedinLink: "https://www.linkedin.com/in/",
  },
  {
    img: (
      <img
        src={require("../../../Assets/home/person.png")}
        className="team_img"
        alt=""
      />
    ),
    name: "Vaishnav",
    speciality: "Developer",
    linkedinLink: "https://www.linkedin.com/in/",
  },
  {
    img: (
      <img
        src={require("../../../Assets/home/person.png")}
        className="team_img"
        alt=""
      />
    ),
    name: "Krishna Teja",
    speciality: "Bussiness Analyst",
    linkedinLink: " https://www.linkedin.com/in/uma-parvathy/        ",
  },
  {
    img: (
      <img
        src={require("../../../Assets/home/person.png")}
        className="team_img"
        alt=""
      />
    ),
    name: "Ganesan",
    speciality: "Tester",
    linkedinLink: "https://www.linkedin.com/in/        ",
  },
  {
    img: (
      <img
        src={require("../../../Assets/home/person.png")}
        className="team_img"
        alt=""
      />
    ),
    name: "Madhav",
    speciality: "Tester",
    linkedinLink: "https://www.linkedin.com/in/",
  },
];
