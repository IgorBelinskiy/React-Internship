import { connect } from 'react-redux';
import {
  getUsersThunk,
  toggleError,
  toggleFetching,
  updUsersThunk
} from '../../store/apiPage/actions';
import Api from './Api';

const mapStateToProps = (state) => ({
  apiPageData: state.apiPage
});
const mapDispatchToProps = {
  getUsersThunk,
  updUsersThunk,
  toggleFetching,
  toggleError
};

const ApiContainer = connect(mapStateToProps, mapDispatchToProps)(Api);

export default ApiContainer;
