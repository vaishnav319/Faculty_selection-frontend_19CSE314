import {
  ADD_HR_FAIL,
  ADD_HR_SUCCESS,
  GET_HRS_FAIL,
  GET_HRS_SUCCESS,
  GET_PENDING_HRS_SUCCESS,
} from "../Actions/types";

export const dataReducer = (
  state = {
    Hrs: [],
    PendingHrs: [],
    isLoading: false,
    isError: false,
    isSuccess: null,
  },
  action
) => {
  switch (action.type) {
    case GET_HRS_SUCCESS:
      return {
        ...state,
        Hrs: action.payload.data,
        isLoading: false,
      };
    case GET_PENDING_HRS_SUCCESS:
      return {
        ...state,
        PendingHrs: action.payload.data,
        isLoading: false,
      };
    case ADD_HR_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case GET_HRS_FAIL:
    case ADD_HR_FAIL:
      return { isLoading: false, isError: true, error: action.payload };

    default:
      return state;
  }
};
