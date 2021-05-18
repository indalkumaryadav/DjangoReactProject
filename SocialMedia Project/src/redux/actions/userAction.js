import * as actionTypes from "./actionTypes";
import { fetchUser, getProfile } from "../../api/userApi";

export const getUserSuccess = (data) => {
  return {
    type: actionTypes.GET_USER,
    payload: data,
  };
};
export function loadUser() {
  return function (dispatch) {
    fetchUser()
      .then((response) => {
        if (response.status === 200) {
          dispatch(getUserSuccess(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
// profile
export const getProfileSuccess = (data) => {
  return {
    type: actionTypes.PROFILE_SUCCESS,
    payload: data,
  };
};

export function loadProfile() {
  return function (dispatch) {
    getProfile()
      .then((response) => {
        if (response.status === 200) {
          dispatch(getProfileSuccess(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
