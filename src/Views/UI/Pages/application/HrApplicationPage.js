import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { getAllApplications } from "../../../../Application/Actions/application.action";
import Date from "../../../../Application/Utils/Date";
import Trim from "../../../../Application/Utils/Trim";
const HrApplicationPage = ({
  getAllApplications,
  application: { isLoading, isError, isSuccess, applications },
}) => {
  const [applicationsList, setApplicationsList] = useState();
  useEffect(() => {
    getAllApplications();

    setApplicationsList(applications);
  }, [getAllApplications]);
  return (
    <div>
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
          <br />
          <Link to="/add/application" style={{ textDecoration: "none" }}>
            <Button
              size="large"
              variant="contained"
              sx={{
                borderRadius: "94px",
                background: "#fff",
                color: "#FFD223",
                "&:hover": { background: "#fff", color: "#001537" },
              }}
            >
              Click here to Add a New Job application
            </Button>
          </Link>
        </Typography>
        <br />

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
                <Card sx={{ maxWidth: 375 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Application Id:{item._id}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {item.jobPosition}
                    </Typography>
                    <Typography sx={{ mt: 1.5 }} color="text.secondary">
                      Posted on: <Date date={item.postedOn} />
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Closes By {item.endsOn && <Date date={item.endsOn} />}
                    </Typography>
                    <Typography variant="body2">
                      <Trim desc={item.description} />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link
                      to={`/hr/job-details/${item._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button size="small">Details</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Fade>
            ))}
        </Box>
      </Box>
    </div>
  );
};
HrApplicationPage.propTypes = {
  getAllApplications: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  application: state.application,
});

export default connect(mapStateToProps, { getAllApplications })(
  HrApplicationPage
);
