import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  TextField,
  CircularProgress,
  Alert,
} from "@mui/material";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { getAllApplications } from "../../../../Application/Actions/application.action";
import Date from "../../../../Application/Utils/Date";
import Trim from "../../../../Application/Utils/Trim";
const Application = ({
  getAllApplications,
  application: { isLoading, isError, isSuccess, applications },
}) => {
  const [applicationsList, setApplicationsList] = useState();
  useEffect(() => {
    getAllApplications();

    setApplicationsList(applications);
  }, [getAllApplications]);
  return (
    <>
      <Box
        className="container"
        sx={{ margin: { md: "100px auto", xs: "50px auto" } }}
      >
        <Typography
          textAlign="center"
          position="relative"
          sx={{
            fontWeight: "bold",
            fontSize: { md: "48px", xs: "31px" },
            lineHeight: { md: "70px", xs: "48px" },
            color: "#1b1b1b",
          }}
        >
          Current Job Positions
          {/* <BabyPink /> */}
        </Typography>
        <br />
        <Box
          textAlign="center"
          sx={{ width: { md: "80%", xs: "100%" }, margin: "0 auto" }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: { md: "20px", xs: "16px" },
              lineHeight: "28px",
              color: " rgba(27, 27, 27, 0.8)",
            }}
          >
            We at Job Crack are looking for hustlers, firefighters & change
            makers wanting to make an impact on the education system! If you are
            someone who loves a challenge & have what it takes to go above &
            beyond to get the work done, let's catch up!
          </Typography>
        </Box>
        <br />
        <br />
        <Box display="flex" justifyContent="center" gap="20px" flexWrap="wrap">
          {applications &&
            applications.map((item, i) => (
              <Fade bottom>
                <Box>
                  <Box
                    sx={{
                      width: { md: "387px", xs: "100%" },
                      height: { md: "430px", xs: "auto" },
                      background: "rgba(27, 27, 27, 0.02)",
                      borderRadius: "10px",
                      position: "relative",
                    }}
                  >
                    <Box padding="40px">
                      {/* <Box sx={{ border: '1px solid red' }}> */}
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "25px",
                          lineHeight: "28px",
                          color: "#1B1B1B",
                        }}
                      >
                        {item.jobPosition}
                      </Typography>
                      <br />
                      <Typography
                        sx={{
                          fontWeight: "normal",
                          fontSize: "16px",
                          lineHeight: "28px",
                          color: "rgba(27, 27, 27, 0.6)",
                          // textAlign: 'justify'
                        }}
                      >
                        Posted on: <Date date={item.postedOn} />
                      </Typography>

                      <Typography
                        sx={{
                          fontWeight: "normal",
                          fontSize: "16px",
                          lineHeight: "28px",
                          color: "rgba(27, 27, 27, 0.6)",
                          // textAlign: 'justify'
                        }}
                      >
                        Closes By {item.endsOn && <Date date={item.endsOn} />}
                      </Typography>
                      <br />
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "15px",
                          lineHeight: "28px",
                          color: "rgba(27, 27, 27, 0.6)",
                        }}
                      >
                        Description
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "normal",
                          fontSize: "20px",
                          lineHeight: "28px",
                          color: "rgba(27, 27, 27, 0.9)",
                          mt: "0.5rem",
                          mb: "0.5rem",
                          // textAlign: 'justify'
                        }}
                      >
                        <Trim desc={item.description} />
                      </Typography>

                      <Box
                        sx={{
                          position: { md: "absolute", xs: "relative" },
                          bottom: { md: "45px", xs: "0px" },
                        }}
                      >
                        <br />
                        <Typography
                          sx={{
                            fontWeight: "normal",
                            fontSize: "16px",
                            lineHeight: "28px",
                            color: "#FFD223",
                          }}
                        >
                          Full-time
                        </Typography>
                        <br />
                        <Link
                          to={`/job-details/${item._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            variant="contained"
                            color="primary"
                            sx={{ borderRadius: "94px" }}
                          >
                            View Details
                          </Button>
                        </Link>
                      </Box>
                      {/* </Box> */}
                    </Box>
                  </Box>
                </Box>
              </Fade>
            ))}
        </Box>
      </Box>
      ;
    </>
  );
};

Application.propTypes = {
  getAllApplications: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  application: state.application,
});

export default connect(mapStateToProps, { getAllApplications })(Application);
