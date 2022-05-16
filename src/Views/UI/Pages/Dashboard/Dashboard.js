import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { getCurrentProfile } from "../../../../Application/Actions/profile.action";
import { getCurrentUsersApplications } from "../../../../Application/Actions/application.action";
import ReactSpeedometer from "react-d3-speedometer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Grid,
  Typography,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import TextTickers from "./TextTickers";
import Aboutus from "../Home/Aboutus";
const Dashboard = ({
  getCurrentProfile,
  getCurrentUsersApplications,
  profile,
  auth: { userInfo, isAuthenticated },
  application: { userApplications },
}) => {
  const location = useLocation();
  const [userDetailsInfo, setUserInfo] = useState();
  const [userProfile, SetUserProfile] = useState();
  useEffect(() => {
    getCurrentProfile();
    getCurrentUsersApplications();
    SetUserProfile(profile.profile[0]);
    setUserInfo(userInfo);
  }, [getCurrentProfile]);
  if (!isAuthenticated) {
    return <Navigate replace to="/login" />;
  }
  if (!profile.profile) {
    return <Navigate replace to="/profile/me" />;
  }
  console.log(userApplications);
  const time = new Date();
  const hours = time.getHours();
  console.log(typeof hours);
  const onGoing = userApplications.filter((x) => x.status == "onGoing");
  console.log(onGoing.length);
  const selected = userApplications.filter((x) => x.status == "selected");
  console.log(selected.length);
  const notSelected = userApplications.filter((x) => x.status == "notSelected");
  console.log(notSelected.length);
  return (
    <Box>
      {userDetailsInfo && (
        <Box
          className="container"
          sx={{ margin: { md: "100px auto", xs: "150px auto" } }}
        >
          <Typography
            textAlign="center"
            sx={{
              fontWeight: "bold",
              fontSize: { md: "58px", xs: "31px" },
              lineHeight: { md: "70px", xs: "48px" },
              color: "#1B1B1B",
              my: "30px",
            }}
          >
            Welcome To{" "}
            <span style={{ color: "#FFD233", fontWeight: "bold" }}>
              {" "}
              Job Crack
            </span>
          </Typography>
          {/* <p>Your Role: {userInfo.role === "user" ? "Applicant" : ""}</p> */}
          <Box display="flex" justifyContent="left" gap="20px" flexWrap="wrap">
            <Box sx={{ margin: { md: "100px auto", xs: "150px auto" } }}>
              <Typography sx={{ fontSize: "2.5rem" }}>
                {hours < 12 && "Good Morning "}
                {hours >= 12 && hours < 16 ? "Good Afternoon " : ""}
                {hours > 16 && "Good Evening "}
                {userDetailsInfo ? userDetailsInfo.userName : ""},
              </Typography>
              <Typography sx={{ fontSize: "1rem" }}>
                This is your dashboard here you can check your activity here....
              </Typography>
            </Box>
            <Card sx={{ background: "#FFD233", maxWidth: 300, mt: "10px" }}>
              <CardContent>
                <ReactSpeedometer
                  value={userApplications.length}
                  maxValue={userApplications.length > 10 ? 100 : 5}
                  segments={5}
                  height={200}
                  width={275}
                  needleTransitionDuration={3000}
                  segmentColors={[
                    "#F32424",
                    "#F55353",
                    "#90EE90",
                    "green",
                    "#006400",
                  ]}
                  // startColor will be ignored
                  // endColor will be ignored
                />
                <Typography sx={{ color: "black" }}>
                  You have applied to {userApplications.length}{" "}
                  {userApplications.length > 1 ? "applications" : "application"}
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                background: "#FFD233",
                maxWidth: 300,
                mt: "10px",
                ml: "40px",
              }}
            >
              <CardContent>
                <ReactSpeedometer
                  value={onGoing.length}
                  maxValue={userApplications.length > 10 ? 100 : 5}
                  segments={5}
                  height={200}
                  width={275}
                  needleTransitionDuration={3000}
                  segmentColors={[
                    "#F32424",
                    "#F55353",
                    "#90EE90",
                    "green",
                    "#006400",
                  ]}
                  // startColor will be ignored
                  // endColor will be ignored
                />
                <Typography sx={{ color: "black" }}>
                  Your {onGoing.length}{" "}
                  {onGoing.length > 1 ? "applications" : "application"} is
                  process
                </Typography>
              </CardContent>
            </Card>
            {/* <Card sx={{ background: "#FFD233", maxWidth: 300, mt: "10px" }}>
              <CardContent>
                <ReactSpeedometer
                  value={selected.length}
                  maxValue={selected.length > 10 ? 100 : 5}
                  segments={5}
                  height={200}
                  width={275}
                  needleTransitionDuration={3000}
                  segmentColors={[
                    "#F32424",
                    "#F55353",
                    "#90EE90",
                    "green",
                    "#006400",
                  ]}
                  // startColor will be ignored
                  // endColor will be ignored
                />
                <Typography sx={{ color: "black" }}>
                  You have been selected to {selected.length}{" "}
                  {selected.length > 1 ? "applications" : "application"}
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ background: "#001531", maxWidth: 300, mt: "10px" }}>
              <CardContent>
                <ReactSpeedometer
                  value={notSelected}
                  maxValue={notSelected.length > 10 ? 100 : 5}
                  segments={5}
                  height={200}
                  width={275}
                  needleTransitionDuration={3000}
                  segmentColors={[
                    "#F32424",
                    "#F55353",
                    "#90EE90",
                    "green",
                    "#006400",
                  ]}
                  // startColor will be ignored
                  // endColor will be ignored
                />
                <Typography sx={{ color: "white" }}>
                  Rejected Applications
                </Typography>
              </CardContent>
            </Card> */}
          </Box>
          {/* <Box
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
              <TextTickers />
            </Box>
          </Box> */}
          <Aboutus />
        </Box>
      )}
    </Box>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  getCurrentUsersApplications: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  application: state.application,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  getCurrentUsersApplications,
})(Dashboard);
