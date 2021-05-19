import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import classes from './css/Content.module.css';
import ScreenFirst from './components/ScreenFirst';
import ScreenSecond from './components/ScreenSecond';
import ScreenThird from './components/ScreenThird';
import ScreenFourth from './components/ScreenFourth';
import ScreenFifth from './components/ScreenFifth';
import ScreenSixth from './components/ScreenSixth';
import ScreenSeventh from './components/ScreenSeventh';
import ScreenEighth from './components/ScreenEighth';
import ScreenNinth from './components/ScreenNinth';
import ButtonHome from '../../components/ButtonHome/ButtonHome';
import SwitchDayNight from '../../components/SwitchDayNight/SwitchDayNight';
import { SwitchContext } from '../../context';

const Content = (
  {
    contentPageData,
    toggleBtnScreenFirst,
    toggleOptionsScreenFirst,
    toggleBtnScreenEight,
    toggleOptionsScreenEight
  }
) => {
  const { t } = useTranslation();
  const [visibleArrowDown, setVisibleArrowDown] = useState(true);
  const [visibleArrowUp, setVisibleArrowUp] = useState(false);

  const { theme } = useContext(SwitchContext);

  const changeArrowDown = () => {
    setVisibleArrowDown(window.scrollY < 200);
  };

  const changeArrowUp = () => {
    setVisibleArrowUp(window.scrollY > 650);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeArrowDown);
    return () => {
      window.removeEventListener('scroll', changeArrowDown);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', changeArrowUp);
    return () => {
      window.removeEventListener('scroll', changeArrowUp);
    };
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const {
    screenFirst, screenSecond, screenThird, screenFourth, screenFifth, screenEighth, screenNinth
  } = contentPageData;
  return (
    <div className={theme === 'night' ? classes.content : `${classes.content} ${classes.day}`}>
      <div
        aria-hidden="true"
        onClick={scrollToBottom}
        className={visibleArrowDown ? classes.arrow_down : `${classes.arrow_down} ${classes.actD}`}
      >
        <AiOutlineArrowDown />
      </div>
      <div
        aria-hidden="true"
        onClick={scrollToTop}
        className={visibleArrowUp ? classes.arrow_up : `${classes.arrow_up} ${classes.actU}`}
      >
        <AiOutlineArrowUp />
      </div>
      <div className={classes.content_switchDayNight}>
        <SwitchDayNight />
      </div>
      <div className={classes.content_body}>
        <div className={classes.body_columns}>
          <ScreenFirst
            t={t}
            screenFirstBtnToggle={toggleBtnScreenFirst}
            screenFirstData={screenFirst}
            screenFirstOptionsToggle={toggleOptionsScreenFirst}
          />
          <ScreenSecond screenSecondData={screenSecond} />
        </div>
        <div className={classes.body_columns}>
          <ScreenThird screenThirdData={screenThird} />
          <ScreenFourth t={t} screenFourthData={screenFourth} />
          <ScreenFifth screenFifthData={screenFifth} />
        </div>
        <div className={classes.body_columns}>
          <ScreenSixth t={t} />
          <ScreenSeventh t={t} />
        </div>
        <div className={classes.body_columns}>
          <ScreenEighth
            options={screenEighth.options}
            screenEightOptionsToggle={toggleOptionsScreenEight}
            isBtnActive={screenEighth.isBtnActive}
            screenEightBtnToggle={toggleBtnScreenEight}
          />
          <ScreenNinth t={t} screenNinthData={screenNinth} />
        </div>
      </div>
      <ButtonHome />
    </div>
  );
};
Content.propTypes = {
  contentPageData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  toggleBtnScreenFirst: PropTypes.func.isRequired,
  toggleOptionsScreenFirst: PropTypes.func.isRequired,
  toggleBtnScreenEight: PropTypes.func.isRequired,
  toggleOptionsScreenEight: PropTypes.func.isRequired
};

export default Content;
