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
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { verifyOTP } from "../../../../Application/Actions/auth.actions";

import * as Yup from "yup";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ConfirmOTP = ({
  verifyOTP,
  auth: {
    isError,
    isLoading,
    isSuccess,
    isAuthenticated,
    userInfo,
    otpverifysuccess,
    otpverifyfail,
  },
}) => {
  const phone = userInfo && userInfo.phoneNumber;
  const formik = useFormik({
    initialValues: {
      userOtp: "",
    },
    validationSchema: Yup.object({
      userOtp: Yup.string()
        .max(4, "Please enter a valid number")
        .min(4, "Please enter a valid number")
        .required("Required"),
    }),

    onSubmit: (values, { resetForm }) => {
      values.phoneNumber = phone;
      console.log(values);
      if (values.phoneNumber) {
        verifyOTP(values);
      }
    },
  });

  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          //   margin: { md: "100px auto", xs: "70px auto" },
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { md: "28px", xs: "31px" },
            lineHeight: { md: "70px", xs: "48px" },
            color: "#1b1b1b",
          }}
        >
          Enter your OTP here:
        </Typography>
        <br />

        <br />
        <Box>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              id=""
              placeholder="Enter HR email here.."
              sx={{
                width: { md: "48%", xs: "100%" },
                background: "#fff",
                borderRadius: "5px",
              }}
              name="userOtp"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userOtp}
              error={formik.touched.userOtp && Boolean(formik.errors.userOtp)}
              helperText={formik.touched.userOtp && formik.errors.userOtp}
            />
            <br />

            {otpverifyfail && (
              <Alert severity="error" sx={{ mt: "10px" }}>
                Please enter valid OTP..
              </Alert>
            )}
            {otpverifysuccess && (
              <Alert severity="success" sx={{ mt: "10px" }}>
                Hurray! Your Number is verified now
              </Alert>
            )}
            <br />
            <Button
              variant="contained"
              size="large"
              type="submit"
              sx={{
                background: "#FFD223",
                color: "#001531",
                borderRadius: "26px",
                "&:hover": { background: "#fff", color: "black" },
              }}
            >
              Verify
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};
ConfirmOTP.propTypes = {
  verifyOTP: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { verifyOTP })(ConfirmOTP);
