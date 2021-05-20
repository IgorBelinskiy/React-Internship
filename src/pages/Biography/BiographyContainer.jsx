import { connect } from 'react-redux';
import Biography from './Biography';
import {
  addEvent, addState,
  bubbleSort,
  deleteLastPost,
  deleteSelectPost,
  minMax,
  rndm,
  toMax, toMin, updateNewText, updateNewYear
} from '../../store/biographyPage/actions';

const mapStateToProps = (state) => ({
  biographyPageData: state.biographyPage
});

const mapDispatchToProps = {
  addEvent,
  deleteLastPost,
  bubbleSort,
  deleteSelectPost,
  minMax,
  rndm,
  toMax,
  toMin,
  updateNewText,
  updateNewYear,
  addState,
};

const BiographyContainer = connect(mapStateToProps, mapDispatchToProps)(Biography);

export default BiographyContainer;
