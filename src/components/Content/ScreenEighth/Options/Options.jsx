import React from 'react'
import classes from './Options.module.css';
import PropTypes from 'prop-types';

const Options = ({ option, price, active }) => {
   if (active === true) {
      return (
         <div className={`${classes.options} ${classes.actives}`}>
            <div className={`${classes.option} ${classes.active}`}>{option}</div>
            <div className={classes.option_price}>+${price.toFixed(2)}</div>
         </div>
      )
   } else {
      return (
         <div className={classes.options}>
            <div className={classes.option}>{option}</div>
            <div className={classes.option_price}>+${price.toFixed(2)}</div>
         </div>
      )
   }
}
Options.propTypes = {
   option: PropTypes.string,
   price: PropTypes.number,
}

export default Options;