import React from 'react'
import classes from '../css/Options.module.css';
import PropTypes from 'prop-types';

const ScreenFirstOptions = ({ options, toggleOptions }) => (
   <>
      {options.map((el, index) => (
         <div
            key={el.id}
            onClick={() => toggleOptions(index)}
            className={!el.isActive ? classes.options : `${classes.options} ${classes.actives}`}>
            <div className={!el.isActive ? classes.option : `${classes.option} ${classes.active}`}>{el.option}</div>
            <div className={classes.option_price}>+${el.price.toFixed(2)}</div>
         </div>
      ))}
   </>
)
ScreenFirstOptions.propTypes = {
   options: PropTypes.array,
   toggleOptions: PropTypes.func
}

export default ScreenFirstOptions;