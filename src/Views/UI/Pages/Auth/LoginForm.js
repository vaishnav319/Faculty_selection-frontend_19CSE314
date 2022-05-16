import React from "react";
import {
  Typography,
  Box,
  Button,
  TextField,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import GoogleIcon from "@mui/icons-material/Google";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../../../Application/Actions/auth.actions";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { margin } from "@mui/system";

const LoginForm = ({
  login,
  auth: { isError, isLoading, isSuccess, isAuthenticated, userInfo },
}) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),

    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values);
      login(values);
      resetForm({});
    },
  });
  if (isAuthenticated && userInfo.role == "user") {
    return <Navigate to="/dashboard" />;
  }
  if (isAuthenticated && userInfo.role == "HR") {
    return <Navigate to="/hr/dashboard" />;
  }
  if (isAuthenticated && userInfo.role == "admin") {
    return <Navigate to="/admin/dashboard" />;
  }

  return (
    <div>
      <Box sx={{ mt: "6rem" }}>
        <Box
          style={{ backgroundColor: "#FFD223", borderRadius: "3rem" }}
          sx={{ py: "3rem", height: "100%", mx: "2rem" }}
        >
          <Typography
            textAlign="center"
            sx={{
              fontWeight: "bold",
              fontSize: { md: "28px", xs: "31px" },

              color: "#1B1B1B",
            }}
          >
            Log in to your Account
          </Typography>
          <Box
            style={{
              alignItems: "center",
            }}
          >
            <img
              src={require("../../../Assets/home/login.png")}
              alt="image_"
              style={{
                width: "50%",
                alignItems: "center",
                margin: "0 auto 0 22%",
              }}
            />
          </Box>
          <form onSubmit={formik.handleSubmit} style={{ textAlign: "center" }}>
            <TextField
              id=""
              placeholder="Email"
              sx={{
                width: { md: "70%", xs: "80%" },
                margin: "0 auto",
                background: "#fff",
                borderRadius: "5px",
              }}
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <br />
            <small style={{ color: "#001531" }}>
              {formik.touched.email && formik.errors.email ? (
                <small>{formik.errors.email}</small>
              ) : null}
            </small>
            <br />
            <TextField
              id=""
              type="password"
              placeholder="Enter Your Password"
              sx={{
                width: { md: "70%", xs: "80%" },
                margin: "0 auto",
                background: "#fff",
                borderRadius: "5px",
              }}
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <br />
            <br />
            {isError && (
              <Alert severity="error">
                Something went wrong please try again later
              </Alert>
            )}
            {isSuccess && (
              <Alert severity="success" sx={{ mx: 4 }}>
                Logged in Successfully
              </Alert>
            )}
            <Link
              to={`/forgotpassword`}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              Forgot Password ?
            </Link>
            <br />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                padding: "12px 50px",
                width: { md: "50%", xs: "40%" },
                backgroundgColor: "#001531",
              }}
            >
              {isLoading ? (
                <CircularProgress sx={{ color: "#fff" }} />
              ) : (
                "Log in"
              )}
            </Button>
          </form>
        </Box>
        <Box sx={{ ml: "15%", my: "1.5rem" }}>
          <Button variant="outlined" color="primary" sx={{ width: "80%" }}>
            <GoogleIcon sx={{ mr: "1rem" }} /> Continue with Google
          </Button>
        </Box>
      </Box>
    </div>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login })(LoginForm);
