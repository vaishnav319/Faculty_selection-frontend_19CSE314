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
import { registerUser } from "../../../../Application/Actions/auth.actions";
import * as Yup from "yup";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import VerifyAdminPage from "./VerifyAdminPage";
import RegisterHr from "./RegisterHr";

const RegistrationPageHR = () => {
  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          margin: { md: "50px auto", xs: "70px auto" },
          textAlign: "center",
        }}
      >
        <br />

        <Box>
          <VerifyAdminPage />
        </Box>
        <Box>
          <RegisterHr />
        </Box>
      </Container>
    </>
  );
};
RegistrationPageHR.propTypes = {
  registerUser: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { registerUser })(RegistrationPageHR);
