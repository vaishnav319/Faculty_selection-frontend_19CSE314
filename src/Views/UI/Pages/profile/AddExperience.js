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
import { addNewExperience } from "../../../../Application/Actions/hrprofile.action";
const AddExperience = ({
  addNewExperience,
  application: { isError, isLoading, isSuccess },
  auth: { role },
}) => {
  const [toDateDisabled, toggleDisabled] = useState(false);
  const formik = useFormik({
    initialValues: {
      position: "",
      workPlace: "",
      location: "",
      from: "",
      to: "",
      subject: "",
      description: "",
    },

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      addNewExperience(values, role);
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
            Add Experience
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
                name="position"
                onChange={formik.handleChange}
                value={formik.values.position}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.position && Boolean(formik.errors.position)
                }
                helperText={formik.touched.position && formik.errors.position}
              />
              <TextField
                id=""
                type="text"
                placeholder="Enter your Work Place here"
                sx={{
                  width: { md: "48%", xs: "100%" },
                  background: "#fff",
                  borderRadius: "5px",
                }}
                name="workPlace"
                onChange={formik.handleChange}
                value={formik.values.workPlace}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.workPlace && Boolean(formik.errors.workPlace)
                }
                helperText={formik.touched.workPlace && formik.errors.workPlace}
              />
            </Box>
            <br />
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
              <TextField
                id=""
                type="text"
                placeholder="Enter the location of your work place"
                sx={{
                  width: { md: "48%", xs: "100%" },
                  background: "#fff",
                  borderRadius: "5px",
                  marginBottom: { md: "0", xs: "20px" },
                }}
                name="location"
                onChange={formik.handleChange}
                value={formik.values.location}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.location && Boolean(formik.errors.location)
                }
                helperText={formik.touched.location && formik.errors.location}
              />

              <TextField
                id=""
                placeholder="Subject"
                sx={{
                  width: { md: "48%", xs: "100%" },
                  background: "#fff",
                  borderRadius: "5px",
                }}
                name="subject"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
                error={formik.touched.subject && Boolean(formik.errors.subject)}
                helperText={formik.touched.subject && formik.errors.subject}
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
              <Alert severity="success">New Job Post created.</Alert>
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

AddExperience.propTypes = {
  addNewExperience: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  application: state.application,
  auth: state.auth,
});

export default connect(mapStateToProps, { addNewExperience })(AddExperience);
