import React, { useEffect } from "react";
import Home from "../UI/Pages/Home/Home";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Login from "../UI/Pages/Auth/Login";
import RegisterForm from "../UI/Pages/Auth/RegisterForm";
import ApplicationForm from "../UI/Pages/application/ApplicationForm";
import AddApplication from "../UI/Pages/application/AddApplication";
import PrivateRoute from "./PrivateRoute";
import PageNotFound from "./PageNotFound";
import Dashboard from "../UI/Pages/Dashboard/Dashboard";
import ProfileForm from "../UI/Pages/profile/ProfileForm";
import DisplayProfile from "../UI/Pages/profile/DisplayProfile";
import UnAuthorized from "./UnAuthorized";
import HrDashboard from "../UI/Pages/Dashboard/HrDashboard";
import Contact from "../UI/Pages/contact/contact";
import Application from "../UI/Pages/application/Application";
import JobDetail from "../UI/Pages/application/JobDetail";
import Alert from "../../Application/Utils/Alert";
import JobApplications from "../UI/Pages/application/JobApplications";
import HrApplicationPage from "../UI/Pages/application/HrApplicationPage";
import HrApplicationsDetails from "../UI/Pages/application/HrApplicationsDetails";
import EditApplication from "../UI/Pages/application/EditApplication";
import HrProfile from "../UI/Pages/profile/HrProfile";
import AddExperience from "../UI/Pages/profile/AddExperience";
import AddEducation from "../UI/Pages/profile/AddEducation";
import EditProfile from "../UI/Pages/profile/EditProfile";
import UploadPicture from "../UI/Pages/profile/UploadPicture";
import UserProfile from "../UI/Pages/profile/UserProfile";
import AdminDashboard from "../UI/Pages/Dashboard/AdminDashboard";
import HrList from "../UI/Pages/Dashboard/HrList";
import RegisterHr from "../UI/Pages/Auth/RegisterHr";
import RegistrationPageHR from "../UI/Pages/Auth/RegistrationPageHR";
import VerifyNumber from "../UI/Pages/Auth/VerifyNumber";
import Notification from "../UI/Pages/Dashboard/Notification";
import ForgotPassword from "../UI/Pages/Auth/ForgotPassword";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const Index = ({ location }) => {
  var path = window.location.pathname;
  // window.location.href.split('/login')
  return (
    <div>
      <BrowserRouter>
        <Wrapper>
          {/* {window.location.href !== "/login" ? <Header /> : ""} */}
          <Header />
          <Alert style={{ marginTop: "1rem" }} />
          <Routes>
            <Route path="/login" exact element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/register" exact element={<RegisterForm />} />
            <Route path="/register/hr" exact element={<RegistrationPageHR />} />
            <Route path="/number/verify" exact element={<VerifyNumber />} />
            <Route path="/forgotpassword" exact element={<ForgotPassword />} />
            {/*User routes */}
            <Route element={<PrivateRoute allowedRoles={["user"]} />}>
              <Route path="/apply/:id" exact element={<ApplicationForm />} />
              <Route path="/applications" exact element={<Application />} />
              <Route path="/dashboard" exact element={<Dashboard />} />
              <Route path="/display" exact element={<DisplayProfile />} />
              <Route path="/job-details/:id" exact element={<JobDetail />} />
              <Route path="/user/profile" exact element={<UserProfile />} />
              <Route path="/profile/me" exact element={<ProfileForm />} />

              <Route
                path="/my/applications"
                exact
                element={<JobApplications />}
              />
              <Route
                path="/user/add/education"
                exact
                element={<AddEducation />}
              />
            </Route>
            {/*HR routes */}

            <Route element={<PrivateRoute allowedRoles={["HR"]} />}>
              <Route path="/hr/dashboard" exact element={<HrDashboard />} />
            </Route>
            {/*HR and Admin routes */}

            <Route element={<PrivateRoute allowedRoles={["HR", "admin"]} />}>
              <Route path="/hr/profile/me" exact element={<HrProfile />} />
              <Route
                path="/hr/applications"
                exact
                element={<HrApplicationPage />}
              />
              <Route
                path="/add/application"
                exact
                element={<AddApplication />}
              />
              <Route path="/list/forms" exact element={<Contact />} />
              <Route
                path="/update/application/:id"
                exact
                element={<EditApplication />}
              />
            </Route>
            {/*Common authorized routes */}

            <Route
              element={<PrivateRoute allowedRoles={["HR", "admin", "user"]} />}
            >
              <Route
                path="/hr/job-details/:id"
                exact
                element={<HrApplicationsDetails />}
              />
              <Route path="/add/experience" exact element={<AddExperience />} />
              <Route path="/add/picture" exact element={<UploadPicture />} />
            </Route>
            <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
              <Route
                path="/admin/dashboard"
                exact
                element={<AdminDashboard />}
              />
              <Route path="/admin/hrlist" exact element={<HrList />} />
              <Route path="/add/picture" exact element={<UploadPicture />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/unauthorized" element={<UnAuthorized />} />
            <Route path="/update/profile" exact element={<EditProfile />} />
          </Routes>

          <Footer />
          {/* {path="/login" ? "" : <Footer />} */}
        </Wrapper>
      </BrowserRouter>
    </div>
  );
};
export default Index;
