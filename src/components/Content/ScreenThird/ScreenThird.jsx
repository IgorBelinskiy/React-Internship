import React from 'react';
import classes from './ScreenThird.module.css';
import PropTypes from 'prop-types';


const ScreenThird = (props) => {
   return (
      <div className={classes.screen_3}>
         <div className={classes.screen_3_top}>
            <div className={classes.top_column}>
               <div>Subtotal</div>
               <div>Tax</div>
               <div className={classes.top_column_weight}>Total</div>
            </div>
            <div className={classes.top_column}>
               <div>$ {props.subtotal.toFixed(2)}</div>
               <div>$ {props.tax.toFixed(2)}</div>
               <div className={classes.top_column_weight}>$ {props.total().toFixed(2)}</div>
            </div>
         </div>
         <div className={classes.screen_3_bottom}>
            <div className={classes.bottom_checkout}>
               <div className={classes.checkout_item}>1</div>
               <div className={classes.checkout_item}>Checkout</div>
               <div className={classes.checkout_item}>$ {props.total().toFixed(2)}</div>
            </div>
         </div>
      </div>
   )
}
ScreenThird.propTypes = {
   subtotal: PropTypes.number,
   tax: PropTypes.number,
   total: PropTypes.func,
}

export default ScreenThird;