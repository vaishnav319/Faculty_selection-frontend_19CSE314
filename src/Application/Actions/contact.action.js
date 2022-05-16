import axios from "axios";
import {
  GET_FORMS,
  GET_FORM,
  UPDATE_FORM,
  DELETE_FORM,
  FORM_ERROR,
  POST_FORM,
} from "./types";
import { setAlert } from "./alert";

let baseUrl = "http://localhost:5000/api/v1/";
export const getForms = () => async (dispatch) => {
  try {
    console.log("In get forms");
    const res = await axios.get(`${baseUrl}/contact/all`);

    dispatch({
      type: GET_FORMS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: FORM_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const addForm = (values) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(`${baseUrl}/contact/new`, values, config);
    dispatch({
      type: POST_FORM,
      dispatch: res.data,
    });
    console.log(values);
    // dispatch(setAlert("Contact Form Submitted", "success"));
  } catch (error) {
    dispatch({
      type: FORM_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteContactForm = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${baseUrl}/contact/${id}`);
    console.log("in delete contact form", id);
    dispatch(setAlert("Contact Form Deleted", "green"));

    dispatch({
      type: DELETE_FORM,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: FORM_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
