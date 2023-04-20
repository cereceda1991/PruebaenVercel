import {
  GET_MODULES,
  CREATE_MODULE,
  GET_MODULE_BY_ID,
  DELETE_MODULE_BY_ID,
  UPDATE_MODULE_BY_ID,
  GET_CLASSES_FROM_MODULE_BY_ID,
} from '../actions/types/types';

const initialState = {
  modulesList: [],
  moduleList: null,
  classesList: [],
};

export default function modulesReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_MODULES:
      return {
        ...state,
        modulesList: action.payload,
      };
    case CREATE_MODULE:
      return {
        ...state,
      };
    case GET_MODULE_BY_ID:
      return {
        ...state,
        moduleList: action.payload,
      };
    case DELETE_MODULE_BY_ID:
      return {
        ...state,
      };
    case UPDATE_MODULE_BY_ID:
      return {
        ...state,
      };
    case GET_CLASSES_FROM_MODULE_BY_ID:
      return {
        ...state,
        classesList: action.payload,
      }
    default:
      return state;
  };
};
