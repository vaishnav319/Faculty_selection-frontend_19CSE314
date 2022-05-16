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
import { GreyDotsLeft } from "../../Commons/GreyDots";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as Yup from "yup";
import { addNewEducation } from "../../../../Application/Actions/profile.action";
const AddEducation = ({
  addNewEducation,
  application: { isError, isLoading, isSuccess },
  auth: { role },
}) => {
  const [toDateDisabled, toggleDisabled] = useState(false);
  const formik = useFormik({
    initialValues: {
      institutionName: "",
      percentage: "",
      fieldofstudy: "",
      from: "",
      to: "",
      description: "",
    },
    institutionName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    percentage: Yup.string()
      .required("Number is required")
      .matches("/^[0-9]$/", "Enter only integers"),
    fieldofstudy: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    from: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    to: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    description: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      addNewEducation(values, role);
      // resetForm({});
    },
  });
  return (
    <>
      <Box
        id="form"
        maxWidth="lg"
        sx={{ margin: { md: "100px auto", xs: "50px auto" } }}
      >
        <Box
          sx={{
            background: "#001531",
            borderRadius: "20px",
            padding: { md: "50px", xs: "20px" },
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "31px",
              lineHeight: "37px",
              color: "#fff",
            }}
          >
            Add Education
          </Typography>
          <br />
          <br />
          <form onSubmit={formik.handleSubmit}>
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
              <TextField
                id=""
                type="text"
                placeholder="Enter Your Institution name"
                sx={{
                  width: { md: "48%", xs: "100%" },
                  background: "#fff",
                  borderRadius: "5px",
                  marginBottom: { md: "0", xs: "20px" },
                }}
                name="institutionName"
                onChange={formik.handleChange}
                value={formik.values.institutionName}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.institutionName &&
                  Boolean(formik.errors.institutionName)
                }
                helperText={
                  formik.touched.institutionName &&
                  formik.errors.institutionName
                }
              />
              <TextField
                id=""
                type="text"
                placeholder="Enter your Percentage here"
                sx={{
                  width: { md: "48%", xs: "100%" },
                  background: "#fff",
                  borderRadius: "5px",
                }}
                name="percentage"
                onChange={formik.handleChange}
                value={formik.values.percentage}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.percentage && Boolean(formik.errors.percentage)
                }
                helperText={
                  formik.touched.percentage && formik.errors.percentage
                }
              />
            </Box>
            <br />
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
              <TextField
                id=""
                type="text"
                placeholder="Enter the field of study "
                sx={{
                  width: { md: "48%", xs: "100%" },
                  background: "#fff",
                  borderRadius: "5px",
                  marginBottom: { md: "0", xs: "20px" },
                }}
                name="fieldofstudy"
                onChange={formik.handleChange}
                value={formik.values.fieldofstudy}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.fieldofstudy &&
                  Boolean(formik.errors.fieldofstudy)
                }
                helperText={
                  formik.touched.fieldofstudy && formik.errors.fieldofstudy
                }
              />
            </Box>
            <br />
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
              <TextField
                id=""
                type="date"
                placeholder="From Date"
                sx={{
                  width: { md: "48%", xs: "100%" },
                  background: "#fff",
                  borderRadius: "5px",
                  marginBottom: { md: "0", xs: "20px" },
                }}
                name="from"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.from}
                error={formik.touched.from && Boolean(formik.errors.from)}
                helperText={formik.touched.from && formik.errors.from}
              />
              <TextField
                id=""
                type="date"
                placeholder="To Time"
                sx={{
                  width: { md: "48%", xs: "100%" },
                  background: "#fff",
                  borderRadius: "5px",
                  marginBottom: { md: "0", xs: "20px" },
                }}
                name="to"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.to}
                error={formik.touched.to && Boolean(formik.errors.to)}
                helperText={formik.touched.to && formik.errors.to}
              />
            </Box>
            <GreyDotsLeft />
            <br />

            <TextField
              id=""
              type="text"
              placeholder="Enter you job Description here...."
              multiline
              rows={6}
              sx={{
                width: { md: "100%", xs: "90%" },
                margin: "0 auto",
                background: "#fff",
                borderRadius: "5px",
              }}
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
            <br />
            <br />
            {isError && (
              <Alert severity="error">
                Something went wrong please try again later
              </Alert>
            )}
            {isSuccess && (
              <Alert severity="success">New Education created.</Alert>
            )}
            <br />
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="primary"
              sx={{ padding: "12px 50px", width: "100%" }}
            >
              {isLoading ? (
                <CircularProgress sx={{ color: "#fff" }} />
              ) : (
                "Submit"
              )}
              {/* Submit */}
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

AddEducation.propTypes = {
  addNewEducation: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  application: state.application,
  auth: state.auth,
});

export default connect(mapStateToProps, { addNewEducation })(AddEducation);
