import React from 'react';
import classes from './SuggestedItem.module.css';

const SuggestedItem = (props) => {
   return (
      <div className={classes.suggested_body}>
         <div className={classes.suggested_left}>
            <div className={classes.suggested_left_t}>
               {props.state.itemName}
            </div>
            <div className={classes.suggested_left_b}>
               $ {props.state.price.toFixed(2)}
            </div>
         </div>
         <div className={classes.suggested_medium}>
            <img src={props.state.img} alt=""></img>
         </div>
         <div className={classes.suggested_right}>
            <div className={classes.right_circle}></div>
         </div>
      </div>
   )
}

export default SuggestedItem;