import React from 'react';
import PropTypes from 'prop-types';
import classes from '../css/Options.module.css';

const ScreenFirstOptions = ({ options, screenFirstOptionsToggle }) => (
  <>
    {options.map((el, index) => (
      <div
        aria-hidden="true"
        key={el.id}
        onClick={() => screenFirstOptionsToggle(index)}
        className={!el.active ? classes.options : `${classes.options} ${classes.actives}`}
      >
        <div className={!el.active ? classes.option : `${classes.option} ${classes.active}`}>
          {el.option}
        </div>
        <div>
          {`+$ ${el.price.toFixed(2)}`}
        </div>
      </div>
    ))}
  </>
);
ScreenFirstOptions.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  screenFirstOptionsToggle: PropTypes.func.isRequired
};

export default ScreenFirstOptions;
