import * as React from "react";
import Button from "@mui/material/Button";
import { NavLink, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Drawer,
  useTheme,
  useMediaQuery,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../Application/Actions/auth.actions";
import Picture from "../../Application/Utils/Picture";
const useStyles = makeStyles((theme) => ({
  hamburger: {
    color: "white",
    marginLeft: "auto",
  },
  sidedrawer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    rowGap: "3rem",
    padding: "2rem",
    width: "70vw",
    height: "100vh",
    // background: "#F23A5E",
    position: "relative",
    // padding: "10px 0 0 3rem",
  },
  closeIcon: {
    width: "3rem",
    height: "3rem",
    marginLeft: "auto",
    position: "absolute",
    right: "1rem",
    top: "1rem",
    cursor: "pointer",
    color: "#f9ff00",
  },
  navLinks: {
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "22px",
    color: "white",
    cursor: "pointer",
    borderRadius: "10px",
    padding: "10px 20px",
    textAlign: "center",
    marginRight: "15px",
    "&:hover": {
      background: "rgba(34, 249, 255, 0.2)",
      transition: "1s",
    },
  },
  userName: {
    fontWeight: 700,
    fontSize: "20px",
    color: "white",
    cursor: "pointer",
    padding: "10px 20px",
  },
}));

const MenuLink = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/about-us",
    title: "About Us",
  },
  // {
  //     link: '/curriculum ',
  //     title: 'Curriculum '
  // },
  // {
  //     link: '/careers',
  //     title: 'Careers'
  // },
  // {
  //     link: '/blog',
  //     title: 'Blog'
  // },
  // {
  //     link: '/contact-us',
  //     title: 'Contact Us'
  // },
];
const guestLinks = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/about-us",
    title: "About Us",
  },
  {
    link: "/curriculum ",
    title: "Curriculum ",
  },
  {
    link: "/careers",
    title: "Careers",
  },
  {
    link: "/blog",
    title: "Blog",
  },
  {
    link: "/contact-us",
    title: "Contact Us",
  },
];

const userLinks = [
  {
    link: "/dashboard",
    title: "Dashboard",
  },
  {
    link: "/applications",
    title: "Open Jobs",
  },
  {
    link: "/my/applications",
    title: "My Applications ",
  },
  {
    link: "/user/profile",
    title: "Profile Page",
  },
];
const hrLinks = [
  {
    link: "/hr/dashboard",
    title: "Dashboard",
  },
  {
    link: "/hr/applications",
    title: "Open Jobs",
  },
  {
    link: "/list/forms",
    title: "Contact Forms",
  },
  {
    link: "/hr/profile/me",
    title: "Profile Page",
  },
];
const adminLinks = [
  {
    link: "/admin/dashboard",
    title: "Dashboard",
  },
  {
    link: "/admin/hrlist",
    title: "HR's",
  },
  {
    link: "/hr/applications",
    title: "Applications",
  },
  {
    link: "/list/forms",
    title: "Contact Forms",
  },
  {
    link: "/hr/profile/me",
    title: "Profile Page",
  },
  {
    link: "/notifications",
    title: "Notifications",
  },
];

const Header = ({ logout, auth: { isAuthenticated, userInfo }, profile }) => {
  const classes = useStyles();
  const theme = useTheme();
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  // const history = useHistory();
  const isMobile = useMediaQuery(theme.breakpoints.down(1300));

  const [open, setOpen] = useState(false);
  const handleDrawer = (bool) => () => {
    setOpen(bool);
  };

  return (
    <>
      <AppBar
        position="fixed"
        component="header"
        style={{
          padding: "10px",
          background: "#001531",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <img src={require("../Assets/home/bluelogo.png")} alt="logo" />
            </NavLink>
          </Box>

          {!isMobile && (
            <Toolbar>
              {!isAuthenticated &&
                guestLinks.map((item, _i) => (
                  <>
                    <NavLink
                      to={item.link}
                      className={classes.navLinks}
                      style={({ isActive }) => {
                        return {
                          textDecoration: "none",
                          borderRadius: "0",
                          color: isActive ? "#FFD223" : "",
                          borderBottom: isActive ? "2px solid #FFD223" : "",
                        };
                      }}
                    >
                      <Typography>
                        <b>{item.title}</b>
                      </Typography>
                    </NavLink>
                  </>
                ))}
              {isAuthenticated && userInfo.role == "user"
                ? userLinks.map((item, _i) => (
                    <>
                      <NavLink
                        to={item.link}
                        className={classes.navLinks}
                        style={({ isActive }) => {
                          return {
                            textDecoration: "none",
                            borderRadius: "0",
                            color: isActive ? "#FFD223" : "",
                            borderBottom: isActive ? "2px solid #FFD223" : "",
                          };
                        }}
                      >
                        <Typography>
                          <b>{item.title}</b>
                        </Typography>
                      </NavLink>
                    </>
                  ))
                : ""}

              {isAuthenticated && userInfo.role == "HR"
                ? hrLinks.map((item, _i) => (
                    <>
                      <NavLink
                        to={item.link}
                        className={classes.navLinks}
                        style={({ isActive }) => {
                          return {
                            textDecoration: "none",
                            borderRadius: "0",
                            color: isActive ? "#FFD223" : "",
                            borderBottom: isActive ? "2px solid #FFD223" : "",
                          };
                        }}
                      >
                        <Typography>
                          <b>{item.title}</b>
                        </Typography>
                      </NavLink>
                    </>
                  ))
                : ""}
              {isAuthenticated && userInfo.role == "admin"
                ? adminLinks.map((item, _i) => (
                    <>
                      <NavLink
                        to={item.link}
                        className={classes.navLinks}
                        style={({ isActive }) => {
                          return {
                            textDecoration: "none",
                            borderRadius: "0",
                            color: isActive ? "#FFD223" : "",
                            borderBottom: isActive ? "2px solid #FFD223" : "",
                          };
                        }}
                      >
                        <Typography>
                          <b>{item.title}</b>
                        </Typography>
                      </NavLink>
                    </>
                  ))
                : ""}

              {!isAuthenticated ? (
                <div>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      sx={{
                        ml: 20,
                        borderRadius: "26px",
                        background: "#FFD223",
                        color: "#001531",
                        "&:hover": { background: "#e0e600" },
                      }}
                    >
                      Sign in
                    </Button>
                  </Link>
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      sx={{
                        ml: 5,
                        borderRadius: "26px",
                        background: "#FFD223",
                        color: "#001531",
                        "&:hover": { background: "#e0e600", color: "" },
                        opacity: 75,
                      }}
                    >
                      Join Now
                    </Button>
                  </Link>
                </div>
              ) : (
                <Box
                  style={{ backgroundColor: "#FFD223", borderRadius: 20 }}
                  sx={{ flexGrow: 0, p: 1 }}
                >
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <div>
                        <Picture />
                      </div>
                      <Typography className={classes.userName} sx={{}}>
                        {userInfo.userName}
                      </Typography>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <Link
                      to={
                        userInfo.role == "HR" ? "/hr/profile/me" : "/profile/me"
                      }
                      style={{ textDecoration: "none", color: "#001531" }}
                    >
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">profile</Typography>
                      </MenuItem>
                    </Link>
                    <Link
                      to="/dashboard"
                      style={{ textDecoration: "none", color: "#001531" }}
                    >
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">dashboard</Typography>
                      </MenuItem>
                    </Link>
                    <MenuItem onClick={(handleCloseUserMenu, logout)}>
                      <Typography textAlign="center">logout</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              )}
            </Toolbar>
          )}

          {isMobile && (
            <IconButton
              className={classes.hamburger}
              onClick={handleDrawer(true)}
            >
              <MenuIcon style={{ color: "#f9ff00" }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        onClose={handleDrawer(false)}
        open={isMobile && open}
      >
        <Box className={classes.sidedrawer}>
          <CloseIcon
            className={classes.closeIcon}
            onClick={handleDrawer(false)}
          />
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <img src={require("../Assets/home/bluelogo.png")} alt="logo" />
          </NavLink>
          {!isAuthenticated &&
            guestLinks.map((item, _i) => (
              <>
                <NavLink
                  to={item.link}
                  className={classes.navLinks}
                  onClick={handleDrawer(false)}
                  style={({ isActive }) => {
                    return {
                      textDecoration: "none",
                      borderRadius: "0",
                      color: isActive ? "#f9ff00" : "#000000",
                      borderBottom: isActive ? "2px solid #f9ff00" : "",
                      opacity: 75,
                    };
                  }}
                >
                  <Typography>
                    <b>{item.title}</b>
                  </Typography>
                </NavLink>
              </>
            ))}
          {isAuthenticated && (
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              <Typography className={classes.userName} sx={{ color: "black" }}>
                {userInfo.userName}
              </Typography>
            </IconButton>
          )}
          {isAuthenticated && userInfo.role == "HR"
            ? hrLinks.map((item, _i) => (
                <>
                  <NavLink
                    to={item.link}
                    className={classes.navLinks}
                    onClick={handleDrawer(false)}
                    style={({ isActive }) => {
                      return {
                        textDecoration: "none",
                        borderRadius: "0",
                        color: isActive ? "#f9ff00" : "#000000",
                        borderBottom: isActive ? "2px solid #f9ff00" : "",
                        opacity: 75,
                      };
                    }}
                  >
                    <Typography>
                      <b>{item.title}</b>
                    </Typography>
                  </NavLink>
                </>
              ))
            : ""}
          {isAuthenticated && userInfo.role == "admin"
            ? adminLinks.map((item, _i) => (
                <>
                  <NavLink
                    to={item.link}
                    className={classes.navLinks}
                    onClick={handleDrawer(false)}
                    style={({ isActive }) => {
                      return {
                        textDecoration: "none",
                        borderRadius: "0",
                        color: isActive ? "#f9ff00" : "#000000",
                        borderBottom: isActive ? "2px solid #f9ff00" : "",
                        opacity: 75,
                      };
                    }}
                  >
                    <Typography>
                      <b>{item.title}</b>
                    </Typography>
                  </NavLink>
                </>
              ))
            : ""}
          {isAuthenticated && userInfo.role == "user"
            ? userLinks.map((item, _i) => (
                <>
                  <NavLink
                    to={item.link}
                    className={classes.navLinks}
                    onClick={handleDrawer(false)}
                    style={({ isActive }) => {
                      return {
                        textDecoration: "none",
                        borderRadius: "0",
                        color: isActive ? "#f9ff00" : "#000000",
                        borderBottom: isActive ? "2px solid #f9ff00" : "",
                        opacity: 75,
                      };
                    }}
                  >
                    <Typography>
                      <b>{item.title}</b>
                    </Typography>
                  </NavLink>
                </>
              ))
            : ""}
          {isAuthenticated && (
            <>
              <NavLink
                to="/display"
                className={classes.navLinks}
                onClick={handleDrawer(false)}
                style={({ isActive }) => {
                  return {
                    textDecoration: "none",
                    borderRadius: "0",
                    color: isActive ? "#f9ff00" : "#000000",
                    borderBottom: isActive ? "2px solid #f9ff00" : "",
                    opacity: 75,
                  };
                }}
              >
                <Typography>
                  <b>Profile</b>
                </Typography>
              </NavLink>

              <NavLink
                to="/login"
                className={classes.navLinks}
                onClick={(handleDrawer(false), logout)}
                style={({ isActive }) => {
                  return {
                    textDecoration: "none",
                    borderRadius: "0",
                    color: isActive ? "#f9ff00" : "#000000",
                    borderBottom: isActive ? "2px solid #f9ff00" : "",
                    opacity: 75,
                  };
                }}
              >
                <Typography>
                  <b>Logout</b>
                </Typography>
              </NavLink>
            </>
          )}
          {!isAuthenticated && (
            <div>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    ml: 20,
                    borderRadius: "26px",
                    background: "#FFD223",
                    color: "#001531",
                    "&:hover": { background: "#e0e600" },
                  }}
                >
                  Sign in
                </Button>
              </Link>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    ml: 5,
                    borderRadius: "26px",
                    background: "#FFD223",
                    color: "#001531",
                    "&:hover": { background: "#e0e600", color: "" },
                    opacity: 75,
                  }}
                >
                  Join Now
                </Button>
              </Link>
            </div>
          )}
        </Box>
      </Drawer>
    </>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { logout })(Header);
