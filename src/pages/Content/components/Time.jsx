import React from 'react';
import PropTypes from 'prop-types';
import classes from '../css/Time.module.css';

const Time = ({ timeDay }) => (
  <>
    {timeDay.map(({ time1, time2 }) => (
      <div key={time1} className={classes.time_wrapper}>
        <div className={classes.time_day}>
          {`${time1} am`}
        </div>
        <div className={`${classes.time_day} ${classes.act}`}>
          {`${time2} pm`}
        </div>
      </div>
    ))}
  </>
);
Time.propTypes = {
  timeDay: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default Time;
