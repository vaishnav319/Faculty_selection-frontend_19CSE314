import { FormatColorResetSharp } from "@mui/icons-material";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOAD_SUCCESS,
  HR_VERIFY_REQUEST,
  SEND_OTP_SUCCESS,
  SEND_OTP_FAIL,
  VERIFY_OTP_FAIL,
  VERIFY_OTP_SUCCESS,
  GET_NOT_SUCCESS,
  GET_NOT_FAIL,
} from "../Actions/types";

export const authReducer = (
  state = {
    isLoading: false,
    isError: false,
    isSuccess: null,
    otpverifysuccess: false,
    otpverifyfail: false,
    isAuthenticated: false,
    role: "",
    userInfo: {},
    notification: [],
    forgotMail: "",
    token: localStorage.getItem("token"),
  },
  action
) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
    case USER_REGISTER_REQUEST:
      return { isLoading: true };
    case USER_LOGIN_SUCCESS:
    case USER_REGISTER_SUCCESS:
      console.log(action.payload.accessToken);
      localStorage.setItem("token", action.payload.accessToken);
      return {
        isLoading: false,
        isSuccess: true,
        userInfo: action.payload.data,
        isAuthenticated: true,
        role: action.payload.role,
      };
    case USER_LOGIN_FAIL:
    case USER_REGISTER_FAIL:
    case GET_NOT_FAIL:
      return { isLoading: false, error: action.payload };
    case HR_VERIFY_REQUEST:
      return {
        isSuccess: true,
      };
    case SEND_OTP_FAIL: {
      return { isError: true };
    }
    case VERIFY_OTP_FAIL: {
      return { ...state, otpverifyfail: true };
    }
    case USER_LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    case SEND_OTP_SUCCESS:
      return {
        ...state,
        isSuccess: true,
      };
    case VERIFY_OTP_SUCCESS:
      return {
        ...state,
        otpverifysuccess: true,
      };

    case USER_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        userInfo: action.payload.data,
        role: action.payload.data.role,
      };
    case GET_NOT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        notifications: action.payload.data,
      };
    default:
      return state;
  }
};
