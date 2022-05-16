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
import * as Yup from "yup";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { applyToApplication } from "../../../../Application/Actions/application.action";
const ApplicationForm = ({
  applyToApplication,
  application: { isError, isLoading, isSuccess, application, error },
}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(error);
  const formik = useFormik({
    initialValues: {
      message: "",
      ans1: "",
      ans2: "",
    },

    onSubmit: (values, { resetForm }) => {
      console.log(values, id);
      applyToApplication(values, id);
      navigate("/applications");
      // const formData = new FormData();
      // Object.keys(values).forEach((value) => {
      //     formData.append(value, values[value]);
      // });
      // formData.delete("file");
      // formData.append("file", file);
      // console.log(formData);
      resetForm({});
    },
  });
  isSuccess = false;
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
            Application Form
          </Typography>
          <br />
          <br />
          <form onSubmit={formik.handleSubmit}>
            <GreyDotsLeft />

            <div>
              <Typography
                sx={{
                  fontWeight: "200",
                  fontSize: "21px",
                  lineHeight: "37px",
                  color: "#fff",
                }}
              >
                {application?.questions[0].que1}
              </Typography>
              <TextField
                id=""
                type="text"
                placeholder="Enter your answer here..."
                multiline
                rows={8}
                sx={{
                  width: { md: "100%", xs: "90%" },
                  margin: "0 auto",
                  background: "#fff",
                  borderRadius: "5px",
                  my: "1rem",
                }}
                name="ans1"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.ans1}
              />
            </div>
            <div>
              <Typography
                sx={{
                  fontWeight: "200",
                  fontSize: "21px",
                  lineHeight: "37px",
                  color: "#fff",
                }}
              >
                {application?.questions[0].que2}
              </Typography>
              <TextField
                id=""
                type="text"
                placeholder="enter your answer here..."
                multiline
                rows={8}
                sx={{
                  width: { md: "100%", xs: "90%" },
                  margin: "0 auto",
                  background: "#fff",
                  borderRadius: "5px",
                  my: "1rem",
                }}
                name="ans2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.ans2}
              />
            </div>

            <br />

            <TextField
              id=""
              type="text"
              placeholder="Message..."
              multiline
              rows={4}
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

            {isError && <Alert severity="error">{error.message}</Alert>}
            {isSuccess && (
              <Alert severity="success">
                You have successfully applied to ${application?.jobPosition}
              </Alert>
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
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

ApplicationForm.propTypes = {
  applyToApplication: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  application: state.application,
});

export default connect(mapStateToProps, { applyToApplication })(
  ApplicationForm
);
