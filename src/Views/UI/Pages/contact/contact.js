import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  TextField,
  CircularProgress,
  Alert,
} from "@mui/material";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getForms } from "../../../../Application/Actions/contact.action";
import ContactList from "./ContactList";
const Contact = ({
  getForms,
  auth: { userInfo },
  contact: { isLoading, isError, isSuccess, contactForms },
}) => {
  const [forms, setForms] = useState();
  useEffect(() => {
    getForms();
    setForms(contactForms);
  }, [getForms]);
  return (
    <>
      <Box
        className="container"
        sx={{ margin: { md: "100px auto", xs: "50px auto" } }}
      >
        <Typography style={{ color: "#001537" }}>
          These are the Contact Forms Which are filled by Customers for
          contacting service
        </Typography>
        <ContactList contactForms={contactForms} />
      </Box>
      ;
    </>
  );
};

Contact.propTypes = {
  getForms: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  contact: state.contact,
  auth: state.auth,
});

export default connect(mapStateToProps, { getForms })(Contact);
