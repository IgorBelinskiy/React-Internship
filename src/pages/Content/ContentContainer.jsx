import { connect } from 'react-redux';
import Content from './Content';
import {
  toggleBtnScreenEight,
  toggleBtnScreenFirst,
  toggleOptionsScreenEight,
  toggleOptionsScreenFirst
} from '../../store/contentPage/actions';

const mapStateToProps = (state) => {
  return {
    contentPageData: state.contentPage
  };
};

const mapDispatchToProps = {
  toggleBtnScreenFirst,
  toggleOptionsScreenFirst,
  toggleBtnScreenEight,
  toggleOptionsScreenEight
};

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);

export default ContentContainer;
