import React from 'react';
import classes from './SuggestedItem.module.css';
import PropTypes from 'prop-types';

const SuggestedItem = (props) => {
   return (
      <div className={classes.suggested_body}>
         <div className={classes.suggested_left}>
            <div className={classes.suggested_left_t}>
               {props.itemName}
            </div>
            <div className={classes.suggested_left_b}>
               $ {props.price.toFixed(2)}
            </div>
         </div>
         <div className={classes.suggested_medium}>
            <img src={props.img} alt=""></img>
         </div>
         <div className={classes.suggested_right}>
            <div className={classes.right_circle}></div>
         </div>
      </div>
   )
}
SuggestedItem.propTypes = {
   itemName: PropTypes.string,
   price: PropTypes.number,
   img: PropTypes.string
}

export default SuggestedItem;