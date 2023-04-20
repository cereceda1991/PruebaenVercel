import {
  LOG_OUT_USER,
  SIGN_UP_USER,
  SIGN_IN_USER,
} from '../actions/types/types';

const initialState = {
  authList: null,
  authToken: null,
};

export default function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case SIGN_IN_USER:
      return {
        ...state,
        authList: action.payload.user,
        authToken: action.payload.token
      }
    case LOG_OUT_USER:
      return {
        ...state,
        authList: null,
        authToken: null,
      }
    case SIGN_UP_USER:
      return {
        ...state,
        authList: action.payload.user,
        authToken: action.payload.token
      }
    default:
      return state;
  };
};
