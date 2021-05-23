import React from 'react';
import PropTypes from 'prop-types';
import Preloader from '../../../components/Preloader/Preloader';
import '../css/BtnUsers.css';

const BtnGetUsers = (props) => {
  const {
    isBtnGetUser,
    getUsersThunk,
    t
  } = props;

  return (
    <div aria-hidden="true" className="box-3" onClick={getUsersThunk}>
      <div className="btn btn-three">
        {isBtnGetUser ? <span className="box_1_preloader"><Preloader /></span> : <span>{t('apiPage.getUsers')}</span>}
      </div>
    </div>
  );
};
BtnGetUsers.propTypes = {
  isBtnGetUser: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
  getUsersThunk: PropTypes.func.isRequired
};

export default BtnGetUsers;
