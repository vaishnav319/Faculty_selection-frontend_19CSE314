import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const PrivateRoute = ({
  auth: { isAuthenticated, userInfo, role },
  allowedRoles,
}) => {
  console.log(allowedRoles);
  console.log(role);
  console.log(allowedRoles.find((rl) => rl == role));
  return allowedRoles.find((rl) => String(rl) === String(role)) ? (
    <Outlet />
  ) : isAuthenticated ? (
    <Navigate to="/unauthorized" />
  ) : (
    <Navigate to="/login" />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
