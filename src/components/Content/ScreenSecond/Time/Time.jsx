import React from 'react';
import classes from './Time.module.css';
import PropTypes from 'prop-types';

const Time = ({ timeDay }) => {
   return (
      <>
         {timeDay.map(({ time1, time2 }, index) => {
            return (
               <div key={index} className={classes.time_wrapper}>
                  <div className={classes.time_day}>{time1} am</div>
                  <div className={`${classes.time_day} ${classes.act}`}>{time2} pm</div>
               </div>
            )
         })}
      </>
   )
}
Time.propTypes = {
   timeDay: PropTypes.array
}

export default Time;