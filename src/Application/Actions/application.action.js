import {
  ADD_APPLICATION_FAIL,
  ADD_APPLICATION_REQUEST,
  ADD_APPLICATION_SUCCESS,
  GET_USER_APPLICATIONS_FAIL,
  GET_USER_APPLICATIONS_SUCCESS,
  GET_ALL_APPLICATIONS_FAIL,
  GET_ALL_APPLICATIONS_SUCCESS,
  GET_APPLICATION_SUCCESS,
  GET_APPLICATION_FAIL,
  DELETE_USER_APPLIED_APPLICATION,
  GET_APPLIED_USERS,
  UPDATE_APPLICATION_RESULT_SUCCESS,
  UPDATE_APPLICATION_RESULT_FAIL,
  SEND_ADMIN_SUCCESS,
  SEND_ADMIN_FAIL,
} from "./types";
import { setAlert } from "./alert";
import setAuthToken from "../Utils/setAuthToken";
import axios from "axios";
let baseUrl = "http://localhost:5000/api/v1";

export const addNewApplication = (values) => async (dispatch) => {
  console.log("Hey in add app actions");
  console.log(values);
  try {
    dispatch({
      type: ADD_APPLICATION_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:5000/api/v1/application/add",
      values,
      config
    );
    console.log(data);
    dispatch({
      type: ADD_APPLICATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_APPLICATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const updateApplication = (values, id) => async (dispatch) => {
  console.log("Hey in update app actions");
  console.log(id);
  console.log(values);
  try {
    dispatch({
      type: ADD_APPLICATION_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.patch(
      `${baseUrl}/application/update/${id}`,
      values,
      config
    );
    console.log(data);
    dispatch({
      type: ADD_APPLICATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_APPLICATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const applyToApplication = (values, id) => async (dispatch) => {
  console.log("Hey in apply app actions");
  console.log(values);
  try {
    dispatch({
      type: ADD_APPLICATION_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${baseUrl}/application/apply/${id}`,
      values,
      config
    );
    console.log(data);
    dispatch(setAlert("Applied Successfully", "green"));
    dispatch({
      type: ADD_APPLICATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ADD_APPLICATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.error.message,
    });
  }
};

export const getCurrentUsersApplications = () => async (dispatch) => {
  console.log("in get my applications");
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const { data } = await axios.get(`${baseUrl}/application/myapplications`);
    console.log({ data });
    dispatch({
      type: GET_USER_APPLICATIONS_SUCCESS,
      payload: { data },
    });
  } catch (error) {
    dispatch({
      type: GET_USER_APPLICATIONS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllApplications = () => async (dispatch) => {
  console.log("in get all applications");
  try {
    const { data } = await axios.get(`${baseUrl}/application/get/all`);
    console.log(data);
    dispatch({
      type: GET_ALL_APPLICATIONS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_APPLICATIONS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getApplicationByID = (id) => async (dispatch) => {
  console.log("in get  applications by ID");
  try {
    const { data } = await axios.get(`${baseUrl}/application/get/${id}`);
    console.log(data);
    dispatch({
      type: GET_APPLICATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_APPLICATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteApplicationForm = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `${baseUrl}/application/user/application/${id}`
    );
    console.log("in delete application form", id);
    dispatch(setAlert("Application Withdraw Completed Successfully", "green"));
    dispatch({
      type: DELETE_USER_APPLIED_APPLICATION,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_APPLICATIONS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAppliedUsersApplications = (id) => async (dispatch) => {
  console.log("in get applied users applications by ID");
  try {
    const { data } = await axios.get(
      `${baseUrl}/application/get/applied/users/${id}`
    );
    console.log(data);
    dispatch({
      type: GET_APPLIED_USERS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_APPLICATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateApplicationStatus = (values, id) => async (dispatch) => {
  console.log("Hey in apply result appln actions");
  console.log(values, id);
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.patch(
      `${baseUrl}/application/status/${id}`,
      values,
      config
    );
    console.log(data);
    dispatch(setAlert("Application Updated Successfully", "green"));
    dispatch({
      type: UPDATE_APPLICATION_RESULT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: UPDATE_APPLICATION_RESULT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.error.message,
    });
  }
};

export const sendResultstoAdmin = (message) => async (dispatch) => {
  console.log("Hey in send result to admin actions");
  console.log(message);
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${baseUrl}/admin/notification/add`,
      message,
      config
    );
    console.log(data);
    dispatch(setAlert("Notification Sent Successfully", "green"));
    dispatch({
      type: SEND_ADMIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch(setAlert("Notification Sent Successfully", "green"));
    dispatch({
      type: SEND_ADMIN_FAIL,
      payload:
        error.response || error.response.data.message
          ? error.response.data.message
          : error.error.message,
    });
  }
};
