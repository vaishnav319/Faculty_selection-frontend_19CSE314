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
import { getCurrentUsersApplications } from "../../../../Application/Actions/application.action";
import JobApplicationsList from "./JobApplicationsList";
const JobApplications = ({
  getCurrentUsersApplications,
  application: { userApplications },
}) => {
  const [applications, setApplications] = useState();
  useEffect(() => {
    getCurrentUsersApplications();
    setApplications(userApplications);
    console.log(applications);
  }, [getCurrentUsersApplications]);
  return (
    <>
      <Box
        className="container"
        sx={{ margin: { md: "100px auto", xs: "50px auto" } }}
      >
        <Typography style={{ color: "#001537" }}>
          These are the JobApplications of yours
        </Typography>
        <JobApplicationsList userApplications={userApplications} />
      </Box>
      ;
    </>
  );
};

JobApplications.propTypes = {
  getCurrentUsersApplications: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  application: state.application,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentUsersApplications })(
  JobApplications
);
