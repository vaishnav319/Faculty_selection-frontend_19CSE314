import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  boxex: {
    width: "50px",
    height: "50vh",
    background: "red",
    // "&:hover": {
    // },
    // [theme.breakpoints.down(500)]: {
    // },
  },
  home_img: {
    // marginLeft: '-150px',
    // [theme.breakpoints.down(1300)]: {
    //     marginLeft: '0'
    // },
    position: "absolute",
    right: "13rem",

    top: "14rem",
    [theme.breakpoints.down(1290)]: {
      right: "5rem",
    },
    [theme.breakpoints.down(1100)]: {
      right: "2rem",
    },
    [theme.breakpoints.down(965)]: {
      position: "static",
      bottom: "0",
    },
  },
  listContainer: {
    borderBottom: "2px solid #FA4A5F",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    margin: "15px 0",
    cursor: "pointer",
    "&:hover": {
      transition: "0.5s",
      transform: "scale(1.1)",
    },
  },
  sqaureBox: {
    background: "#FA4A5F",
    color: "#fff",
    fontFamily: "Oxanium",
    padding: "10px 15px",
    borderRadius: "3px 3px  0 0 ",
  },
  listContainer_speak: {
    borderBottom: "2px solid #37B57E",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    margin: "15px 0",
    cursor: "pointer",
    "&:hover": {
      transition: "0.5s",
      transform: "scale(1.1)",
    },
  },
  sqaureBox_speak: {
    background: "#37B57E",
    color: "#fff",
    fontFamily: "Oxanium",
    padding: "10px 15px",
    borderRadius: "3px 3px  0 0 ",
  },
  listContainer_work: {
    borderBottom: "2px solid #227AEB",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    margin: "15px 0",
    cursor: "pointer",
    "&:hover": {
      transition: "0.5s",
      transform: "scale(1.1)",
    },
  },
  sqaureBox_work: {
    background: "#227AEB",
    color: "#fff",
    padding: "10px 15px",
    fontFamily: "Oxanium",
    borderRadius: "3px 3px  0 0 ",
  },
  wall_of_love: {
    // background:
    //     "linear-gradient(180deg, #FA4A5F 0%, #227AEB 47.4%, #37B57E 100%)",
    // opacity: 0.05,

    height: "auto",
    width: "95%",
    margin: "100px auto",
    padding: "10px 0",
    [theme.breakpoints.down(500)]: {
      width: "90%",
    },
  },
  // plan card
  PlanCard: {
    background: "#FFFFFF",
    boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.09)",
    borderRadius: "10px",
    padding: "30px",
    width: "340px",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0px 10px 24px rgba(#000)",
      transition: "1s",
      transform: "scale(1.1)",
    },
    [theme.breakpoints.down(1200)]: {
      margin: "20px 0",
      width: "300px",
    },
    [theme.breakpoints.down(700)]: {
      width: "100%",
    },
  },
  pricing_wrapper: {
    display: "flex",
    justifyContent: "space-evenly",
    gap: "20px",
    [theme.breakpoints.down(1100)]: {
      flexWrap: "wrap",
    },
  },
  capsule_btn: {
    background: "#FFFFFF",
    border: "1px solid #227AEB",
    boxSizing: "border-box",
    borderRadius: "37px",
    display: "flex",
    alignItems: "center",
  },
  capsule_btn_inner: {
    background: "#227AEB",
    border: "1px solid #227AEB",
    boxSizing: "border-box",
    borderRadius: "37px",
    padding: "10px 30px",
    color: "#fff",
  },
}));
