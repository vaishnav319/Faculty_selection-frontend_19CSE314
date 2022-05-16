import {
  ADD_EXPERIENCE_FAIL,
  ADD_EXPERIENCE_REQUEST,
  ADD_EXPERIENCE_SUCCESS,
  DELETE_EXPERIENCE,
  GET_HR_PROFILE_FAIL,
  GET_HR_PROFILE_SUCCESS,
  UPDATE_HR_PROFILE_FAIL,
  UPDATE_HR_PROFILE_REQUEST,
  UPDATE_HR_PROFILE_SUCCESS,
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";
import setAuthToken from "../Utils/setAuthToken";
let baseUrl = "http://localhost:5000/api/v1";
export const updateHRProfile = (values, navigate, from) => async (dispatch) => {
  console.log("Hey in hr update profile actions");
  try {
    dispatch({
      type: UPDATE_HR_PROFILE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(`${baseUrl}/hr/profile`, values, config);

    navigate(from, { replace: true });
    console.log(data);
    dispatch(setAlert("Profile Updated Sucessfully", "green"));
    dispatch({
      type: UPDATE_HR_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_HR_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getCurrentHRProfile = () => async (dispatch) => {
  console.log("in hr get my profile");
  if (localStorage.token) {
    console.log("in get profile", localStorage.token);
    setAuthToken(localStorage.token);
  }
  //   console.log(axios.defaults.headers);
  try {
    const { data } = await axios.get(`${baseUrl}/hr/me`);
    console.log(data);
    dispatch({
      type: GET_HR_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_HR_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addNewExperience = (values, role) => async (dispatch) => {
  console.log("Hey in add exp actions");
  console.log(values);
  try {
    dispatch({
      type: ADD_EXPERIENCE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${baseUrl}/${role}/experience`,
      values,
      config
    );
    console.log(data);
    dispatch(setAlert("Experience Added Successfully", "green"));
    dispatch({
      type: ADD_EXPERIENCE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ADD_EXPERIENCE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.error.message,
    });
  }
};

export const deleteExperienceForm = (id, navigate) => async (dispatch) => {
  try {
    const res = await axios.delete(`${baseUrl}/hr/experience/${id}`);
    console.log("in delete experience", id);
    dispatch(setAlert("Experience Deleted Successfully", "green"));
    dispatch({
      type: DELETE_EXPERIENCE,
      payload: id,
    });
    navigate("/hr/profile/me", { replace: true });
  } catch (error) {
    dispatch({
      type: ADD_EXPERIENCE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
