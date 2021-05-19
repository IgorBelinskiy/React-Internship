import {
  ADD_USERS, BTN_GET_USERS, BTN_UPDATE_USERS,
  TOGGLE_ERROR,
  TOGGLE_FETCHING
} from './types';

const initialState = {
  users: [],
  isFetching: true,
  error: false,
  isBtnGetUser: false,
  isBtnUpdUser: false
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS: {
      return {
        ...state,
        users: action.users
      };
    }
    case TOGGLE_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case TOGGLE_ERROR:
      return {
        ...state,
        error: action.error
      };
    case BTN_GET_USERS:
      return {
        ...state,
        isBtnGetUser: action.option
      };
    case BTN_UPDATE_USERS:
      return {
        ...state,
        isBtnUpdUser: action.option
      };
    default:
      return state;
  }
};

export default apiReducer;
