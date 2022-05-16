import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getForms,
  deleteContactForm,
} from "../../../../Application/Actions/contact.action";
import DeleteIcon from "@mui/icons-material/Delete";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#FFD223",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
let i = 1;

const ContactList = ({
  getForms,
  deleteContactForm,
  contact: { isLoading, isError, isSuccess },
  contactForms,
}) => {
  const [forms, setForms] = useState();
  if (contactForms && forms == "") {
    console.log(contactForms);
    setForms(contactForms);
  }
  useEffect(() => {
    getForms();
  }, [getForms]);
  return (
    <>
      <Box
        className="container"
        sx={{ margin: { md: "100px auto", xs: "50px auto" } }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Sl No</StyledTableCell>
                <StyledTableCell align="right">First Name</StyledTableCell>
                <StyledTableCell align="right">Last Name</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">Phone Number</StyledTableCell>
                <StyledTableCell align="right">Message</StyledTableCell>
                <StyledTableCell align="right">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contactForms &&
                contactForms.map((form) => (
                  <StyledTableRow key={form._id}>
                    <StyledTableCell scope="form">{i}</StyledTableCell>
                    <StyledTableCell scope="right">
                      {form.firstName}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {form.lastName}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {form.email}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {form.phoneNumber}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {form.message}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Button
                        sx={{ color: "red" }}
                        onClick={() => deleteContactForm(form._id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

ContactList.propTypes = {
  getForms: PropTypes.func.isRequired,
  deleteContactForm: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  contact: state.contact,
});

export default connect(mapStateToProps, { getForms, deleteContactForm })(
  ContactList
);
