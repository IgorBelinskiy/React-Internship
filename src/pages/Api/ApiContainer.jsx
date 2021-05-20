import { connect } from 'react-redux';
import {
  addUsers, btnGetUsers, btnUpdUsers,
  toggleError,
  toggleFetching
} from '../../store/apiPage/actions';
import Api from './Api';

const mapStateToProps = (state) => ({
  apiPageData: state.apiPage
});
const mapDispatchToProps = {
  addUsers,
  toggleFetching,
  toggleError,
  btnGetUsers,
  btnUpdUsers
};

const ApiContainer = connect(mapStateToProps, mapDispatchToProps)(Api);

export default ApiContainer;
