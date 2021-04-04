import React from 'react';
import classes from '../css/SuggestedItem.module.css';
import PropTypes from 'prop-types';

const SuggestedItem = ({ item }) => {
   return (
      <>
         {item.map(({ itemName, price, img }, index) => {
            return (
               <div key={index} className={classes.suggested_body}>
                  <div className={classes.suggested_left}>
                     <div className={classes.suggested_left_t}>
                        {itemName}
                     </div>
                     <div className={classes.suggested_left_b}>
                        $ {price.toFixed(2)}
                     </div>
                  </div>
                  <div className={classes.suggested_medium}>
                     <img src={img} alt=""></img>
                  </div>
                  <div className={classes.suggested_right}>
                     <div className={classes.right_circle}></div>
                  </div>
               </div>
            )
         })}
      </>
   )
}

SuggestedItem.propTypes = {
   item: PropTypes.array,
}

export default SuggestedItem;