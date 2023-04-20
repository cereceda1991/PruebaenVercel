import { Dispatch } from "redux";
import {
  LOG_OUT_USER,
  SIGN_UP_USER,
  SIGN_IN_USER,
} from "./types/types";

const url = "https://verbify.onrender.com/api/auth";

interface Inputs {
  email: string,
  password: string,
}

interface User {
  email: string,
  password: string,
  displayName: string,
}

export const signInUser = (inputs: Inputs) => {
  return (dispatch: Dispatch) => {
    return fetch(`${url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify(inputs)
    })
      .then(response => response.json())
      .then(obj =>
        dispatch({ type: SIGN_IN_USER, payload: obj })
      )
  };
};

export const logOutUser = () => {
  return (dispatch: Dispatch) => {
    return dispatch({
      type: LOG_OUT_USER,
    });
  }
};

export const signUpUser = (user: User) => {
  return (dispatch: Dispatch) => {
    return fetch(`${url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(obj =>
        dispatch({ type: SIGN_UP_USER, payload: obj })
      )
  };
};
