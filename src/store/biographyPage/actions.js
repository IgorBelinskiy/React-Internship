import {
  ADD_EVENT, ADD_STATE, BUBBLE_SORT,
  DELETE_LAST_POST,
  DELETE_SELECTED_POST, MIN_MAX, RNDM,
  TO_MAX,
  TO_MIN,
  UPDATE_NEW_TEXT,
  UPDATE_NEW_YEAR
} from './types';

export const addState = (data) => ({ type: ADD_STATE, data });
export const addEvent = () => ({ type: ADD_EVENT });
export const deleteLastPost = () => ({ type: DELETE_LAST_POST });
export const bubbleSort = () => ({ type: BUBBLE_SORT });
export const deleteSelectPost = (index) => ({
  type: DELETE_SELECTED_POST, index
});
export const minMax = () => ({ type: MIN_MAX });
export const rndm = () => ({ type: RNDM });
export const toMax = () => ({ type: TO_MAX });
export const toMin = () => ({ type: TO_MIN });
export const updateNewText = (e) => ({
  type: UPDATE_NEW_TEXT, text: e.target.value
});
export const updateNewYear = (e) => ({
  type: UPDATE_NEW_YEAR, year: e.target.value
});
