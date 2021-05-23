import React from 'react';
import PropTypes from 'prop-types';
import Preloader from '../../../components/Preloader/Preloader';
import '../css/BtnUsers.css';

const BtnUpdUsers = (props) => {
  const {
    isBtnUpdUser,
    t,
    updUsersThunk
  } = props;

  return (
    <div aria-hidden="true" className="box-1" onClick={updUsersThunk}>
      <div className="btn btn-one">
        {isBtnUpdUser ? <span className="box_1_preloader"><Preloader /></span> : <span>{t('apiPage.updUsers')}</span>}
      </div>
    </div>
  );
};
BtnUpdUsers.propTypes = {
  isBtnUpdUser: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
  updUsersThunk: PropTypes.func.isRequired
};

export default BtnUpdUsers;
