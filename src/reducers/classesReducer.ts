import {
  GET_CLASSES,
  CREATE_CLASS,
  GET_CLASS_BY_ID,
  DELETE_CLASS_BY_ID,
  UPDATE_CLASS_BY_ID,
} from '../actions/types/types';

const initialState = {
  classesList: [],
  classList: null
};

export default function classesReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_CLASSES:
      return {
        ...state,
        classesList: action.payload,
      };
    case CREATE_CLASS:
      return {
        ...state,
      };
    case GET_CLASS_BY_ID:
      return {
        ...state,
        classList: action.payload,
      };
    case DELETE_CLASS_BY_ID:
      return {
        ...state,
      };
    case UPDATE_CLASS_BY_ID:
      return {
        ...state,
      };
    default:
      return state;
  };
};
