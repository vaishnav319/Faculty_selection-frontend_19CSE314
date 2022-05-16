import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Fade } from "react-reveal";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <Fade left>
      <div
        key={alert.id}
        style={{
          position: "absolute",
          zIndex: "100",
          marginTop: "3rem",
          padding: "1.8rem",
          margin: "1rem 0",
          opacity: 0.4,
          backgroundColor: "#77D970",
        }}
      >
        {alert.msg} <DoneOutlineIcon sx={{ ml: "10px" }} />
      </div>
    </Fade>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
