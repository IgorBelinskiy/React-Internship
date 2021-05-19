import React from 'react';
import PropTypes from 'prop-types';
import * as axios from 'axios';
import Preloader from '../../../components/Preloader/Preloader';
import '../css/BtnUsers.css';

const BtnGetUsers = (props) => {
  const {
    isBtnGetUser,
    toggleError,
    toggleFetching,
    addUsers,
    btnGetUsers,
    t
  } = props;

  const getUsers = () => {
    btnGetUsers(true);
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.data)
      .then((data) => {
        toggleError(false);
        toggleFetching(false);
        addUsers(data);
        btnGetUsers(false);
      })
      .catch(() => {
        btnGetUsers(false);
        toggleFetching(false);
        toggleError(true);
      });
  };
  return (
    <div aria-hidden="true" className="box-3" onClick={getUsers}>
      <div className="btn btn-three">
        {isBtnGetUser ? <span className="box_1_preloader"><Preloader /></span> : <span>{t('apiPage.getUsers')}</span>}
      </div>
    </div>
  );
};
BtnGetUsers.propTypes = {
  isBtnGetUser: PropTypes.bool.isRequired,
  toggleError: PropTypes.func.isRequired,
  toggleFetching: PropTypes.func.isRequired,
  addUsers: PropTypes.func.isRequired,
  btnGetUsers: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default BtnGetUsers;
