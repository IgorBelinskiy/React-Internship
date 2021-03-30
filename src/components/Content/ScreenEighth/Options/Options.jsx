import React from 'react'
import classes from './Options.module.css';
import PropTypes from 'prop-types';

const Options = ({ options, screenEightOptionsToggle }) => {
   return (
      <>
         {options.map(({ option, price, active }, index) => {
            return (
               <div onClick={() => screenEightOptionsToggle(index)} key={index} className={!active ? classes.options : `${classes.options} ${classes.actives}`}>
                  <div className={!active ? classes.option : `${classes.option} ${classes.active}`}>{option}</div>
                  <div className={classes.option_price}>+${price.toFixed(2)}</div>
               </div>
            )
         })}
      </>
   )
}
Options.propTypes = {
   options: PropTypes.array,
   screenEightOptionsToggle: PropTypes.func,
}

export default Options;


// if (active === true) {
//    return (
//       <div className={`${classes.options} ${classes.actives}`}>
//          <div className={`${classes.option} ${classes.active}`}>{option}</div>
//          <div className={classes.option_price}>+${price.toFixed(2)}</div>
//       </div>
//    )
// } else {
//    return (
//       <div className={classes.options}>
//          <div className={classes.option}>{option}</div>
//          <div className={classes.option_price}>+${price.toFixed(2)}</div>
//       </div>
//    )
// }