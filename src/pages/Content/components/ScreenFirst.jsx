import React from 'react';
import PropTypes from 'prop-types';
import classes from '../css/ScreenFirst.module.css';
import html from '../../../assets/img/html-logo.png';
import ScreenFirstOptions from './ScreenFirstOptions';

const ScreenFirst = (props) => {
  const {
    screenFirstData,
    screenFirstBtnToggle,
    screenFirstOptionsToggle,
    t
  } = props;
  const { itemSelected, isBtnActive, options } = screenFirstData;

  return (
    <div className={classes.screen_1}>
      <div className={classes.html_image}>
        <img src={html} alt="html" />
      </div>
      <div className={classes.screen_1_container}>
        <div className={classes.html_body}>
          {t('contentPage.html')}
        </div>
        <div className={classes.html_item_selected}>
          <div className={classes.item_selected_title}>Item selected:</div>
          <div className={classes.selected}>
            <div className={classes.selected_text}>{itemSelected.item}</div>
            <div>
              {`+$ ${itemSelected.price.toFixed(2)}`}
            </div>
          </div>
        </div>
        <div className={classes.html_more_options}>
          <div>Please select more option if necessary:</div>
          <ScreenFirstOptions
            screenFirstOptionsToggle={screenFirstOptionsToggle}
            options={options}
          />
        </div>
        <div className={classes.option_add}>Add more information</div>
        <div className={classes.html_button}>
          <div
            aria-hidden="true"
            onClick={screenFirstBtnToggle}
            className={!isBtnActive
              ? classes.html_btn
              : `${classes.html_btn} ${classes.html_btn_active}`}
          >
            HTML
          </div>
        </div>
      </div>
    </div>
  );
};
ScreenFirst.propTypes = {
  screenFirstData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  screenFirstBtnToggle: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  screenFirstOptionsToggle: PropTypes.func.isRequired
};

export default ScreenFirst;
