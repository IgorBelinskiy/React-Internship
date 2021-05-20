import {
  ADD_EVENT, ADD_STATE, BUBBLE_SORT,
  DELETE_LAST_POST,
  DELETE_SELECTED_POST, MIN_MAX, RNDM,
  TO_MAX,
  TO_MIN,
  UPDATE_NEW_TEXT,
  UPDATE_NEW_YEAR
} from './types';

const initialState = {
  biographyData: [
    { id: 1, year: 1992, event: 'Born' },
    { id: 2, year: 1994, event: 'Kindergarten' },
    { id: 3, year: 1999, event: 'School' },
    { id: 4, year: 2009, event: 'University' },
    { id: 5, year: 2015, event: 'End of university studies' },
  ],
  newText: '',
  newYear: ''
};

const biographyReducer = (state = initialState, action) => {
  const newBiography = [...state.biographyData];
  switch (action.type) {
    case ADD_STATE:
      return {
        ...state,
        biographyData: action.data
      };
    case ADD_EVENT:
      if (state.newYear === '' || state.newYear === 0
        // eslint-disable-next-line no-restricted-globals
        || state.newYear === '0' || isNaN(state.newYear) || state.newText === '') {
        // eslint-disable-next-line no-alert
        alert('Введите корректные данные!!!');
        return {
          ...state, newText: '', newYear: '',
        };
      }
      return {
        ...state,
        biographyData:
          [...state.biographyData, {
            id: state.biographyData.length + 1,
            year: +state.newYear,
            event: state.newText
          }],
        newText: '',
        newYear: ''
      };
    case UPDATE_NEW_YEAR:
      return {
        ...state,
        newYear: action.year
      };
    case UPDATE_NEW_TEXT:
      return {
        ...state,
        newText: action.text
      };
    case DELETE_LAST_POST:
      newBiography.splice(-1, 1);
      return {
        ...state,
        biographyData: newBiography
      };
    case DELETE_SELECTED_POST:
      newBiography.splice(action.index, 1);
      return {
        ...state,
        biographyData: newBiography
      };
    case TO_MAX:
      return {
        ...state,
        biographyData:
          [...state.biographyData.sort((a, b) => a.year - b.year)]
      };
    case TO_MIN:
      return {
        ...state,
        biographyData:
          [...state.biographyData.sort((a, b) => b.year - a.year)]
      };
    case MIN_MAX:
      return {
        ...state,
        biographyData: [...state.biographyData.reverse()]
      };
    case RNDM:
      // eslint-disable-next-line no-case-declarations
      let i; let j; let k;
      // eslint-disable-next-line no-plusplus
      for (i = newBiography.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * i);
        k = newBiography[i];
        newBiography[i] = newBiography[j];
        newBiography[j] = k;
      }
      return {
        ...state,
        biographyData: newBiography
      };
    case BUBBLE_SORT:
      // eslint-disable-next-line no-plusplus
      for (let n = 0; n < newBiography.length; n++) {
        // eslint-disable-next-line no-plusplus,no-shadow
        for (let i = 0; i < newBiography.length - 1 - n; i++) {
          if (newBiography[i].year > newBiography[i + 1].year) {
            const buff = newBiography[i];
            newBiography[i] = newBiography[i + 1];
            newBiography[i + 1] = buff;
          }
        }
      }
      return {
        ...state,
        biographyData: newBiography
      };
    default:
      return state;
  }
};

export default biographyReducer;
