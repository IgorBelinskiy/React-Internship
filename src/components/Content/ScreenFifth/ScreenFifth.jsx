import React from 'react';
import classes from './ScreenFifth.module.css';
import light from '../img/light.png';
import PropTypes from 'prop-types';



const ScreenFifth = ({ screenFifthData }) => {
   return (
      <div className={classes.screen_5}>
         <div className={classes.screen_5_image}>
            <img src={light} alt=""></img>
         </div>
         <div className={classes.screen_5_container}>
            <div className={classes.screen_5_order}>Orders</div>
            <div className={classes.order_text}>
               <div className={classes.order_l}>Past</div>
               <div className={classes.order_m}>Upcoming</div>
               <div className={classes.order_r}>Favoutites</div>
            </div>
            <div className={classes.order_footer}>
               <div className={classes.order_footer_column}>
                  <div className={classes.order_french}>French Crop...</div>
                  <div className={classes.order_data}>{screenFifthData.date}</div>
                  <div className={classes.order_kids}>Kids</div>
               </div>
               <div className={classes.order_footer_column}>$ {screenFifthData.price}</div>
            </div>
         </div>
      </div>
   )
}
ScreenFifth.propTypes = {
   screenFifthData: PropTypes.object,
}

export default ScreenFifth;