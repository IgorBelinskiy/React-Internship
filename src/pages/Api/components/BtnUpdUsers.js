import React from 'react';
import PropTypes from 'prop-types';
import * as axios from 'axios';
import Preloader from '../../../components/Preloader/Preloader';
import '../css/BtnUsers.css';

const BtnUpdUsers = (props) => {
  const {
    isBtnUpdUser,
    toggleError,
    toggleFetching,
    addUsers,
    btnUpdUsers,
    t
  } = props;

  const updUsers = () => {
    btnUpdUsers(true);
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.data)
      .then((data) => {
        addUsers(data);
        btnUpdUsers(false);
      })
      .catch(() => {
        btnUpdUsers(false);
        toggleFetching(false);
        toggleError(true);
      });
  };
  return (
    <div aria-hidden="true" className="box-1" onClick={updUsers}>
      <div className="btn btn-one">
        {isBtnUpdUser ? <span className="box_1_preloader"><Preloader /></span> : <span>{t('apiPage.updUsers')}</span>}
      </div>
    </div>
  );
};
BtnUpdUsers.propTypes = {
  isBtnUpdUser: PropTypes.bool.isRequired,
  toggleError: PropTypes.func.isRequired,
  toggleFetching: PropTypes.func.isRequired,
  addUsers: PropTypes.func.isRequired,
  btnUpdUsers: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default BtnUpdUsers;
