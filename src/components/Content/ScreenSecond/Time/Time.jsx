import React from 'react';
import classes from './Time.module.css';
import PropTypes from 'prop-types';

const Time = ({ time1, time2 }) => {
   return (
      <div className={classes.time_wrapper}>
         <div className={classes.time_day}>{time1} am</div>
         <div className={`${classes.time_day} ${classes.act}`}>{time2} pm</div>
      </div>
   )
}
Time.propTypes = {
   time1: PropTypes.string,
   time2: PropTypes.string,
}

export default Time;