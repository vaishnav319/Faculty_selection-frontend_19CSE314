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
import { registerHr } from "../../../../Application/Actions/auth.actions";
import * as Yup from "yup";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const RegisterForm = ({
  registerHr,
  auth: { isError, isLoading, isSuccess, isAuthenticated, userInfo },
}) => {
  const [file, setFile] = useState();
  const digitsOnly = (value) => /^\d+$/.test(value);

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      qualification: "",
      file: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      // userEmail: Yup.string()
      //   .email("Invalid email address")
      //   .required("Required"),

      // password: Yup.string()
      //   .max(20, "Must be 20 characters or less")
      //   .required("Required"),
      // confirmPassword: Yup.string()
      //   .max(20, "Must be 20 characters or less")
      //   .required("Required"),
      // qualification: Yup.string()
      //   .max(20, "Must be 20 characters or less")
      //   .required("Required"),
      // file: Yup.mixed(),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log("Hello");
      console.log(values);
      if (values.password === values.confirmPassword) {
        const formData = new FormData();
        Object.keys(values).forEach((value) => {
          formData.append(value, values[value]);
        });
        formData.delete("file");
        formData.append("file", file);
        console.log(formData);
        registerHr(formData);
        // resetForm({});
      } else {
        <Alert severity="error">Password Not Matching</Alert>;
      }
    },
  });
  if (isAuthenticated && userInfo.role == "user") {
    return <Navigate to="/dashboard" />;
  }
  if (isAuthenticated && userInfo.role == "HR") {
    return <Navigate to="/hr/dashboard" />;
  }
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
            fontSize: { md: "48px", xs: "31px" },
            lineHeight: { md: "70px", xs: "48px" },
            color: "#1b1b1b",
          }}
        >
          Register with Job Crack as HR
        </Typography>
        <br />
        {/* <Typography
          sx={{
            fontWeight: "500",
            fontSize: { md: "20px", xs: "16px" },
            lineHeight: "28px",
            color: "#1B1B1B",
          }}
        >
          Y
        </Typography> */}
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: { md: "20px", xs: "16px" },
            lineHeight: "28px",
            color: "#1B1B1B",
          }}
        >
          Register as a User ? <Link to="/register">click here</Link>
        </Typography>
        <br />
        <br />
        <Box>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              type="text"
              label="Enter your Username"
              sx={{
                width: "100%",
                background: " rgba(27, 27, 27, 0.05)",
                borderRadius: "5px",
              }}
              name="userName"
              onChange={formik.handleChange}
              value={formik.values.userName}
              onBlur={formik.handleBlur}
              error={formik.touched.userName && Boolean(formik.errors.userName)}
              helperText={formik.touched.userName && formik.errors.userName}
            />
            <br />
            <br />
            <TextField
              type="text"
              label="Enter your Email"
              sx={{
                width: "100%",
                background: " rgba(27, 27, 27, 0.05)",
                borderRadius: "5px",
              }}
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <br />
            <br />

            <TextField
              type="password"
              label="Enter your password"
              sx={{
                width: "100%",
                background: " rgba(27, 27, 27, 0.05)",
                borderRadius: "5px",
              }}
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <br />
            <br />
            <TextField
              type="password"
              label="Confirm Your Password"
              sx={{
                width: "100%",
                background: " rgba(27, 27, 27, 0.05)",
                borderRadius: "5px",
              }}
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              onBlur={formik.handleBlur}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />
            <br />
            <br />

            <TextField
              type="text"
              label="Enter your Max Qualification"
              sx={{
                width: "100%",
                background: " rgba(27, 27, 27, 0.05)",
                borderRadius: "5px",
              }}
              name="qualification"
              onChange={formik.handleChange}
              value={formik.values.qualification}
              onBlur={formik.handleBlur}
              error={
                formik.touched.qualification &&
                Boolean(formik.errors.qualification)
              }
              helperText={
                formik.touched.qualification && formik.errors.qualification
              }
            />
            <br />
            <br />
            <TextField
              id=""
              type="file"
              placeholder="resume"
              sx={{
                width: "100%",
                background: " rgba(27, 27, 27, 0.05)",
                borderRadius: "5px",
              }}
              name="file"
              onChange={(e) => {
                formik.handleChange(e);
                setFile(e.target.files[0]);
              }}
              value={formik.values.file}
            />
            <small style={{ color: "#fff" }}>Resume</small>
            <br />
            <br />

            {isError && (
              <Alert severity="error">
                Something went wrong please try again later
              </Alert>
            )}
            {isSuccess && (
              <Alert severity="success">Successfully Registered</Alert>
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
RegisterForm.propTypes = {
  registerHr: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { registerHr })(RegisterForm);
