import {
  ADD_APPLICATION_FAIL,
  ADD_APPLICATION_SUCCESS,
  ADD_APPLICATION_REQUEST,
  GET_USER_APPLICATIONS_SUCCESS,
  GET_USER_APPLICATIONS_FAIL,
  GET_ALL_APPLICATIONS_FAIL,
  GET_ALL_APPLICATIONS_REQUEST,
  GET_ALL_APPLICATIONS_SUCCESS,
  GET_APPLICATION_SUCCESS,
  GET_APPLICATION_FAIL,
  DELETE_USER_APPLIED_APPLICATION,
  GET_APPLIED_USERS,
  UPDATE_APPLICATION_RESULT_SUCCESS,
  UPDATE_APPLICATION_RESULT_FAIL,
  SEND_ADMIN_FAIL,
  SEND_ADMIN_SUCCESS,
} from "../Actions/types";

export const addApplicationReducer = (
  state = {
    isLoading: false,
    isError: false,
    isSuccess: null,
    applications: [],
    application: [],
    userApplications: [],
    appliedUsers: [],
  },
  action
) => {
  switch (action.type) {
    case ADD_APPLICATION_REQUEST:
    case GET_ALL_APPLICATIONS_REQUEST:
      return { isLoading: true, isSuccess: false };
    case GET_ALL_APPLICATIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        applications: action.payload.data,
      };
    case UPDATE_APPLICATION_RESULT_SUCCESS:
    case SEND_ADMIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      };
    case GET_APPLIED_USERS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        appliedUsers: action.payload.data,
      };
    case ADD_APPLICATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        // applications: action.payload.data,
      };
    case ADD_APPLICATION_FAIL:
    case GET_USER_APPLICATIONS_FAIL:
    case GET_ALL_APPLICATIONS_FAIL:
    case GET_APPLICATION_FAIL:
    case UPDATE_APPLICATION_RESULT_FAIL:
    case SEND_ADMIN_FAIL:
      return { isLoading: false, isError: true, error: action.payload };
    case GET_USER_APPLICATIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        userApplications: action.payload.data.data,
      };
    case GET_APPLICATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        application: action.payload.data,
      };
    case DELETE_USER_APPLIED_APPLICATION:
      return {
        ...state,
        userApplications: state.userApplications.filter(
          (form) => form._id !== action.payload
        ),
        isLoading: false,
      };
    default:
      return state;
  }
};
