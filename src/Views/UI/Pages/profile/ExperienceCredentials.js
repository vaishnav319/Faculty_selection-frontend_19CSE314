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
import {
  getCurrentHRProfile,
  deleteExperienceForm,
} from "../../../../Application/Actions/hrprofile.action";
const ExperienceCredentials = ({
  deleteExperienceForm,
  experience,
  hrProfile: { hrprofile },
}) => {
  let navigate = useNavigate();
  const [exp, setExp] = useState();
  useEffect(() => {
    getCurrentHRProfile();
    setExp(hrprofile[0].experience);
  }, [getCurrentHRProfile]);
  console.log(experience);
  console.log(exp);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Position</TableCell>
              <TableCell align="right">WorkPlace</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">Work Time</TableCell>
              <TableCell align="right">Subject</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exp &&
              exp.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.position}
                  </TableCell>
                  <TableCell align="right">{row.workPlace}</TableCell>
                  <TableCell align="right">{row.location}</TableCell>
                  <TableCell align="right">
                    <Date date={row.from} /> to{" "}
                    {row.to === null ? (
                      "Now"
                    ) : (
                      <div>
                        <Date date={row.to} />
                      </div>
                    )}
                  </TableCell>
                  <TableCell align="right">{row.subject}</TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                  <TableCell align="right">
                    <Button
                      sx={{ color: "red" }}
                      onClick={() => deleteExperienceForm(row._id, navigate)}
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
ExperienceCredentials.propTypes = {
  getCurrentHRProfile: PropTypes.func.isRequired,
  deleteExperienceForm: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  hrProfile: state.hrProfile,
});

export default connect(mapStateToProps, {
  getCurrentHRProfile,
  deleteExperienceForm,
})(ExperienceCredentials);
