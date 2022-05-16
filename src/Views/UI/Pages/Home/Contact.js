import React from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  TextField,
  CircularProgress,
  Alert,
} from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

import { useFormik } from "formik";
import * as Yup from "yup";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addForm } from "../../../../Application/Actions/contact.action";
const Contact = ({ addForm, contact: { isLoading, isError, isSuccess } }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      phoneNumber: Yup.string()
        .required("Number is required")
        .max(10, "Please enter a valid number")
        .min(10, "Please enter a valid number")
        .matches(/[3-9]\d\d/, "Must be a valid number"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string(),
    }),

    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values);
      addForm(values);
      resetForm({});
    },
  });
  return (
    <>
      <Box
        className="container"
        sx={{
          margin: { md: "100px auto", xs: "20px auto" },
          background: "#FFFFFF",
          boxShadow: "0px 10px 44px rgba(0, 0, 0, 0.05)",
          borderRadius: "20px",
          padding: { md: "30px 20px", xs: "0" },
        }}
      >
        <Grid
          container
          spacing={0}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
        >
          <Grid item xl="6" md="6" xs="12">
            <Box
              sx={{
                width: { md: "90%", xs: "100%" },
                padding: { md: "30px", xs: "20px 5px" },
                background: "#001531",
                borderRadius: "20px",
              }}
            >
              <form
                onSubmit={formik.handleSubmit}
                style={{ textAlign: "center" }}
              >
                <TextField
                  id=""
                  type="text"
                  placeholder="First Name"
                  sx={{
                    width: { md: "100%", xs: "90%" },
                    margin: "0 auto",
                    background: "#fff",
                    borderRadius: "5px",
                  }}
                  name="firstName"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur}
                />
                <small style={{ color: "#fff" }}>
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <small>{formik.errors.firstName}</small>
                  ) : null}
                </small>
                <br />
                <br />
                <TextField
                  id=""
                  type="text"
                  placeholder="Last Name"
                  sx={{
                    width: { md: "100%", xs: "90%" },
                    margin: "0 auto",
                    background: "#fff",
                    borderRadius: "5px",
                  }}
                  name="lastName"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur}
                />
                <small style={{ color: "#fff" }}>
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <small>{formik.errors.lastName}</small>
                  ) : null}
                </small>
                <br />
                <br />
                <TextField
                  id=""
                  type="text"
                  placeholder="Phone"
                  sx={{
                    width: { md: "100%", xs: "90%" },
                    margin: "0 auto",
                    background: "#fff",
                    borderRadius: "5px",
                  }}
                  name="phoneNumber"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                  onBlur={formik.handleBlur}
                />
                <small style={{ color: "#fff" }}>
                  {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <small>{formik.errors.phoneNumber}</small>
                  ) : null}
                </small>
                <br />
                <br />
                <TextField
                  id=""
                  placeholder="Email"
                  sx={{
                    width: { md: "100%", xs: "90%" },
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
                <small style={{ color: "#fff" }}>
                  {formik.touched.email && formik.errors.email ? (
                    <small>{formik.errors.email}</small>
                  ) : null}
                </small>
                <br />
                <br />
                <TextField
                  id=""
                  type="text"
                  placeholder="Message..."
                  multiline
                  rows={8}
                  sx={{
                    width: { md: "100%", xs: "90%" },
                    margin: "0 auto",
                    background: "#fff",
                    borderRadius: "5px",
                  }}
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                />
                <br />
                <br />
                {isError && (
                  <Alert severity="error">
                    Something went wrong please try again later
                  </Alert>
                )}
                {isSuccess && (
                  <Alert severity="success">
                    Thank you for contacting us, our team will get back to you
                    soon.
                  </Alert>
                )}
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    padding: "12px 50px",
                    width: { md: "100%", xs: "90%" },
                    backgroundColor: "#FFDD23",
                  }}
                >
                  {isLoading ? (
                    <CircularProgress sx={{ color: "#fff" }} />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </form>
            </Box>
          </Grid>
          <Grid
            item
            xl="6"
            md="6"
            xs="12"
            sx={{
              marginTop: { md: "0", xs: "40px" },
              padding: { md: "50px", xs: "20px" },
              height: "auto",
            }}
          >
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: { md: "39px", xs: "25px" },
                lineHeight: "59px",
                color: " #000",
              }}
            >
              Contact Information
            </Typography>
            <br />
            <Box color="#000" display="flex" gap="20px" alignItems="center">
              <PhoneInTalkIcon />
              <a href="tel:0123456789" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: { md: "20px", xs: "16px" },
                    lineHeight: "59px",
                    color: " #000",
                  }}
                >
                  +91 9360871557
                </Typography>
              </a>
            </Box>
            <br />
            <Box color="#000" display="flex" gap="20px" alignItems="center">
              <MarkEmailReadIcon />
              <a
                href="mailto:Info@kapable.club"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: { md: "20px", xs: "16px" },
                    lineHeight: "59px",
                    color: " #000",
                  }}
                >
                  k.varadharajan2001@gmail.com
                </Typography>
              </a>
            </Box>
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://goo.gl/maps/aYQYEWQiZPmH19j49"
              style={{ textDecoration: "none" }}
            >
              <Box
                color="#000"
                display="flex"
                gap="20px"
                alignItems="flex-start"
              >
                <AddLocationAltIcon />
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: { md: "20px", xs: "16px" },
                    color: " #000",
                  }}
                >
                  Amrita University
                  <br />
                  Coimbatore
                  <br />
                </Typography>
              </Box>
            </a>
            <Box sx={{ marginTop: { md: "100px", xs: "10px" } }}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/kapable.club"
              >
                <img
                  src={require("../../../Assets/home/contact1.png")}
                  alt=""
                  style={{ width: "20%" }}
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/kapable.club/"
              >
                <img
                  src={require("../../../Assets/home/contact2.png")}
                  alt=""
                  style={{ width: "20%" }}
                  className="contact_social"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/26574261/admin/"
              >
                <img
                  src={require("../../../Assets/home/contact3.png")}
                  alt=""
                  style={{ width: "20%" }}
                  className="contact_social"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/c/kapableclub:"
              >
                <img
                  src={require("../../../Assets/home/contact4.png")}
                  alt=""
                  style={{ width: "20%" }}
                  className="contact_social"
                />
              </a>
            </Box>
            <br />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

Contact.propTypes = {
  addForm: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  contact: state.contact,
});

export default connect(mapStateToProps, { addForm })(Contact);
