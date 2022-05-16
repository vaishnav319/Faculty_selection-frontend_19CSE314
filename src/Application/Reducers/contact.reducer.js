import {
  GET_FORMS,
  GET_FORM,
  UPDATE_FORM,
  DELETE_FORM,
  FORM_ERROR,
  POST_FORM,
} from "../Actions/types";
const initialState = {
  contactForms: [],
  contactForm: null,
  isLoading: false,
  isError: false,
  isSuccess: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_FORMS:
      return {
        ...state,
        contactForms: payload.data,
        isLoading: false,
      };
    case GET_FORM:
    case UPDATE_FORM:
      return {
        ...state,
        contactForm: payload,
        isLoading: false,
      };
    case POST_FORM:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      };
    case FORM_ERROR:
      return { isLoading: false, isError: true, error: action.payload };
    case DELETE_FORM:
      console.log("in delete form", payload);
      return {
        ...state,
        contactForms: state.contactForms.filter((form) => form._id !== payload),
        isLoading: false,
      };

    default:
      return state;
  }
}
