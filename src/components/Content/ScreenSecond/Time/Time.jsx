import React from 'react';
import classes from './Time.module.css';
import PropTypes from 'prop-types';

const Time = (props) => {
   return (
      <div className={classes.time_wrapper}>
         <div className={classes.time_day}>{props.timeOne} am</div>
         <div className={`${classes.time_day} ${classes.act}`}>{props.timeTwo} pm</div>
      </div>
   )
}
Time.propTypes = {
   timeOne: PropTypes.string,
   timeTwo: PropTypes.string,
}

export default Time;