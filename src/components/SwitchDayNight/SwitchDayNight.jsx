import React from 'react';
import { Switch } from 'antd';
import { FaMoon } from 'react-icons/fa';
import { BsSun } from 'react-icons/bs';
import classes from './css/SwitchDayNight.module.css';
import 'antd/dist/antd.css';
import { SwitchConsumer } from '../../context';

const SwitchDayNight = () => (
  <SwitchConsumer>
    {({ isDay, toggleState }) => (
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
    )}
  </SwitchConsumer>
);

export default SwitchDayNight;
