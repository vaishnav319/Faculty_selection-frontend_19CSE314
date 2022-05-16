import React, { useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Views/Theme/theme";
import PageRoutes from "./Views/Routes/Index";
import { Provider } from "react-redux";
import store from "./Application/Store/store";
import setAuthToken from "./Application/Utils/setAuthToken";
import { loadUser } from "./Application/Actions/auth.actions";
import { getProfile } from "./Application/Actions/profile.action";
import { Navigate } from "react-router-dom";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ background: "#fffff" }}>
        <PageRoutes />
      </div>
    </ThemeProvider>
  );
};

export default App;
