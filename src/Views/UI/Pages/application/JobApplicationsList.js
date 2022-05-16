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
  getCurrentUsersApplications,
  deleteApplicationForm,
} from "../../../../Application/Actions/application.action";
import DeleteIcon from "@mui/icons-material/Delete";
import Date from "../../../../Application/Utils/Date";
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

const JobApplicationsList = ({
  getCurrentUsersApplications,
  deleteApplicationForm,
  userApplications,
}) => {
  console.log(userApplications);
  const [applications, setApplications] = useState();
  if (userApplications && applications == "") {
    console.log(applications);
    setApplications(applications);
  }
  useEffect(() => {
    getCurrentUsersApplications();
  }, [getCurrentUsersApplications]);
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
                <StyledTableCell>Your Application ID</StyledTableCell>
                <StyledTableCell align="right">Applied Date</StyledTableCell>
                <StyledTableCell align="right">Current Round</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">
                  Withdraw Application ?
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userApplications &&
                userApplications.map((form) => (
                  <StyledTableRow key={form._id}>
                    <StyledTableCell scope="form">{i}</StyledTableCell>
                    <StyledTableCell scope="right">{form._id}</StyledTableCell>
                    <StyledTableCell align="right">
                      <Date date={form.appliedDate} />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {form.currentNumber}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {form.status}
                    </StyledTableCell>

                    <StyledTableCell align="right">
                      <Button
                        sx={{ color: "red" }}
                        onClick={() => deleteApplicationForm(form._id)}
                      >
                        Click Here <DeleteIcon />
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

JobApplicationsList.propTypes = {
  getCurrentUsersApplications: PropTypes.func.isRequired,
  deleteApplicationForm: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  application: state.application,
});

export default connect(mapStateToProps, {
  getCurrentUsersApplications,
  deleteApplicationForm,
})(JobApplicationsList);
