import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const DisplayProfile = ({ profile }) => {
  return (
    <div>
      {profile && (
        <div style={{ margin: "200px 0", textAlign: "center" }}>
          <h1 style={{ color: "yellow" }}>Profile Page</h1>
          <Link to="/dashboard">Back to dashboard</Link>
        </div>
      )}
    </div>
  );
};
DisplayProfile.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps)(DisplayProfile);
