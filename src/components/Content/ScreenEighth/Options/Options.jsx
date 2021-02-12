import React from 'react'
import classes from './Options.module.css';
import PropTypes from 'prop-types';

const Options = (props) => {
   if (props.active === true) {
      return (
         <div className={`${classes.options} ${classes.actives}`}>
            <div className={`${classes.option} ${classes.active}`}>{props.options}</div>
            <div className={classes.option_price}>+${props.price.toFixed(2)}</div>
         </div>
      )
   } else {
      return (
         <div className={classes.options}>
            <div className={classes.option}>{props.options}</div>
            <div className={classes.option_price}>+${props.price.toFixed(2)}</div>
         </div>
      )
   }
}
Options.propTypes = {
   options: PropTypes.string,
   price: PropTypes.number,
}

export default Options;