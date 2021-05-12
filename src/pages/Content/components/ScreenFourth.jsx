import React from 'react';
import PropTypes from 'prop-types';
import classes from '../css/ScreenFourth.module.css';
import css from '../../../assets/img/css3.png';
import light from '../../../assets/img/light.png';
import SuggestedItem from './SuggestedItem';

const ScreenFourth = ({ screenFourthData, t }) => {
  const { item } = screenFourthData;

  return (
    <div className={classes.screen_4}>
      <div className={classes.screen_4_img}>
        <img src={light} alt="fff" />
      </div>
      <div className={classes.screen_4_image}>
        <img src={css} alt="gf" />
      </div>
      <div className={classes.screen_4_container}>
        <div className={classes.css_text}>
          {t('contentPage.css')}
        </div>
        <div className={classes.screen_4_addmore}>
          Learn More
        </div>
        <div className={classes.suggested}>
          <div className={classes.suggested_title}>
            Suggested Item
          </div>
          <SuggestedItem item={item} />
        </div>
      </div>
    </div>
  );
};
ScreenFourth.propTypes = {
  screenFourthData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  t: PropTypes.func.isRequired
};

export default ScreenFourth;
