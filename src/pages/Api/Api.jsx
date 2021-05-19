import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classes from './css/Api.module.css';
import Users from './components/Users';
import ButtonHome from '../../components/ButtonHome/ButtonHome';
import SwitchDayNight from '../../components/SwitchDayNight/SwitchDayNight';
import { SwitchContext } from '../../context';
import BtnGetUsers from './components/BtnGetUsers';
import BtnUpdUsers from './components/BtnUpdUsers';

const Api = (props) => {
  const { t } = useTranslation();

  const { theme } = useContext(SwitchContext);

  const {
    apiPageData,
    addUsers,
    toggleFetching,
    toggleError,
    btnGetUsers,
    btnUpdUsers
  } = props;

  const {
    users,
    isFetching,
    error,
    isBtnGetUser,
    isBtnUpdUser,
  } = apiPageData;

  const reset = () => {
    toggleFetching(true);
    toggleError(false);
  };

  if (isFetching) {
    return (
      <div className={theme === 'night' ? classes.api : `${classes.api} ${classes.day}`}>
        <BtnGetUsers
          isBtnGetUser={isBtnGetUser}
          toggleError={toggleError}
          toggleFetching={toggleFetching}
          addUsers={addUsers}
          btnGetUsers={btnGetUsers}
          t={t}
        />
        <ButtonHome />
      </div>
    );
  }
  if (error) {
    return (
      <div className={theme === 'night' ? classes.api : `${classes.api} ${classes.day}`}>
        <div className={classes.title}>{t('apiPage.error')}</div>
        <BtnGetUsers
          isBtnGetUser={isBtnGetUser}
          toggleError={toggleError}
          toggleFetching={toggleFetching}
          addUsers={addUsers}
          btnGetUsers={btnGetUsers}
          t={t}
        />
        <ButtonHome reset={reset} />
      </div>
    );
  }
  return (
    <div className={theme === 'night' ? classes.api : `${classes.api} ${classes.day}`}>
      <div className={classes.api_switchDayNight}>
        <SwitchDayNight />
      </div>
      <BtnUpdUsers
        isBtnUpdUser={isBtnUpdUser}
        toggleError={toggleError}
        toggleFetching={toggleFetching}
        addUsers={addUsers}
        btnUpdUsers={btnUpdUsers}
        t={t}
      />
      <div className={classes.title}>{t('apiPage.users')}</div>
      <Users t={t} users={users} />
      <ButtonHome />
    </div>
  );
};
Api.propTypes = {
  apiPageData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  addUsers: PropTypes.func.isRequired,
  toggleFetching: PropTypes.func.isRequired,
  toggleError: PropTypes.func.isRequired,
  btnGetUsers: PropTypes.func.isRequired,
  btnUpdUsers: PropTypes.func.isRequired
};

export default Api;
