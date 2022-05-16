import React, { useState } from "react";
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

import { updateHRProfile } from "../../../../Application/Actions/hrprofile.action.js";
import { updateProfile } from "../../../../Application/Actions/profile.action";
const EditProfile = ({
  updateHRProfile,
  updateProfile,
  hrProfile: { hrprofile, isSuccess, isLoading, isError },
  profile: { profile },
  auth: { role },
}) => {
  let hrpro;
  if (role == "user") {
    hrpro = profile && profile[0];
  } else {
    hrpro = hrprofile && hrprofile[0];
  }

  const formik = useFormik({
    initialValues: {
      location: hrpro?.location ? hrpro?.location : "",
      gender: hrpro?.gender ? hrpro?.gender : "",
      websiteLink: hrpro?.websiteLink ? hrpro?.websiteLink : "",
      maxQualification: hrpro?.maxQualification ? hrpro?.maxQualification : "",
    },

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      if (role == "user") {
        updateProfile(values);
      } else {
        updateHRProfile(values);
      }
      // resetForm({});
    },
  });
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
            Update Profile
          </Typography>
          <br />
          <br />
          <form onSubmit={formik.handleSubmit}>
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
              <TextField
                id=""
                type="text"
                placeholder="Enter Location"
                sx={{
                  width: { md: "48%", xs: "100%" },
                  background: "#fff",
                  borderRadius: "5px",
                  marginBottom: { md: "0", xs: "20px" },
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
              <TextField
                id=""
                type="text"
                placeholder="Enter your Gender here"
                sx={{
                  width: { md: "48%", xs: "100%" },
                  background: "#fff",
                  borderRadius: "5px",
                }}
                name="gender"
                onChange={formik.handleChange}
                value={formik.values.gender}
                onBlur={formik.handleBlur}
                error={formik.touched.gender && Boolean(formik.errors.gender)}
                helperText={formik.touched.gender && formik.errors.gender}
              />
            </Box>
            <br />
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
              <TextField
                id=""
                type="text"
                placeholder="Portfolio Link"
                sx={{
                  width: { md: "48%", xs: "100%" },
                  background: "#fff",
                  borderRadius: "5px",
                  marginBottom: { md: "0", xs: "20px" },
                }}
                name="websiteLink"
                onChange={formik.handleChange}
                value={formik.values.websiteLink}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.websiteLink &&
                  Boolean(formik.errors.websiteLink)
                }
                helperText={
                  formik.touched.websiteLink && formik.errors.websiteLink
                }
              />
              <TextField
                id=""
                placeholder="Max Qualification"
                sx={{
                  width: { md: "48%", xs: "100%" },
                  background: "#fff",
                  borderRadius: "5px",
                }}
                name="maxQualification"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.maxQualification}
                error={
                  formik.touched.maxQualification &&
                  Boolean(formik.errors.maxQualification)
                }
                helperText={
                  formik.touched.maxQualification &&
                  formik.errors.maxQualification
                }
              />
            </Box>
            <br />
            <GreyDotsLeft />
            <br />
            <br />
            {isError && (
              <Alert severity="error">
                Something went wrong please try again later
              </Alert>
            )}
            {isSuccess && (
              <Alert severity="success">Application is Updated</Alert>
            )}
            <br />
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="primary"
              sx={{ padding: "12px 50px", width: "100%" }}
            >
              {isLoading ? (
                <CircularProgress sx={{ color: "#fff" }} />
              ) : (
                "Update"
              )}

              {/* Submit */}
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

EditProfile.propTypes = {
  updateHRProfile: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  hrProfile: state.hrProfile,
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { updateHRProfile, updateProfile })(
  EditProfile
);
