import {
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  DELETE_EXPERIENCE,
  ADD_EXPERIENCE_FAIL,
  ADD_EDUCATION_REQUEST,
  ADD_EDUCATION_SUCCESS,
  ADD_EDUCATION_FAIL,
  ADD_APPLICATION_SUCCESS,
  ADD_APPLICATION_FAIL,
  DELETE_EDUCATION,
} from "./types";
import { setAlert } from "./alert";
import axios from "axios";
import setAuthToken from "../Utils/setAuthToken";
let baseUrl = "http://localhost:5000/api/v1";
export const updateProfile = (values, navigate, from) => async (dispatch) => {
  console.log("Hey in update profile actions");
  try {
    dispatch({
      type: UPDATE_PROFILE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${baseUrl}/user/profile`,
      values,
      config
    );

    navigate(from, { replace: true });
    console.log(data);
    dispatch(setAlert("Profile Updated Successfully", "green"));
    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getCurrentProfile = () => async (dispatch) => {
  console.log("in get my profile");
  if (localStorage.token) {
    console.log("in get profile", localStorage.token);
    setAuthToken(localStorage.token);
  }
  //   console.log(axios.defaults.headers);
  try {
    const { data } = await axios.get(`${baseUrl}/user/me`);
    console.log(data);
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const deleteUserExperienceForm = (id, navigate) => async (dispatch) => {
  try {
    console.log(id);
    const res = await axios.delete(`${baseUrl}/user/experience/${id}`);
    console.log("in delete experience", id);
    dispatch(setAlert("Experience Deleted Successfully", "green"));
    dispatch({
      type: DELETE_EXPERIENCE,
      payload: id,
    });
    navigate("/user/profile/me", { replace: true });
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

export const addNewEducation = (values) => async (dispatch) => {
  console.log("Hey in add exp actions");
  console.log(values);
  try {
    dispatch({
      type: ADD_EDUCATION_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${baseUrl}/user/education`,
      values,
      config
    );
    console.log(data);
    dispatch(setAlert("Education Added Successfully", "green"));
    dispatch({
      type: ADD_EDUCATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ADD_EDUCATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.error.message,
    });
  }
};

export const deleteUserEducationForm = (id, navigate) => async (dispatch) => {
  try {
    console.log(id);
    const res = await axios.delete(`${baseUrl}/user/education/${id}`);
    console.log("in delete experience", id);
    dispatch(setAlert("Education Deleted Successfully", "green"));
    dispatch({
      type: DELETE_EDUCATION,
      payload: id,
    });
    navigate("/user/profile", { replace: true });
  } catch (error) {
    dispatch({
      type: ADD_EDUCATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
