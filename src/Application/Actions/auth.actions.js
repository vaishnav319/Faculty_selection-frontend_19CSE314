import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_LOAD_FAIL,
  USER_LOAD_SUCCESS,
  CLEAR_PROFILE,
  HR_VERIFY_REQUEST,
  SEND_OTP_SUCCESS,
  SEND_OTP_FAIL,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAIL,
  GET_NOT_SUCCESS,
  GET_NOT_FAIL,
} from "./types";

import axios from "axios";
import setAuthToken from "../Utils/setAuthToken";
let baseUrl = "http://localhost:5000/api/v1";
export const login = (values) => async (dispatch) => {
  console.log("Hey in login actions");
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(`${baseUrl}/auth/login`, values, config);
    console.log(data);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const registerUser = (values) => async (dispatch) => {
  console.log("Hey in Register actions");
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    console.log(values);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${baseUrl}/auth/register`,
      values,
      config
    );
    console.log(data);
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const registerHr = (values) => async (dispatch) => {
  console.log("Hey in HR Register actions");
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    console.log(values);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${baseUrl}/auth/register/hr`,
      values,
      config
    );
    console.log(data);
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const verifyHREmail = (values) => async (dispatch) => {
  console.log("Hey in HR verify actions");
  try {
    console.log(values);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(`${baseUrl}/auth/check`, values, config);
    console.log(data);
    dispatch({
      type: HR_VERIFY_REQUEST,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const sendOTP = (phoneNumber) => async (dispatch) => {
  console.log("Hey in send otp actions");
  try {
    console.log(phoneNumber);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${baseUrl}/auth/otp`,
      phoneNumber,
      config
    );
    console.log(data);
    dispatch({
      type: SEND_OTP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SEND_OTP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const sendForgotOTP = (userEmail) => async (dispatch) => {
  console.log("Hey in send email forgot otp actions");
  try {
    console.log(userEmail);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${baseUrl}/auth/forgot/otp`,
      userEmail,
      config
    );
    console.log(data);
    dispatch({
      type: SEND_OTP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SEND_OTP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const verifyOTP = (values) => async (dispatch) => {
  console.log("Hey in verify forgot otp actions");
  try {
    console.log(values);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(`${baseUrl}/auth/verify`, values, config);
    console.log(data);
    dispatch({
      type: VERIFY_OTP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VERIFY_OTP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const verifyForgotOTP = (values) => async (dispatch) => {
  console.log("Hey in verify forgot otp actions");
  try {
    console.log(values);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${baseUrl}/auth/forgot/verify`,
      values,
      config
    );
    console.log(data);
    dispatch({
      type: VERIFY_OTP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VERIFY_OTP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  console.log(axios.defaults.headers);

  try {
    const res = await axios.get("http://localhost:5000/api/v1/auth/user");
    console.log(res.data.name);
    dispatch({
      type: USER_LOAD_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USER_LOAD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: CLEAR_PROFILE });
};

export const getNotifications = () => async (dispatch) => {
  console.log("in get applied users applications by ID");
  try {
    const { data } = await axios.get(`${baseUrl}/admin/notification/all`);
    console.log(data);
    dispatch({
      type: GET_NOT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_NOT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
