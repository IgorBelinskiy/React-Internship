import React from 'react';
import PropTypes from 'prop-types';
import classes from '../css/Options.module.css';

const ScreenFirstOptions = ({ options, toggleOptions }) => (
  <>
    {options.map((el, index) => (
      <div
        aria-hidden="true"
        key={el.id}
        onClick={() => toggleOptions(index)}
        className={!el.isActive ? classes.options : `${classes.options} ${classes.actives}`}
      >
        <div className={!el.isActive ? classes.option : `${classes.option} ${classes.active}`}>
          {el.option}
        </div>
        <div className={classes.option_price}>
          {`+$ ${el.price.toFixed(2)}`}
        </div>
      </div>
    ))}
  </>
);
ScreenFirstOptions.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  toggleOptions: PropTypes.func.isRequired
};

export default ScreenFirstOptions;
