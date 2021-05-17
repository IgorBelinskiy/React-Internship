import React from 'react';
import PropTypes from 'prop-types';
import classes from '../css/Options.module.css';

const ScreenEightOptions = ({ options, screenEightOptionsToggle }) => {
  return (
    <>
      {options.map(({
        id, option, price, active
      }, index) => (
        <div
          aria-hidden="true"
          onClick={() => screenEightOptionsToggle(index)}
          key={id}
          className={!active ? classes.options : `${classes.options} ${classes.actives}`}
        >
          <div className={!active ? classes.option : `${classes.option} ${classes.active}`}>{option}</div>
          <div>
            {`+$ ${price.toFixed(2)}`}
          </div>
        </div>
      ))}
    </>
  );
};

ScreenEightOptions.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  screenEightOptionsToggle: PropTypes.func.isRequired,
};

export default ScreenEightOptions;
