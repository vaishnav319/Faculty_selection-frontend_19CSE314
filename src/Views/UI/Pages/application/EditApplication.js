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
import { useParams } from "react-router-dom";

import { updateApplication } from "../../../../Application/Actions/application.action";
const EditApplication = ({
  updateApplication,
  application: { isError, isLoading, isSuccess, application },
}) => {
  const { id } = useParams();
  console.log(id);
  const formik = useFormik({
    initialValues: {
      jobPosition: application?.jobPosition ? application?.jobPosition : "",
      requirements: application?.requirements ? application?.requirements : "",
      numberOfVacancies: application?.numberOfVacancies
        ? application?.numberOfVacancies
        : "",
      minRange: application?.minRange ? application?.minRange : "",
      maxRange: application?.maxRange ? application?.maxRange : "",
      preferredQualification: application?.preferredQualification
        ? application?.preferredQualification
        : "",
      endsOn: application?.endsOn ? application?.endsOn : "",
      description: application?.description ? application?.description : "",
      //   que1: application?.jobPosition ? application?.jobPosition : "",
      //   que2: application?.jobPosition ? application?.jobPosition : "",
      preferredSkills: application?.preferredSkills
        ? application?.preferredSkills
        : "",
    },
    jobPosition: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    requirements: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    numberOfVacancies: Yup.string()
      .required("Number is required")
      .matches("/^[0-9]$/", "Enter only integers"),
    minRange: Yup.string()
      .required("Number is required")
      .matches("/^[0-9]$/", "Enter only integers"),
    maxRange: Yup.string()
      .required("Number is required")
      .matches("/^[0-9]$/", "Enter only integers"),
    preferredQualification: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    endsOn: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),

    preferredSkills: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    onSubmit: (values, { resetForm }) => {
      console.log(values, id);
      updateApplication(values, id);
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
            Update Job Application
          </Typography>
          <br />
          <br />
          <form onSubmit={formik.handleSubmit}>
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
              <TextField
                id=""
                type="text"
                placeholder="Enter Job Positon name"
                sx={{
                  width: { md: "48%", xs: "100%" },
                  background: "#fff",
                  borderRadius: "5px",
                  marginBottom: { md: "0", xs: "20px" },
                }}
                name="jobPosition"
                onChange={formik.handleChange}
                value={formik.values.jobPosition}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.jobPosition &&
                  Boolean(formik.errors.jobPosition)
                }
                helperText={
                  formik.touched.jobPosition && formik.errors.jobPosition
                }
              />
              <TextField
                id=""
                type="text"
                placeholder="Enter Requirements here"
                sx={{
                  width: { md: "48%", xs: "100%" },
                  background: "#fff",
                  borderRadius: "5px",
                }}
                name="requirements"
                onChange={formik.handleChange}
                value={formik.values.requirements}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.requirements &&
                  Boolean(formik.errors.requirements)
                }
                helperText={
                  formik.touched.requirements && formik.errors.requirements
                }
              />
            </Box>
            <br />
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
              <TextField
                id=""
                type="text"
                placeholder="Number of Vacancies"
                sx={{
                  width: { md: "48%", xs: "100%" },
                  background: "#fff",
                  borderRadius: "5px",
                  marginBottom: { md: "0", xs: "20px" },
                }}
                name="numberOfVacancies"
                onChange={formik.handleChange}
                value={formik.values.numberOfVacancies}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.numberOfVacancies &&
                  Boolean(formik.errors.numberOfVacancies)
                }
                helperText={
                  formik.touched.numberOfVacancies &&
                  formik.errors.numberOfVacancies
                }
              />
              <TextField
                id=""
                placeholder="Preferred Skills"
                sx={{
                  width: { md: "48%", xs: "100%" },
                  background: "#fff",
                  borderRadius: "5px",
                }}
                name="preferredSkills"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.preferredSkills}
                error={
                  formik.touched.preferredSkills &&
                  Boolean(formik.errors.preferredSkills)
                }
                helperText={
                  formik.touched.preferredSkills &&
                  formik.errors.preferredSkills
                }
              />
            </Box>
            <br />
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
              <TextField
                id=""
                type="text"
                placeholder="Minimum Salary Range"
                sx={{
                  width: { md: "48%", xs: "100%" },
                  background: "#fff",
                  borderRadius: "5px",
                  marginBottom: { md: "0", xs: "20px" },
                }}
                name="minRange"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.minRange}
                error={
                  formik.touched.minRange && Boolean(formik.errors.minRange)
                }
                helperText={formik.touched.minRange && formik.errors.minRange}
              />
              <TextField
                id=""
                type="text"
                placeholder="Maximum Salary Range"
                sx={{
                  width: { md: "48%", xs: "100%" },
                  background: "#fff",
                  borderRadius: "5px",
                  marginBottom: { md: "0", xs: "20px" },
                }}
                name="maxRange"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.maxRange}
                error={
                  formik.touched.maxRange && Boolean(formik.errors.maxRange)
                }
                helperText={formik.touched.maxRange && formik.errors.maxRange}
              />
            </Box>
            <GreyDotsLeft />
            <br />
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
              <TextField
                id=""
                type="text"
                placeholder="Enter Deadline here"
                sx={{
                  width: { md: "48%", xs: "100%" },
                  background: "#fff",
                  borderRadius: "5px",
                }}
                name="endsOn"
                onChange={formik.handleChange}
                value={formik.values.endsOn}
                onBlur={formik.handleBlur}
                error={formik.touched.endsOn && Boolean(formik.errors.endsOn)}
                helperText={formik.touched.endsOn && formik.errors.endsOn}
              />
            </Box>
            <br />
            <TextField
              id=""
              type="text"
              placeholder="Enter Question 1 here"
              sx={{ width: "100%", background: "#fff", borderRadius: "5px" }}
              name="que1"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.que1}
              error={formik.touched.que1 && Boolean(formik.errors.que1)}
              helperText={formik.touched.que1 && formik.errors.que1}
            />
            <br />
            <br />
            <TextField
              id=""
              type="text"
              placeholder="Enter Question 2"
              sx={{ width: "100%", background: "#fff", borderRadius: "5px" }}
              name="que2"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.que2}
              error={formik.touched.que2 && Boolean(formik.errors.que2)}
              helperText={formik.touched.que2 && formik.errors.que2}
            />
            <br />
            <br />
            <br />
            <TextField
              id=""
              type="text"
              placeholder="Enter Description here...."
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
              <Alert severity="success">Application is Updated</Alert>
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
                "Update"
              )}
              {/* Submit */}
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

EditApplication.propTypes = {
  updateApplication: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  application: state.application,
});

export default connect(mapStateToProps, { updateApplication })(EditApplication);
