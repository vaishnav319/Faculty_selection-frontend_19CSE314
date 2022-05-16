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
import { sendForgotOTP } from "../../../../Application/Actions/auth.actions";

import * as Yup from "yup";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PasswordVerifyForm from "./PasswordVerifyForm";

const ForgotPassword = ({
  sendForgotOTP,

  auth: { isError, isLoading, isSuccess, isAuthenticated, userInfo },
}) => {
  const [visible, setVisible] = useState(false);
  const formik = useFormik({
    initialValues: {
      userEmail: "",
    },
    validationSchema: Yup.object({
      userEmail: Yup.string().required("email is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setVisible(true);
      sendForgotOTP(values);
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
          Enter your Email ID here
        </Typography>
        <br />

        <br />
        <Box>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              id=""
              placeholder="Enter your Mail ID  here.."
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
                Sorry OTP sending failed please try again
              </Alert>
            )}
            {isSuccess && (
              <Alert severity="success" sx={{ mt: "10px" }}>
                Hurray! OTP successfully sent to your Number..
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
              Send OTP
            </Button>
          </form>
        </Box>
        {visible && <PasswordVerifyForm />}
      </Container>
    </>
  );
};
ForgotPassword.propTypes = {
  sendForgotOTP: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { sendForgotOTP })(ForgotPassword);
