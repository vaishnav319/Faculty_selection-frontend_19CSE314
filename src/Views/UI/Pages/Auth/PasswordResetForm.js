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
import { updatePassword } from "../../../../Application/Actions/auth.actions";

import * as Yup from "yup";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const PasswordVerifyForm = ({
  updatePassword,
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
  const formik = useFormik({
    initialValues: {
      userEmail: "",
      password: "",
    },
    validationSchema: Yup.object({
      userEmail: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);

      updatePassword(values);
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
          Enter your OTP here received in your mail:
        </Typography>
        <br />

        <br />
        <Box>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              id=""
              placeholder="Enter your mail.."
              sx={{
                width: { md: "48%", xs: "100%" },
                background: "#fff",
                borderRadius: "5px",
              }}
              name="userEmail"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userEmail}
              error={
                formik.touched.userEmail && Boolean(formik.errors.userEmail)
              }
              helperText={formik.touched.userEmail && formik.errors.userEmail}
            />

            <br />
            <TextField
              id=""
              placeholder="Enter new Password here.."
              sx={{
                width: { md: "48%", xs: "100%" },
                background: "#fff",
                borderRadius: "5px",
              }}
              name="password"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

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
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};
PasswordVerifyForm.propTypes = {
  updatePassword: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { updatePassword })(PasswordVerifyForm);
