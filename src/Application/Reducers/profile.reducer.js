import {
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_FAIL,
  CLEAR_PROFILE,
} from "../Actions/types";

export const profileReducer = (
  state = {
    isLoading: false,
    isError: false,
    isSuccess: null,
    profiles: {},
    profile: {},
  },
  action
) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
    case UPDATE_PROFILE_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        profile: action.payload.data,
      };
    case UPDATE_PROFILE_REQUEST:
      return { isLoading: true };
    case UPDATE_PROFILE_FAIL:
    case GET_PROFILE_FAIL:
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
