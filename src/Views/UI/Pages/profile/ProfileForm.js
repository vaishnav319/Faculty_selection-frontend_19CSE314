import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  TextField,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useFormik } from "formik";
import { GreyDotsLeft } from "../../Commons/GreyDots";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as Yup from "yup";
import {
  getCurrentProfile,
  updateProfile,
} from "../../../../Application/Actions/profile.action";
import {
  getCurrentHRProfile,
  updateHRProfile,
} from "../../../../Application/Actions/hrprofile.action";
import store from "../../../../Application/Store/store";
import { Navigate, useNavigate, useLocation, history } from "react-router-dom";
const ProfileForm = ({
  updateProfile,
  updateHRProfile,
  profile,
  hrProfile,
  history,
  auth: { userInfo },
}) => {
  let navigate = useNavigate();
  let location = useLocation();

  const from = "/dashboard";
  useEffect(() => {
    store.dispatch(getCurrentProfile());
    store.dispatch(getCurrentHRProfile());
  }, []);
  const formik = useFormik({
    initialValues: {
      skills: "",
      location: "",
      gender: "",
      currentPosition: "",
      maxQualification: "",
      websiteLink: "",
      isWorking: "",
    },
    skills: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    location: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    gender: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    currentPosition: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    maxQualification: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    websiteLink: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    isWorking: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      console.log(userInfo.role);

      userInfo.role === "HR"
        ? updateHRProfile(values, navigate, from)
        : updateProfile(values, navigate, from);
      resetForm({});
    },
  });
  // if (profile.profile[0]) {
  //   return <Navigate to="/dashboard" />;
  // }
  if (userInfo.role == "HR") {
    if (hrProfile.hrprofile) {
      console.log("in hr profil form");
      return <Navigate to="/hr/dashboard" />;
    }
  } else {
    if (profile.profile) {
      return <Navigate to="/dashboard" />;
    }
  }
  return (
    <>
      <Box
        id="form"
        maxWidth="lg"
        sx={{ margin: { md: "100px auto", xs: "50px auto" } }}
      >
        <Box
          sx={{
            background: "#001531",
            borderRadius: "20px",
            padding: { md: "50px", xs: "20px" },
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "31px",
              lineHeight: "37px",
              color: "#fff",
            }}
          >
            Add/Create Your Profile
          </Typography>
          <br />
          <br />
          <form onSubmit={formik.handleSubmit}>
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
              <TextField
                id=""
                type="text"
                placeholder="Enter Your maxQualification here"
                sx={{
                  width: { md: "48%", xs: "100%" },
                  background: "#fff",
                  borderRadius: "5px",
                  marginBottom: { md: "0", xs: "20px" },
                }}
                name="maxQualification"
                onChange={formik.handleChange}
                value={formik.values.maxQualification}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.maxQualification &&
                  Boolean(formik.errors.maxQualification)
                }
                helperText={
                  formik.touched.maxQualification &&
                  formik.errors.maxQualification
                }
              />
              <TextField
                id=""
                type="text"
                placeholder="Enter your Location here"
                sx={{
                  width: { md: "48%", xs: "100%" },
                  background: "#fff",
                  borderRadius: "5px",
                }}
                name="location"
                onChange={formik.handleChange}
                value={formik.values.location}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.location && Boolean(formik.errors.location)
                }
                helperText={formik.touched.location && formik.errors.location}
              />
            </Box>
            <br />
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
              <TextField
                id=""
                type="text"
                placeholder="Gender"
                sx={{
                  width: { md: "48%", xs: "100%" },
                  background: "#fff",
                  borderRadius: "5px",
                  marginBottom: { md: "0", xs: "20px" },
                }}
                name="gender"
                onChange={formik.handleChange}
                value={formik.values.gender}
                onBlur={formik.handleBlur}
                error={formik.touched.gender && Boolean(formik.errors.gender)}
                helperText={formik.touched.gender && formik.errors.gender}
              />
              <TextField
                id=""
                placeholder="Enter Your current Position here (if working..)"
                sx={{
                  width: { md: "48%", xs: "100%" },
                  background: "#fff",
                  borderRadius: "5px",
                }}
                name="currentPosition"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.currentPosition}
                error={
                  formik.touched.currentPosition &&
                  Boolean(formik.errors.currentPosition)
                }
                helperText={
                  formik.touched.currentPosition &&
                  formik.errors.currentPosition
                }
              />
            </Box>
            <br />

            <GreyDotsLeft />

            <br />
            <TextField
              id=""
              placeholder="Enter your Portfolio Link here.."
              sx={{
                width: { md: "100%", xs: "100%" },
                background: "#fff",
                borderRadius: "5px",
              }}
              name="websiteLink"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.websiteLink}
              error={
                formik.touched.websiteLink && Boolean(formik.errors.websiteLink)
              }
              helperText={
                formik.touched.websiteLink && formik.errors.websiteLink
              }
            />
            <br />
            <br />

            <TextField
              id=""
              placeholder="Enter Your Skills here.."
              sx={{
                width: { md: "100%", xs: "100%" },
                background: "#fff",
                borderRadius: "5px",
              }}
              name="skills"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.skills}
              error={formik.touched.skills && Boolean(formik.errors.skills)}
              helperText={formik.touched.skills && formik.errors.skills}
            />
            <br />
            <br />
            {/* {isError && (
              <Alert severity="error">
                Something went wrong please try again later
              </Alert>
            )}
            {isSuccess && (
              <Alert severity="success">New Job Post created.</Alert>
            )} */}
            <br />
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="primary"
              sx={{ padding: "12px 50px", width: "100%" }}
            >
              {/* {isLoading ? (
                <CircularProgress sx={{ color: "#fff" }} />
              ) : (
                "Submit"
              )} */}
              Create Profile
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

ProfileForm.propTypes = {
  updateProfile: PropTypes.func.isRequired,
  updateHRProfile: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  application: state.application,
  profile: state.profile,
  hrProfile: state.hrProfile,
});

export default connect(mapStateToProps, { updateProfile, updateHRProfile })(
  ProfileForm
);
