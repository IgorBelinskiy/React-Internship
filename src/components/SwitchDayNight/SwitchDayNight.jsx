import React, { useContext } from 'react';
import { Switch } from 'antd';
import { FaMoon } from 'react-icons/fa';
import { BsSun } from 'react-icons/bs';
import classes from './css/SwitchDayNight.module.css';
import 'antd/dist/antd.css';
import { SwitchContext } from '../../context';

const SwitchDayNight = () => {
  const { isDay, toggleState } = useContext(SwitchContext);
  return (
    <div
      className={!isDay ? classes.switchDayNight_container : `${classes.switchDayNight_container} ${classes.day}`}
    >
      <div className={classes.switchDayNight_toggle}>
        <Switch defaultChecked={!!isDay} onChange={toggleState} />
      </div>
      <div className={classes.switchDayNight_img}>
        {!isDay
          ? <FaMoon className={classes.moon} />
          : <BsSun className={classes.sun} />}
      </div>
    </div>
  );
};

export default SwitchDayNight;
