import { combineReducers } from 'redux';
import contentReducer from './contentPage/reducers';
import biographyReducer from './biographyPage/reducers';
import apiReducer from './apiPage/reducers';

const reducers = combineReducers({
  contentPage: contentReducer,
  biographyPage: biographyReducer,
  apiPage: apiReducer
});

export default reducers;
