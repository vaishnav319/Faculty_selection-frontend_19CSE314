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
import {
  registerUser,
  verifyHREmail,
} from "../../../../Application/Actions/auth.actions";

import * as Yup from "yup";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const VerifyAdminPage = ({
  registerUser,
  verifyHREmail,
  auth: { isError, isLoading, isSuccess, isAuthenticated, userInfo },
}) => {
  const formik = useFormik({
    initialValues: {
      userEmail: "",
    },
    validationSchema: Yup.object({
      userEmail: Yup.string()
        .email("Invalid email address")
        .required("Required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      verifyHREmail(values);
    },
  });

  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          margin: { md: "100px auto", xs: "70px auto" },
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
          Verify your mail whether admin has added you as a HR
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

            {isError && (
              <Alert severity="error" sx={{ mt: "10px" }}>
                Admin not added your email,Contact Admin
              </Alert>
            )}
            {isSuccess && (
              <Alert severity="success" sx={{ mt: "10px" }}>
                Hurray! Admin Added your email you can proceed to Registration
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
VerifyAdminPage.propTypes = {
  verifyHREmail: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { verifyHREmail })(VerifyAdminPage);
