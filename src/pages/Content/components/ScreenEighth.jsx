import React from 'react';
import PropTypes from 'prop-types';
import ScreenEightOptions from './ScreenEightOptions';
import classes from '../css/ScreenEighth.module.css';

const ScreenEighth = ({
  options, isBtnActive, screenEightOptionsToggle, screenEightBtnToggle
}) => {
  return (
    <div className={classes.screen_8}>
      <div className={classes.screen_8_container}>
        <div className={classes.screen_8_options}>
          <ScreenEightOptions
            options={options}
            screenEightOptionsToggle={screenEightOptionsToggle}
          />
        </div>
        <div className={classes.option_add}>Add more information</div>
        <div className={classes.html_button}>
          <div
            aria-hidden="true"
            onClick={screenEightBtnToggle}
            className={isBtnActive ? `${classes.html_btn} ${classes.html_btn_active}` : classes.html_btn}
          >
            Book
          </div>
        </div>
      </div>
    </div>
  );
};
ScreenEighth.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  isBtnActive: PropTypes.bool.isRequired,
  screenEightOptionsToggle: PropTypes.func.isRequired,
  screenEightBtnToggle: PropTypes.func.isRequired,
};

export default ScreenEighth;
