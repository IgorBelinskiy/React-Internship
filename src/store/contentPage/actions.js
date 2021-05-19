import {
  TOGGLE_BTN_SCREEN_EIGHT,
  TOGGLE_BTN_SCREEN_FIRST,
  TOGGLE_OPTIONS_SCREEN_EIGHT,
  TOGGLE_OPTIONS_SCREEN_FIRST
} from './types';

export const toggleBtnScreenFirst = () => ({ type: TOGGLE_BTN_SCREEN_FIRST });
export const toggleOptionsScreenFirst = (index) => ({ type: TOGGLE_OPTIONS_SCREEN_FIRST, index });

export const toggleBtnScreenEight = () => ({ type: TOGGLE_BTN_SCREEN_EIGHT });
export const toggleOptionsScreenEight = (index) => ({ type: TOGGLE_OPTIONS_SCREEN_EIGHT, index });
