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
import { deleteUserExperienceForm } from "../../../../Application/Actions/profile.action";
import { getCurrentProfile } from "../../../../Application/Actions/profile.action";
const UserExperienceCredentials = ({
  deleteUserExperienceForm,
  experience,
  profile: { profile },
}) => {
  let navigate = useNavigate();
  const [exp, setExp] = useState();
  useEffect(() => {
    getCurrentProfile();
    setExp(profile[0].experience);
  }, [getCurrentProfile]);
  console.log(experience);

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
            {experience &&
              experience.map((row) => (
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
                      onClick={() =>
                        deleteUserExperienceForm(row._id, navigate)
                      }
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
UserExperienceCredentials.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteUserExperienceForm: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  deleteUserExperienceForm,
})(UserExperienceCredentials);
