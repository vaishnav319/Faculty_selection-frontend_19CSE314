import {
  GET_HR_PROFILE_SUCCESS,
  UPDATE_HR_PROFILE_SUCCESS,
  GET_HR_PROFILE_FAIL,
  UPDATE_HR_PROFILE_REQUEST,
  UPDATE_HR_PROFILE_FAIL,
  CLEAR_PROFILE,
  ADD_APPLICATION_REQUEST,
  ADD_APPLICATION_SUCCESS,
  ADD_APPLICATION_FAIL,
  DELETE_EXPERIENCE,
} from "../Actions/types";

export const hrprofileReducer = (
  state = {
    isLoading: false,
    isError: false,
    isSuccess: null,
    hrprofiles: {},
    hrprofile: {},
  },
  action
) => {
  switch (action.type) {
    case GET_HR_PROFILE_SUCCESS:
    case UPDATE_HR_PROFILE_SUCCESS:
    case ADD_APPLICATION_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        hrprofile: action.payload.data,
      };
    case DELETE_EXPERIENCE:
      return {
        isLoading: false,
        isSuccess: true,
        hrprofile: state.hrprofile[0].experience.filter(
          (form) => form._id !== action.payload
        ),
      };
    case UPDATE_HR_PROFILE_REQUEST:
    case ADD_APPLICATION_REQUEST:
      return { isLoading: true };
    case UPDATE_HR_PROFILE_FAIL:
    case GET_HR_PROFILE_FAIL:
    case ADD_APPLICATION_FAIL:
      return { isLoading: false, isError: true, error: action.payload };
    case CLEAR_PROFILE:
      localStorage.removeItem("token");
      return {
        profile: null,
        profiles: null,
      };

    default:
      return state;
  }
};
