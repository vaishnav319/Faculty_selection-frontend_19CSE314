import React, { useState, useEffect } from "react";
import { Typography, Box, Button } from "@mui/material";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  getApplicationByID,
  getCurrentUsersApplications,
} from "../../../../Application/Actions/application.action";
import Date from "../../../../Application/Utils/Date";
const JobDetail = ({
  getApplicationByID,
  getCurrentUsersApplications,
  application: { application, userApplications },
}) => {
  const [applied, setApplied] = useState();

  console.log(applied);
  let { id } = useParams();
  console.log(id);
  const [applicationData, setApplicationData] = useState();
  useEffect(() => {
    getApplicationByID(id);
    getCurrentUsersApplications();
    setApplicationData(application);
  }, [getApplicationByID]);
  console.log(application);

  let matched = userApplications?.filter(
    (app) => app.applicationId === application?._id
  );
  console.log(matched);

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
            {matched[0] !== null ? (
              <Link
                to={`/apply/${application?._id}`}
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
                  Apply Now
                </Button>
                )
              </Link>
            ) : (
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "28px",
                  color: " #FFFFFF",
                }}
              >
                Already Applied
              </Typography>
            )}
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

        <Typography
          gutterBottom
          sx={{
            fontWeight: "normal",
            fontSize: "20px",
            lineHeight: "28px",
            color: "#1b1b1b",
          }}
        >
          Want to Apply ? Click on Apply Now..
          {!matched ? (
            <Link
              to={`/apply/${application?._id}`}
              style={{ textDecoration: "none" }}
            >
              <Button
                size="large"
                variant="contained"
                sx={{
                  borderRadius: "94px",
                  background: "#FFD223",
                  color: "#FFD223",
                  "&:hover": { background: "#FFD223", color: "#001537" },
                }}
              >
                Apply Now
              </Button>
              )
            </Link>
          ) : (
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "30px",
                lineHeight: "28px",
                color: " #FFD223",
              }}
            >
              Already Applied to this application
            </Typography>
          )}
        </Typography>
      </Box>
    </div>
  );
};

JobDetail.propTypes = {
  getAllApplicationByID: PropTypes.func.isRequired,
  getCurrentUsersApplications: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  application: state.application,
});

export default connect(mapStateToProps, {
  getApplicationByID,
  getCurrentUsersApplications,
})(JobDetail);
