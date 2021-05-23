import {
  ADD_USERS,
  BTN_GET_USERS,
  BTN_UPDATE_USERS,
  TOGGLE_ERROR,
  TOGGLE_FETCHING
} from './types';
import apiAxios from '../../service/apiAxios';

export const addUsers = (users) => ({ type: ADD_USERS, users });
export const toggleFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching });
export const toggleError = (error) => ({ type: TOGGLE_ERROR, error });
export const btnGetUsers = (option) => ({ type: BTN_GET_USERS, option });
export const btnUpdUsers = (option) => ({ type: BTN_UPDATE_USERS, option });
export const getUsersThunk = () => {
  return (dispatch) => {
    dispatch(btnGetUsers(true));
    apiAxios.usersApiAxios()
      .then((data) => {
        dispatch(toggleError(false));
        dispatch(toggleFetching(false));
        dispatch(addUsers(data));
        dispatch(btnGetUsers(false));
      })
      .catch(() => {
        dispatch(btnGetUsers(false));
        dispatch(toggleFetching(false));
        dispatch(toggleError(true));
      });
  };
};
export const updUsersThunk = () => {
  return (dispatch) => {
    dispatch(btnUpdUsers(true));
    apiAxios.usersApiAxios()
      .then((data) => {
        dispatch(addUsers(data));
        dispatch(btnUpdUsers(false));
      })
      .catch(() => {
        dispatch(btnUpdUsers(false));
        dispatch(toggleFetching(false));
        dispatch(toggleError(true));
      });
  };
};
