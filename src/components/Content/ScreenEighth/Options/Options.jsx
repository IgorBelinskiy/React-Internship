import React from 'react'
import classes from './Options.module.css';

const Options = (props) => {
   return (
      <div className={classes.options}>
         <div className={classes.option}>{props.state.option}</div>
         <div className={classes.option_price}>+${props.state.price.toFixed(2)}</div>
      </div>
   )
}

export default Options;