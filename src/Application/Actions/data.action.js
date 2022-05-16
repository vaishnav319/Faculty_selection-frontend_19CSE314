import axios from "axios";
import {
  GET_HRS_SUCCESS,
  GET_HRS_FAIL,
  ADD_HR_SUCCESS,
  ADD_APPLICATION_FAIL,
  GET_PENDING_HRS_SUCCESS,
} from "./types";
import { setAlert } from "./alert";

let baseUrl = "http://localhost:5000/api/v1/";
export const getHrs = () => async (dispatch) => {
  try {
    console.log("In get hrs");
    const res = await axios.get(`${baseUrl}/dashboard/hrs`);

    dispatch({
      type: GET_HRS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_HRS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getPendingHrs = () => async (dispatch) => {
  try {
    console.log("In get pending hrs");
    const res = await axios.get(`${baseUrl}/dashboard/hrs/pending`);

    dispatch({
      type: GET_PENDING_HRS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_HRS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const addHrByAdmin = (values) => async (dispatch) => {
  console.log("Hey in data add hr actions");
  try {
    console.log(values);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${baseUrl}/dashboard/add/hr`,
      values,
      config
    );
    console.log(data);
    dispatch({
      type: ADD_HR_SUCCESS,
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
