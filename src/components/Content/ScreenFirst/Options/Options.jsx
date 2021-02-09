import React from 'react'
import classes from './Options.module.css';
import PropTypes from 'prop-types';

const Options = (props) => {
   return (
      <div className={classes.options}>
         <div className={classes.option}>{props.option}</div>
         <div className={classes.option_price}>+${props.price.toFixed(2)}</div>
      </div>
   )
}
Options.propTypes = {
   option: PropTypes.string,
   price: PropTypes.number,
}

export default Options;