import React, { useContext } from 'react';
import brit from '../../assets/img/brit.png';
import rus from '../../assets/img/rus.png';
import classes from './css/SwitchLang.module.css';
import { SwitchContext } from '../../context';

const SwitchLang = () => {
  const { changeLang, language } = useContext(SwitchContext);

  return (
    <div className={classes.switchLang}>
      <button
        onClick={() => changeLang('en')}
        className={language === 'en'
          ? classes.switchLang_btn
          : `${classes.switchLang_btn} ${classes.brit}`}
        type="button"
        disabled={language === 'en'}
      >
        <img src={brit} alt="br" />
      </button>
      <button
        onClick={() => changeLang('ru')}
        className={language === 'ru'
          ? classes.switchLang_btn
          : `${classes.switchLang_btn} ${classes.rus}`}
        type="button"
        disabled={language === 'ru'}
      >
        <img src={rus} alt="ru" />
      </button>
    </div>
  );
};

export default SwitchLang;
