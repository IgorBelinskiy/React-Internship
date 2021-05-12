import React from 'react';
import PropTypes from 'prop-types';
import classes from '../css/ScreenSeventh.module.css';
import npm from '../../../assets/img/npm.png';

const ScreenSeventh = ({ t }) => (
  <div className={classes.screen_7}>
    <div className={classes.screen_7_npm}>
      <img src={npm} alt="" />
    </div>
    <div className={classes.screen_7_container}>
      <div className={classes.npm_text}>
        {t('contentPage.npm')}
      </div>
    </div>
  </div>
);
ScreenSeventh.propTypes = {
  t: PropTypes.func.isRequired,
};

export default ScreenSeventh;
