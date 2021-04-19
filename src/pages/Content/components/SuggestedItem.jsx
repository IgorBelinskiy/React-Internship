import React from 'react';
import PropTypes from 'prop-types';
import classes from '../css/SuggestedItem.module.css';

const SuggestedItem = ({ item }) => {
  const circle = <div className={classes.right_circle} />;
  return (
    <>
      {item.map(({
        id, itemName, price, img
      }) => (
        <div key={id} className={classes.suggested_body}>
          <div className={classes.suggested_left}>
            <div className={classes.suggested_left_t}>
              {itemName}
            </div>
            <div className={classes.suggested_left_b}>
              {`$ ${price.toFixed(2)}`}
            </div>
          </div>
          <div className={classes.suggested_medium}>
            <img src={img} alt="" />
          </div>
          <div className={classes.suggested_right}>
            {circle}
          </div>
        </div>
      ))}
    </>
  );
};

SuggestedItem.propTypes = {
  item: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default SuggestedItem;
