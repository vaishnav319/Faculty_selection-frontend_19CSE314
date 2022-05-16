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
import { sendOTP } from "../../../../Application/Actions/auth.actions";

import * as Yup from "yup";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ConfirmOTP from "./ConfirmOTP";

const VerifyNumber = ({
  sendOTP,

  auth: { isError, isLoading, isSuccess, isAuthenticated, userInfo },
}) => {
  const [visible, setVisible] = useState(false);
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string()
        .required("Number is required")
        .max(10, "Please enter a valid number")
        .min(10, "Please enter a valid number")
        .matches(/[3-9]\d\d/, "Must be a valid number"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setVisible(true);
      sendOTP(values);
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
          Verify your Phone Number and make your number as verified !
        </Typography>
        <br />

        <br />
        <Box>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              id=""
              placeholder="Enter your Phone number here.."
              sx={{
                width: { md: "48%", xs: "100%" },
                background: "#fff",
                borderRadius: "5px",
              }}
              name="phoneNumber"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
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
        {visible && <ConfirmOTP />}
      </Container>
    </>
  );
};
VerifyNumber.propTypes = {
  sendOTP: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { sendOTP })(VerifyNumber);
