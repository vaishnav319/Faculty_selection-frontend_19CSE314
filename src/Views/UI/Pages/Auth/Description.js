import React from "react";
import { Typography, Box } from "@mui/material";
const Description = () => {
  return (
    <div>
      <Box sx={{ display: "inline" }} className="container">
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { md: "78px" },
            textShadow: "2px 2px 0 #FFDD23, 4px 4px 0 #9c9c9c",
            lineHeight: { md: "70px", xs: "48px" },
            color: "#bcbcbcc",
            ml: "2rem",
            mt: "8rem",
          }}
        >
          Job Crack
        </Typography>
        <Box sx={{ my: "8%" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { md: "38px", xs: "21px" },
              lineHeight: { md: "70px", xs: "48px" },
              color: "#FFDD23",
              ml: "30px",
            }}
          >
            Join the community
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { md: "18px" },
              color: "#001531",
              ml: "30px",
            }}
          >
            A massively growing community of active job seeker and recruiters.
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { md: "38px", xs: "21px" },
              lineHeight: { md: "70px", xs: "48px" },
              color: "#FFDD23",
              ml: "30px",
            }}
          >
            Search the Jobs
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { md: "18px" },
              color: "#001531",
              ml: "30px",
            }}
          >
            Search through filters to find the jobs matching your Skills and
            Experience
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { md: "38px", xs: "21px" },
              lineHeight: { md: "70px", xs: "48px" },
              color: "#FFDD23",
              ml: "30px",
            }}
          >
            Land your dream Job
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { md: "18px" },
              color: "#001531",
              ml: "30px",
            }}
          >
            Advance your skills and join our Careers section to find your next
            dream job
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Description;
