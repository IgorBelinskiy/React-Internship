import React, { useState, useContext, useEffect } from 'react';
import brit from '../../assets/img/brit.png';
import rus from '../../assets/img/rus.png';
import classes from './css/SwitchLang.module.css';
import { SwitchContext } from '../../context';

const SwitchLang = () => {
  const [local, setLocal] = useState('');
  const { changeLang } = useContext(SwitchContext);
  const getLocaleStorage = () => {
    const ls = window.localStorage.getItem('i18nextLng');
    setLocal(ls);
  };

  useEffect(() => {
    getLocaleStorage();
  });

  return (
    <div className={classes.switchLang}>
      <button
        onClick={() => changeLang('en')}
        className={local === 'en'
          ? classes.switchLang_btn
          : `${classes.switchLang_btn} ${classes.brit}`}
        type="button"
        disabled={local === 'en'}
      >
        <img src={brit} alt="br" />
      </button>
      <button
        onClick={() => changeLang('ru')}
        className={local === 'ru'
          ? classes.switchLang_btn
          : `${classes.switchLang_btn} ${classes.rus}`}
        type="button"
        disabled={local === 'ru'}
      >
        <img src={rus} alt="ru" />
      </button>
    </div>
  );
};

export default SwitchLang;
