import {
  ADD_USERS,
  BTN_GET_USERS,
  BTN_UPDATE_USERS,
  TOGGLE_ERROR,
  TOGGLE_FETCHING
} from './types';

export const addUsers = (users) => ({ type: ADD_USERS, users });
export const toggleFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching });
export const toggleError = (error) => ({ type: TOGGLE_ERROR, error });
export const btnGetUsers = (option) => ({ type: BTN_GET_USERS, option });
export const btnUpdUsers = (option) => ({ type: BTN_UPDATE_USERS, option });
