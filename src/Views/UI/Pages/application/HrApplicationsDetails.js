import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TextField,
  TableHead,
  TableRow,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import * as Yup from "yup";
import { useFormik } from "formik";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  getApplicationByID,
  getAppliedUsersApplications,
  updateApplicationStatus,
  sendResultstoAdmin,
} from "../../../../Application/Actions/application.action";
import Date from "../../../../Application/Utils/Date";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
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
const HrApplicationDetails = ({
  getApplicationByID,
  getAppliedUsersApplications,
  updateApplicationStatus,
  sendResultstoAdmin,
  application: { application, appliedUsers },
}) => {
  let { id } = useParams();
  console.log(id);
  const [appId, setAppId] = useState();
  const [applicationData, setApplicationData] = useState();
  const [stat, setStat] = useState(true);
  useEffect(() => {
    getApplicationByID(id);
    getAppliedUsersApplications(id);
  }, [getApplicationByID]);
  console.log(application);
  const formik = useFormik({
    initialValues: {
      currentNumber: "",
      status: "",
    },
    validationSchema: Yup.object({
      currentNumber: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      status: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values, appId);
      updateApplicationStatus(values, appId);
      // userInfo.role === "HR"
      //   ? updateHRProfile(values, navigate, from)
      //   : updateProfile(values, navigate, from);
      // resetForm({});
    },
  });
  const selectedUsers =
    appliedUsers && appliedUsers.filter((x) => x.status == "selected");
  console.log(selectedUsers);
  let message = `These are selected candidates for the application id :${application._id} , users :`;
  let ids = [];
  ids = selectedUsers.map((x) => message + x.userId + ",");

  console.log(ids[0]);
  return (
    <div>
      <Box
        sx={{
          margin: "50px 0",
          background: "#FFD223",
          height: "auto",
          padding: "80px 0",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          className="container"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <div>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "48px",
                lineHeight: "75px",
                color: "#FFFFFF",
              }}
            >
              {application?.jobPosition}
            </Typography>
            <br />
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "28px",
                color: " #FFFFFF",
              }}
            >
              Full-time
            </Typography>
            <br />
            <Link
              to={`/update/application/${application?._id}`}
              style={{ textDecoration: "none" }}
            >
              <Button
                size="large"
                variant="contained"
                sx={{
                  borderRadius: "94px",
                  background: "#fff",
                  color: "#FFD223",
                  "&:hover": { background: "#fff", color: "#001537" },
                }}
              >
                Want to Update/Edit Job Application ?
              </Button>
            </Link>
          </div>
        </Box>
      </Box>

      <Box
        className="container"
        sx={{ margin: { md: "100px auto", xs: "50px auto" } }}
      >
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "31px",
            lineHeight: "37px",
            color: "#1B1B1B",
          }}
        >
          Job Details:
        </Typography>
        <br />
        <br />
        <Typography
          gutterBottom
          sx={{
            fontWeight: "normal",
            fontSize: "20px",
            lineHeight: "28px",
            color: "#1b1b1b",
          }}
        >
          Posted On:&nbsp;
          <span
            style={{
              color: "rgba(27, 27, 27, 0.6)",
            }}
          >
            <Date date={application?.postedOn} />
          </span>
        </Typography>
        <Typography
          gutterBottom
          sx={{
            fontWeight: "normal",
            fontSize: "20px",
            lineHeight: "28px",
            color: "red",
          }}
        >
          Expires On:&nbsp;
          <span
            style={{
              color: "red",
            }}
          >
            <Date date={application?.endsOn} />
          </span>
        </Typography>
        <br />
        <br />

        <Typography
          gutterBottom
          sx={{
            fontWeight: "normal",
            fontSize: "20px",
            lineHeight: "28px",
            color: "#1b1b1b",
          }}
        >
          Job Requirements:&nbsp;
          <span
            style={{
              color: "rgba(27, 27, 27, 0.6)",
            }}
          >
            {application?.requirements?.join(",")}
          </span>
        </Typography>
        <Typography
          gutterBottom
          sx={{
            fontWeight: "normal",
            fontSize: "20px",
            lineHeight: "28px",
            color: "#1b1b1b",
          }}
        >
          Salary Range:&nbsp;
          <span
            style={{
              color: "rgba(27, 27, 27, 0.6)",
            }}
          >
            {application?.minRange} - {application?.maxRange}
          </span>
        </Typography>
        <Typography
          gutterBottom
          sx={{
            fontWeight: "normal",
            fontSize: "20px",
            lineHeight: "28px",
            color: "#1b1b1b",
          }}
        >
          Description:&nbsp;
          <span
            style={{
              color: "rgba(27, 27, 27, 0.6)",
            }}
          >
            {application?.description}
          </span>
        </Typography>
        <Typography
          gutterBottom
          sx={{
            fontWeight: "normal",
            fontSize: "20px",
            lineHeight: "28px",
            color: "#1b1b1b",
          }}
        >
          Number Of Vacancies:&nbsp;
          <span
            style={{
              color: "rgba(27, 27, 27, 0.6)",
            }}
          >
            {application?.numberOfVacancies}
          </span>
        </Typography>
        <br />
        <Typography
          gutterBottom
          sx={{
            fontWeight: "normal",
            fontSize: "20px",
            lineHeight: "28px",
            color: "#1b1b1b",
          }}
        >
          Preferred Skills:&nbsp;
          <span
            style={{
              color: "rgba(27, 27, 27, 0.6)",
            }}
          >
            {application?.preferredSkills}
          </span>
        </Typography>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "31px",
            lineHeight: "37px",
            color: "#1B1B1B",
          }}
        >
          Responsibilities:
          <Typography
            gutterBottom
            sx={{
              fontWeight: "normal",
              fontSize: "20px",
              lineHeight: "28px",
              color: "rgba(27, 27, 27, 0.6)",
            }}
          >
            <ul>
              <li>
                Select appropriate instructional methods, define time frames,
                prepare training materials in engaging digital formats,
                coordinate its implementation, and assess the effectiveness
              </li>
              <li>
                Conducting research and collaborating with educators, subject
                experts, and other professionals to develop quality curricula
                and learning resources.
              </li>
              <li>
                Establishing feasible timeframes to achieve the goals and
                objectives outlined in the curriculum.
              </li>
              <li>
                Creating stimulating lesson plans and recommending interesting
                additional resources.
              </li>
              <li>
                Developing a range of digital resources to optimize classroom
                learning and ensure ongoing learning outside of formal settings.
              </li>
              <li>
                Creating supplementary teacher and student guides, as well as
                resource packs. Collecting feedback from students, teachers, and
                clients.
              </li>
              <li>
                Monitoring student progress and making relevant changes to
                curriculums.
              </li>
              <li>
                Collaborating with other writers, graphic designers, and web
                designers to create new learning resources.
              </li>
              <li>
                Setting up formal and informal assessments to gauge the
                effectiveness of curriculums.
              </li>
            </ul>
          </Typography>
        </Typography>
      </Box>
      <Box
        className="container"
        sx={{ margin: { md: "100px auto", xs: "50px auto" } }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Sl No</StyledTableCell>
                <StyledTableCell>User Application ID</StyledTableCell>
                <StyledTableCell align="right">Applied Date</StyledTableCell>
                <StyledTableCell align="right">
                  Question 1 {/* {application && application?.questions} */}
                </StyledTableCell>
                <StyledTableCell align="right">
                  Question 2{/* {application && application?.questions} */}
                </StyledTableCell>
                <StyledTableCell align="center">
                  Current Round & Status
                </StyledTableCell>
                <StyledTableCell align="center">Update</StyledTableCell>
                <StyledTableCell align="right">
                  Update/Delete User's Application ?
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appliedUsers &&
                appliedUsers.map((form) => (
                  <StyledTableRow key={form._id}>
                    <StyledTableCell scope="form">{i}</StyledTableCell>
                    <StyledTableCell scope="right">{form._id}</StyledTableCell>
                    <StyledTableCell align="right">
                      <Date date={form.appliedDate} />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {form && form?.userAnswers[0].ans1}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {form && form?.userAnswers[0].ans2}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      Round: {form && form?.currentNumber}
                      <br />
                      Status:{form && form?.status}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <form onSubmit={formik.handleSubmit}>
                        Current Number:&nbsp;
                        <TextField
                          id=""
                          disabled={stat}
                          placeholder="Round"
                          sx={{
                            width: { md: "30%", xs: "30%" },
                            background: "#fff",
                            borderRadius: "5px",
                            mr: "15px",
                          }}
                          name="currentNumber"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.currentNumber}
                          error={
                            formik.touched.currentNumber &&
                            Boolean(formik.errors.currentNumber)
                          }
                          helperText={
                            formik.touched.currentNumber &&
                            formik.errors.currentNumber
                          }
                        />
                        <TextField
                          id=""
                          disabled={stat}
                          placeholder="Status"
                          sx={{
                            width: { md: "30%", xs: "30%" },
                            background: "#fff",
                            borderRadius: "5px",
                          }}
                          name="status"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.status}
                          error={
                            formik.touched.status &&
                            Boolean(formik.errors.status)
                          }
                          helperText={
                            formik.touched.status && formik.errors.status
                          }
                        />
                        <Button
                          sx={{ color: "green" }}
                          type="submit"
                          onClick={() => {
                            setStat(true);
                            setAppId(form._id);
                            console.log("update");
                          }}
                        >
                          Confirm <DoneIcon />
                        </Button>
                      </form>
                    </StyledTableCell>

                    <StyledTableCell align="right">
                      {stat ? (
                        <Button
                          sx={{ color: "green" }}
                          onClick={() => setStat(false)}
                        >
                          Edit <EditIcon />
                        </Button>
                      ) : (
                        <Button
                          sx={{ color: "green" }}
                          type="submit"
                          onClick={() => {
                            setStat(true);
                            console.log("update");
                          }}
                        >
                          Confirm <DoneIcon />
                        </Button>
                      )}

                      <Button
                        sx={{ color: "red" }}
                        // onClick={() => deleteApplicationForm(form._id)}
                      >
                        Delete <DeleteIcon />
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box
        className="container"
        sx={{ margin: { md: "100px auto", xs: "50px auto" } }}
      >
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "31px",
            lineHeight: "37px",
            color: "#1B1B1B",
            mb: "20px",
          }}
        >
          Selected Applicants{" "}
          <Button
            sx={{ m: 5 }}
            variant="contained"
            color="success"
            onClick={() => sendResultstoAdmin(ids[0])}
          >
            Send Selected Candidates to Admin
          </Button>
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Sl No</StyledTableCell>
                <StyledTableCell>User Application ID</StyledTableCell>
                <StyledTableCell align="right">Applied Date</StyledTableCell>

                <StyledTableCell align="center">
                  Current Round & Status
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedUsers &&
                selectedUsers.map((form) => (
                  <StyledTableRow key={form._id}>
                    <StyledTableCell scope="form">{i}</StyledTableCell>
                    <StyledTableCell scope="right">{form._id}</StyledTableCell>
                    <StyledTableCell align="right">
                      <Date date={form.appliedDate} />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      Round: {form && form?.currentNumber}
                      <br />
                      Status:{form && form?.status}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

HrApplicationDetails.propTypes = {
  getAllApplicationByID: PropTypes.func.isRequired,
  getAppliedUsersApplications: PropTypes.func.isRequired,
  updateApplicationStatus: PropTypes.func.isRequired,
  sendResultstoAdmin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  application: state.application,
});

export default connect(mapStateToProps, {
  getApplicationByID,
  getAppliedUsersApplications,
  updateApplicationStatus,
  sendResultstoAdmin,
})(HrApplicationDetails);
