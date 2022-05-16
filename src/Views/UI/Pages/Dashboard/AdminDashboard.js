import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { getCurrentHRProfile } from "../../../../Application/Actions/hrprofile.action";
// import { getCurrentUsersApplications } from "../../../../Application/Actions/application.action";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid, Typography, Box } from "@mui/material";

const AdminDashboard = ({
  getCurrentHRProfile,
  //   getCurrentUsersApplications,
  hrProfile,
  auth: { userInfo, isAuthenticated },
  //   application: { userApplications },
}) => {
  const location = useLocation();
  const [userDetailsInfo, setUserInfo] = useState();
  const [userProfile, SetUserProfile] = useState();

  useEffect(() => {
    getCurrentHRProfile();
    // getCurrentUsersApplications();
    SetUserProfile(hrProfile.hrprofile);
    setUserInfo(userInfo);
  }, [getCurrentHRProfile]);
  if (!isAuthenticated) {
    return <Navigate replace to="/login" />;
  }
  if (!hrProfile.hrprofile) {
    return <Navigate replace to="/profile/me" />;
  }
  //   console.log(userApplications);

  return (
    <div>
      {userDetailsInfo && (
        <div style={{ margin: "200px 0", textAlign: "center" }}>
          <h1 style={{ color: "yellow" }}>AdminDashboard</h1>
          <h1>Hii {userDetailsInfo ? userDetailsInfo.userName : ""}</h1>
          <h1>You are a {userInfo.role}</h1>
          {/* <Grid
            container
            spacing={2}
            sx={{
              justifyContent: "space-around",
              padding: "20px ",
              alignItems: "flex-end",
            }}
          >
            <Grid item lg={3} md={6} xs={12}>
              HEy
              <br />
            </Grid>
            <Grid item lg={2} md={6} xs={12}>
              hey
            </Grid>
            <Grid item lg={2} md={6} xs={12}>
              hey
            </Grid>
            <Grid item lg={2} md={6} xs={12}>
              <Typography
                variant="h3"
                sx={{ fontSize: "20px", fontWeight: "500" }}
              >
                You can reach us in
              </Typography>
              Hii
              <Box sx={{ marginTop: { md: "20px", xs: "0" } }} />
            </Grid>
          </Grid> */}
        </div>
      )}
    </div>
  );
};

AdminDashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  hrprofile: PropTypes.object.isRequired,
  getCurrentHRProfile: PropTypes.func.isRequired,
  //   getCurrentUsersApplications: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  hrProfile: state.hrProfile,
  application: state.application,
});

export default connect(mapStateToProps, {
  getCurrentHRProfile,
  //   getCurrentUsersApplications,
})(AdminDashboard);
