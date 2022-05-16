import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import Date from "../../../../Application/Utils/Date";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

// import { deleteUserExperienceForm } from "../../../../Application/Actions/profile.action";
import { getPendingHrs } from "../../../../Application/Actions/data.action";
const HrTable = ({ getPendingHrs, data: { PendingHrs } }) => {
  let navigate = useNavigate();
  const [hrData, setHrData] = useState();
  useEffect(() => {
    getPendingHrs();
    setHrData(PendingHrs);
  }, [getPendingHrs]);
  console.log(hrData);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User Email</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">Remove Pending Hr</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hrData &&
              hrData.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.userEmail}</TableCell>
                  <TableCell align="right">{row.phoneNumber}</TableCell>
                  <TableCell align="right">
                    <Button
                      sx={{ color: "red" }}
                      //</TableCell>onClick={() =>
                      //deleteUserExperienceForm(row._id, navigate)
                      //}
                    >
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
HrTable.propTypes = {
  getPendingHrs: PropTypes.func.isRequired,
  //deleteUserExperienceForm: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, {
  getPendingHrs,
  //deleteUserExperienceForm,
})(HrTable);
