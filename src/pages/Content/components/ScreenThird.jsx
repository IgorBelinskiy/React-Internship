import React from 'react';
import PropTypes from 'prop-types';
import classes from '../css/ScreenThird.module.css';

const ScreenThird = ({ screenThirdData }) => {
  const { subtotal, tax } = screenThirdData;
  return (
    <div className={classes.screen_3}>
      <div className={classes.screen_3_top}>
        <div className={classes.top_column}>
          <div>Subtotal</div>
          <div>Tax</div>
          <div className={classes.top_column_weight}>Total</div>
        </div>
        <div className={classes.top_column}>
          <div>
            {`$ ${subtotal.toFixed(2)}`}
          </div>
          <div>
            {`$ ${tax.toFixed(2)}`}
          </div>
          <div className={classes.top_column_weight}>
            {`$ ${screenThirdData.total().toFixed(2)}`}
          </div>
        </div>
      </div>
      <div className={classes.screen_3_bottom}>
        <div className={classes.bottom_checkout}>
          <div className={classes.checkout_item}>1</div>
          <div className={classes.checkout_item}>Checkout</div>
          <div className={classes.checkout_item}>
            {`$ ${screenThirdData.total().toFixed(2)}`}
          </div>
        </div>
      </div>
    </div>
  );
};
ScreenThird.propTypes = {
  screenThirdData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default ScreenThird;
