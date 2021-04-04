import React from 'react';
import classes from '../css/ScreenSecond.module.css';
import light from '../../../assets/img/light.png';
import star from '../../../assets/img/star.png';
import pp from '../../../assets/img/person-photo.png';
import PropTypes from 'prop-types';
import Time from './Time';


const ScreenSecond = ({ screenSecondData }) => {

   const { title, mensCuts, infoPerson, available, timeDay } = screenSecondData;

   return (
      <div className={classes.screen_2}>
         <div className={classes.screen_2_image}>
            <img src={light} alt="light"></img>
         </div>
         <div className={classes.screen_2_container}>
            <div className={classes.screen_2_title}>
               {title}
            </div>
            <div className={classes.screen_2_cuts}>
               <div className={classes.mens_cuts}>
                  <div>Men's Cuts</div>
                  <div className={classes.cuts_price}>$ {mensCuts.cutsPrice.toFixed(2)}</div>
               </div>
               <div className={classes.appointed}>
                  <div>Appointed to:</div>
                  <div>{mensCuts.appointedTo}</div>
               </div>
               <div className={classes.appointed_time}>
                  <div>time:</div>
                  <div>{mensCuts.time}</div>
               </div>
            </div>
            <div className={classes.screen_2_addmore}>
               Add More Service
               </div>
            <div className={classes.screen_2_info}>
               <div className={classes.info_person}>
                  <div className={classes.person_name}>{infoPerson}</div>
                  <div className={classes.person_stars}>
                     <img src={star} alt=""></img>
                     <img src={star} alt=""></img>
                     <img src={star} alt=""></img>
                     <img src={star} alt=""></img>
                     <img src={star} alt=""></img>
                        ( 5 star )
                     </div>
               </div>
               <div className={classes.info_photo}>
                  <img src={pp} alt=""></img>
               </div>
            </div>
            <div className={classes.screen_2_available}>
               <div className={classes.available_title}>Available Time</div>
               <div className={classes.available_day}>{available}</div>
            </div>
            <div className={classes.screen_2_time}>
               <Time timeDay={timeDay} />
            </div>
         </div>
      </div>
   )
}
ScreenSecond.propTypes = {
   screenSecondData: PropTypes.object
}

export default ScreenSecond;