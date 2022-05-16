import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Button, Grid, item } from "@mui/material";
import Picture from "../../../../Application/Utils/Picture";
import EditIcon from "@mui/icons-material/Edit";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import { Link } from "react-router-dom";
import ExperienceCredentials from "./ExperienceCredentials";
import PropTypes from "prop-types";
import VerifiedIcon from "@mui/icons-material/Verified";
import { connect } from "react-redux";
import { getCurrentHRProfile } from "../../../../Application/Actions/hrprofile.action";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { PersonAdd, Upload } from "@mui/icons-material";
import UploadPicture from "./UploadPicture";
const HrProfile = ({ auth: { userInfo }, hrProfile: { hrprofile } }) => {
  const [profile, setProfile] = useState();
  const [experience, setExperience] = useState();

  useEffect(() => {
    getCurrentHRProfile();
    {
      hrprofile && setProfile(hrprofile[0]);
    }
    setExperience(hrprofile[0].experience);
    // getCurrentUsersApplications();
  }, [getCurrentHRProfile]);
  console.log(profile);
  return (
    <div>
      <Box
        sx={{
          margin: "50px 0",
          background: "#FFD223",
          height: "auto",
          padding: "120px 0",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          className="container"
          sx={{
            display: "flex",
            position: "absolute",
            marginTop: "12rem",
            marginLeft: "6rem",
            flexWrap: "wrap",
            flexDirection: "row",
            gap: "30px",
            justifyContent: "flexStart",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Picture width="180px" height="180px" />
          {/* <Link to="/add/picture"> */}
          <Typography
            onClick={<UploadPicture />}
            sx={{
              position: "absolute",
              marginTop: "10rem",
              marginLeft: "9rem",
              fontWeight: "bold",
              fontSize: "15px",
              color: "#1b1b1b",
            }}
          >
            <PersonAddIcon /> Upload Pic
          </Typography>

          <div>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "48px",
                lineHeight: "75px",
                color: "#FFFFFF",
              }}
            >
              {userInfo && userInfo?.userName}
            </Typography>
            <br />
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "28px",
                color: " #1B1B1B",
              }}
            >
              {userInfo && userInfo?.userEmail}
            </Typography>
          </div>
          <div>
            <Link to="/update/profile">
              <Button
                sx={{
                  fontSize: "18px",
                  marginLeft: "1rem",
                  lineHeight: "75px",
                  color: "#FFFFFF",
                  textDecoration: "underline",
                }}
              >
                Edit Profile <EditIcon sx={{ pl: "0.1rem" }} />
              </Button>
            </Link>
            <br />
          </div>
          <br />
        </Box>
      </Box>
      <Box>
        <Box
          maxWidth="lg"
          sx={{ margin: { md: "100px auto", xs: "50px auto" } }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "3rem",
                  color: " #1B1B1B",
                }}
              >
                Your Personal ID: {profile && profile?.user}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "3rem",
                  color: " #1B1B1B",
                }}
              >
                Location: {profile && profile?.location}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "3rem",
                  color: " #1B1B1B",
                }}
              >
                Gender: {profile && profile?.gender}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "28px",
                  color: " #1B1B1B",
                }}
              >
                Phone Number: {userInfo && userInfo?.phoneNumber}
                {userInfo && userInfo?.isVerified ? (
                  <span style={{ color: "green" }}>
                    verified <VerifiedIcon />
                  </span>
                ) : (
                  <div>
                    <span style={{ color: "red" }}>
                      Not verified <GppMaybeIcon />
                    </span>
                    <Typography>
                      <Link to="/number/verify" style={{ color: "#FFD223" }}>
                        Click here to verify your Number
                      </Link>
                    </Typography>
                  </div>
                )}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "3rem",
                  color: " #1B1B1B",
                }}
              >
                Portfolio Link: {profile && profile?.websiteLink}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "3rem",
                  color: " #1B1B1B",
                }}
              >
                Max Qualification: {profile && profile?.maxQualification}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "28px",
              lineHeight: "75px",
              color: "#1B1B1B",
            }}
          >
            Experience Credentials :{" "}
            <Link to="/add/experience">
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
                Add Experience
              </Button>
            </Link>
          </Typography>
          {experience && <ExperienceCredentials experience={experience} />}
        </Box>
        <Button sx={{ ml: 15, mb: 5 }} variant="contained" color="error">
          Delete your Account
        </Button>
      </Box>
    </div>
  );
};

HrProfile.propTypes = {
  getCurrentHRProfile: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  hrProfile: state.hrProfile,
});

export default connect(mapStateToProps, {
  getCurrentHRProfile,
})(HrProfile);
