import React from 'react'
import classes from '../css/Options.module.css';
import PropTypes from 'prop-types';

const ScreenEightOptions = ({ options, screenEightOptionsToggle }) => (
   <>
      {options.map(({ id, option, price, active }, index) =>
         <div onClick={() => screenEightOptionsToggle(index)} key={id} className={!active ? classes.options : `${classes.options} ${classes.actives}`}>
            <div className={!active ? classes.option : `${classes.option} ${classes.active}`}>{option}</div>
            <div className={classes.option_price}>+${price.toFixed(2)}</div>
         </div>
      )}
   </>
)
ScreenEightOptions.propTypes = {
   options: PropTypes.array,
   screenEightOptionsToggle: PropTypes.func,
}

export default ScreenEightOptions;


