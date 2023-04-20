import { Dispatch } from "redux";
import {
  GET_CLASSES,
  CREATE_CLASS,
  GET_CLASS_BY_ID,
  DELETE_CLASS_BY_ID,
  UPDATE_CLASS_BY_ID,
} from "./types/types";

const url = "https://verbify.onrender.com/api/classes/";

interface Class {
  id?: string,
  name?: string,
  content?: string,
  videoURL?: string,
  isCompleted?: boolean,
  createdAt?: string,
  updatedAt?: string,
  __v?: number
}

export const getClasses = () => {
  return (dispatch: Dispatch) => {
    return fetch(`${url}`)
      .then(response => response.json())
      .then(obj =>
        dispatch({ type: GET_CLASSES, payload: obj })
      )
  };
};

export const createClass = (newClass: Class) => {
  return (dispatch: Dispatch) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify(newClass)
    })
      .then(response => response.json())
      .then(() =>
        dispatch({ type: CREATE_CLASS })
      )
  };
};

export const getClassById = (id: string) => {
  return (dispatch: Dispatch) => {
    return fetch(`${url}/${id}`)
      .then(response => response.json())
      .then(obj =>
        dispatch({ type: GET_CLASS_BY_ID, payload: obj })
      )
  };
};

export const deleteClassById = (id: string) => {
  return (dispatch: Dispatch) => {
    return fetch(`${url}/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(() =>
        dispatch({ type: DELETE_CLASS_BY_ID })
      )
  };
};

export const updateClassById = (id: string, updates: Class) => {
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
        dispatch({ type: UPDATE_CLASS_BY_ID })
      )
  };
};
