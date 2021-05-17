import React, { useContext } from 'react';
import { Switch } from 'antd';
import { FaMoon } from 'react-icons/fa';
import { BsSun } from 'react-icons/bs';
import classes from './css/SwitchDayNight.module.css';
import 'antd/dist/antd.css';
import { SwitchContext } from '../../context';

const SwitchDayNight = () => {
  const { theme, toggleTheme } = useContext(SwitchContext);
  const defaultChecked = theme === 'day';
  return (
    <div
      className={theme === 'night'
        ? classes.switchDayNight_container
        : `${classes.switchDayNight_container} ${classes.day}`}
    >
      <div>
        <Switch defaultChecked={defaultChecked} onChange={toggleTheme} />
      </div>
      <div className={classes.switchDayNight_img}>
        {theme === 'night'
          ? <FaMoon className={classes.moon} />
          : <BsSun className={classes.sun} />}
      </div>
    </div>
  );
};

export default SwitchDayNight;
