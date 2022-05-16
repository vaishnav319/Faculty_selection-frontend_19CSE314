import { combineReducers } from "redux";
import contact from "./contact.reducer";
import { authReducer } from "./auth.reducer";
import { addApplicationReducer } from "./application.reducer";
import { profileReducer } from "./profile.reducer";
import { hrprofileReducer } from "./hrprofile.reducer";
import { dataReducer } from "./data.reducer";

import alertReducer from "./alert.reducer";
export default combineReducers({
  contact: contact,
  auth: authReducer,
  application: addApplicationReducer,
  profile: profileReducer,
  hrProfile: hrprofileReducer,
  alert: alertReducer,
  data: dataReducer,
});
