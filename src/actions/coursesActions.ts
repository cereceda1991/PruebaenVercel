import { Dispatch } from "redux";
import {
  GET_COURSES,
  CREATE_COURSE,
  GET_COURSE_BY_ID,
  DELETE_COURSE_BY_ID,
  UPDATE_COURSE_BY_ID,
  GET_MODULES_FROM_COURSE_BY_ID,
} from "./types/types";
import { Module } from "./modulesActions";

const url = "https://verbify.onrender.com/api/courses";

interface Course {
  _id?: string,
  name?: string,
  description?: string,
  imageURL?: string,
  level?: string,
  isPublic?: true,
  tags?: string,
  Module?: Module[],
  createdAt?: string,
  updatedAt?: string,
  __v?: number
}

export const getCourses = () => {
  return (dispatch: Dispatch) => {
    return fetch(`${url}`)
      .then(response => response.json())
      .then(obj =>
        dispatch({ type: GET_COURSES, payload: obj })
      )
  };
};

export const createCourse = (newCourse: Course) => {
  return (dispatch: Dispatch) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify(newCourse)
    })
      .then(response => response.json())
      .then(() =>
        dispatch({ type: CREATE_COURSE })
      )
  };
};

export const getCourseById = (id: string) => {
  return (dispatch: Dispatch) => {
    return fetch(`${url}/${id}`)
      .then(response => response.json())
      .then(obj =>
        dispatch({ type: GET_COURSE_BY_ID, payload: obj })
      )
  };
};

export const deleteCourseById = (id: string) => {
  return (dispatch: Dispatch) => {
    return fetch(`${url}/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(() =>
        dispatch({ type: DELETE_COURSE_BY_ID })
      )
  };
};

export const updateCourseById = (id: string, updates: Course) => {
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
        dispatch({ type: UPDATE_COURSE_BY_ID })
      )
  };
};

export const getModulesFromCourseById = (courseId: string) => {
  return (dispatch: Dispatch) => {
    return fetch(`${url}/${courseId}/modules`)
      .then(response => response.json())
      .then(obj =>
        dispatch({ type: GET_MODULES_FROM_COURSE_BY_ID, payload: obj })
      )
  };
};
