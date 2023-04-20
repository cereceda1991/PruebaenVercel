import { Dispatch } from "redux";
import {
  GET_MODULES,
  CREATE_MODULE,
  GET_MODULE_BY_ID,
  DELETE_MODULE_BY_ID,
  UPDATE_MODULE_BY_ID,
  GET_CLASSES_FROM_MODULE_BY_ID,
} from "./types/types";

const url = "https://verbify.onrender.com/api/modules";

export interface Module {
  _id?: string,
  name?: string,
  isCompleted?: boolean,
  classes?: string[],
  createdAt?: string,
  updatedAt?: string,
  __v?: number
}

export const getModules = () => {
  return (dispatch: Dispatch) => {
    return fetch(`${url}`)
      .then(response => response.json())
      .then(obj =>
        dispatch({ type: GET_MODULES, payload: obj })
      )
  };
};

export const createModule = (newModule: Module) => {
  return (dispatch: Dispatch) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify(newModule)
    })
      .then(response => response.json())
      .then(() =>
        dispatch({ type: CREATE_MODULE })
      )
  };
};

export const getModuleById = (id: string) => {
  return (dispatch: Dispatch) => {
    return fetch(`${url}/${id}`)
      .then(response => response.json())
      .then(obj =>
        dispatch({ type: GET_MODULE_BY_ID, payload: obj })
      )
  };
};

export const deleteModuleById = (id: string) => {
  return (dispatch: Dispatch) => {
    return fetch(`${url}/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(() =>
        dispatch({ type: DELETE_MODULE_BY_ID })
      )
  };
};

export const updateModuleById = (id: string, updates: Module) => {
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
        dispatch({ type: UPDATE_MODULE_BY_ID })
      )
  };
};

export const getClassesFromModuleById = (moduleId: string) => {
  return (dispatch: Dispatch) => {
    return fetch(`${url}/${moduleId}/classes`)
      .then(response => response.json())
      .then(obj =>
        dispatch({ type: GET_CLASSES_FROM_MODULE_BY_ID, payload: obj })
      )
  };
};
