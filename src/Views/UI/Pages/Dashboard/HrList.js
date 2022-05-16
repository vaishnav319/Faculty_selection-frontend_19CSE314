import React, { useEffect } from "react";
import HrTable from "./HrTable";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Container, Typography, Box, Button, TextField } from "@mui/material";
import { addHrByAdmin } from "../../../../Application/Actions/data.action";
import { getNotifications } from "../../../../Application/Actions/auth.actions";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import HrPendingTable from "./HrPendingTable";
import Notification from "./Notification";
const HrList = ({ addHrByAdmin, getNotifications, auth: { userInfo } }) => {
  useEffect(() => {
    getNotifications();
  }, []);
  const formik = useFormik({
    initialValues: {
      userEmail: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      userEmail: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      phoneNumber: Yup.string()
        .required("Number is required")
        .max(10, "Please enter a valid number")
        .min(10, "Please enter a valid number")
        .matches(/[3-9]\d\d/, "Must be a valid number"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      addHrByAdmin(values);
      //  console.log(userInfo.role);

      // userInfo.role === "HR"
      //   ? updateHRProfile(values, navigate, from)
      //   : updateProfile(values, navigate, from);
      resetForm({});
    },
  });
  return (
    <Box
      id="form"
      maxWidth="lg"
      sx={{ margin: { md: "100px auto", xs: "50px auto" } }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "black",
          fontSize: { md: "30px", xs: "20px" },
          fontWeight: "700",
          lineHeight: "73px",
          px: "1rem",
        }}
      >
        Admin ,You can add a new Hr here
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          sx={{ mb: "2rem" }}
        >
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
            error={formik.touched.userEmail && Boolean(formik.errors.userEmail)}
            helperText={formik.touched.userEmail && formik.errors.userEmail}
          />
          <TextField
            id=""
            type="text"
            placeholder="Enter HR Phone Number here"
            sx={{
              width: { md: "28%", xs: "100%" },
              background: "#fff",
              borderRadius: "5px",
            }}
            name="phoneNumber"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            onBlur={formik.handleBlur}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />

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
            Add a New HR
          </Button>
        </Box>
      </form>
      <Typography
        variant="h5"
        sx={{
          color: "black",
          fontSize: { md: "30px", xs: "20px" },
          fontWeight: "700",
          lineHeight: "73px",
          px: "1rem",
        }}
      >
        Pending HR's
      </Typography>
      <HrPendingTable />

      <Typography
        variant="h5"
        sx={{
          color: "black",
          fontSize: { md: "30px", xs: "20px" },
          fontWeight: "700",
          lineHeight: "73px",
          px: "1rem",
        }}
      >
        Added HR's
      </Typography>
      <HrTable />
      <Notification />
    </Box>
  );
};

HrList.propTypes = {
  addHrByAdmin: PropTypes.func.isRequired,
  getNotifications: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  data: state.data,
  auth: state.auth,
});

export default connect(mapStateToProps, { addHrByAdmin, getNotifications })(
  HrList
);
