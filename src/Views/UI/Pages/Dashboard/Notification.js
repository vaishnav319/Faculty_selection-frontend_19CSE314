import React, { useEffect } from "react";
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
import { getNotifications } from "../../../../Application/Actions/auth.actions";

import * as Yup from "yup";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Notification = ({
  getNotifications,
  auth: {
    isError,
    isLoading,
    isSuccess,
    isAuthenticated,
    userInfo,
    notifications,
    otpverifysuccess,
    otpverifyfail,
  },
}) => {
  useEffect(() => {
    getNotifications();
  }, []);
  console.log(notifications);

  return (
    <>
      <Container
        sx={{
          //   margin: { md: "100px auto", xs: "70px auto" },
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
          Notifications
        </Typography>
        <br />

        <br />
        <Box>
          <Box
            display="flex"
            justifyContent="center"
            gap="20px"
            flexWrap="wrap"
          >
            {notifications &&
              notifications.map((item, i) => (
                <Box style={{ backgroundColor: "grey" }}>
                  <Box
                    sx={{
                      width: { md: "300px", xs: "100%" },
                      height: { md: "330px", xs: "auto" },
                      background: "rgba(27, 27, 27, 0.02)",
                      borderRadius: "10px",
                      position: "relative",
                    }}
                  >
                    <Box padding="40px">
                      {/* <Box sx={{ border: '1px solid red' }}> */}

                      <Typography
                        sx={{
                          fontWeight: "normal",
                          fontSize: "16px",
                          lineHeight: "28px",
                          color: "white",
                          // textAlign: 'justify'
                        }}
                      >
                        Notification ID:{item._id}
                      </Typography>

                      <br />
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "15px",
                          lineHeight: "28px",
                          color: "rgba(27, 27, 27, 0.6)",
                        }}
                      >
                        Description
                      </Typography>

                      <Typography
                        sx={{
                          fontWeight: "normal",
                          fontSize: "16px",
                          lineHeight: "28px",
                          color: "#FFD223",
                        }}
                      >
                        {item.message}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};
Notification.propTypes = {
  getNotifications: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { getNotifications })(Notification);
