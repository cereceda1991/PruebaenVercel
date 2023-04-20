import {
  GET_USERS,
  //CREATE_USER,
  GET_USER_BY_ID,
  //DELETE_USER_BY_ID,
  UPDATE_USER_BY_ID,
  SIGN_IN_USER,
} from '../actions/types/types';

const initialState = {
  usersList: [],
  userList: null,
  userToken: null,
};

export default function usersReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        usersList: action.payload,
      };
    /*case CREATE_USER:
         return {
           ...state,
         }; */
    case GET_USER_BY_ID:
      return {
        ...state,
        userList: action.payload,
      };
    /*case DELETE_USER_BY_ID:
          return {
            ...state,
          }; */
    case UPDATE_USER_BY_ID:
      return {
        ...state,
      };
    case SIGN_IN_USER:
      return {
        ...state,
        userList: action.payload.user,
        userToken: action.payload.token
      }
    default:
      return state;
  };
};
