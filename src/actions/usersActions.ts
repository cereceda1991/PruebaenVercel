import { Dispatch } from "redux";
import {
  GET_USERS,
  //CREATE_USER,
  GET_USER_BY_ID,
  //DELETE_USER_BY_ID,
  UPDATE_USER_BY_ID,
} from "./types/types";

const url = "https://verbify.onrender.com/api/users";

export interface User {
  _id?: string,
  email?: string,
  passwordHash?: string,
  displayName?: string,
  firstName?: string,
  lastName?: string,
  isPremium?: boolean,
  createdAt?: string,
  updatedAt?: string,
  __v?: number,
};

export const getUsers = () => {
  return (dispatch: Dispatch) => {
    return fetch(`${url}`)
      .then(response => response.json())
      .then(obj =>
        dispatch({ type: GET_USERS, payload: obj })
      )
  };
};

/* export const createUser = (newUser: User) => {
  return (dispatch: Dispatch) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify(newUser)
    })
      .then(response => response.json())
      .then(() =>
        dispatch({ type: CREATE_USER })
      )
  };
}; */

export const getUserById = (id: string) => {
  return (dispatch: Dispatch) => {
    return fetch(`${url}/${id}`)
      .then(response => response.json())
      .then(obj =>
        dispatch({ type: GET_USER_BY_ID, payload: obj })
      )
  };
};

/* export const deleteUserById = (id: string) => {
  return (dispatch: Dispatch) => {
    return fetch(`${url}/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(() =>
        dispatch({ type: DELETE_USER_BY_ID })
      )
  };
}; */

export const updateUserById = (id: string, updates: User) => {
  return (dispatch: Dispatch) => {
    return fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify(updates)
    })
      .then(response => response.json())
      .then(() =>
        dispatch({ type: UPDATE_USER_BY_ID })
      )
  };
};
