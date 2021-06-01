import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Preloader from '../../../components/Preloader/Preloader';
import '../css/BtnUsers.css';

const BtnUpdUsers = (props) => {
  const {
    isBtnUpdUser,
    updUsersThunk
  } = props;

  const { t } = useTranslation();

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
  updUsersThunk: PropTypes.func.isRequired
};

export default BtnUpdUsers;
