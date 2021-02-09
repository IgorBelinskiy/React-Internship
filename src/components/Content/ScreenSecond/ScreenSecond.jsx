import React from 'react';
import classes from './ScreenSecond.module.css';
import light from '../img/light.png';
import star from '../img/star.png';
import pp from '../img/person-photo.png';
import PropTypes from 'prop-types';

const ScreenSecond = (props) => {
   console.log()
   return (
      <div className={classes.screen_2}>
         <div className={classes.screen_2_image}>
            <img src={light} alt=""></img>
         </div>
         <div className={classes.screen_2_container}>
            <div className={classes.screen_2_title}>
               Ibrahim's Barbershop
               </div>
            <div className={classes.screen_2_cuts}>
               <div className={classes.mens_cuts}>
                  <div>Men's Cuts</div>
                  <div className={classes.cuts_price}>$ {props.mensCuts.cutsPrice.toFixed(2)}</div>
               </div>
               <div className={classes.appointed}>
                  <div>Appointed to:</div>
                  <div>{props.mensCuts.appointedTo}</div>
               </div>
               <div className={classes.appointed_time}>
                  <div>time:</div>
                  <div>{props.mensCuts.time}</div>
               </div>
            </div>
            <div className={classes.screen_2_addmore}>
               Add More Service
               </div>
            <div className={classes.screen_2_info}>
               <div className={classes.info_person}>
                  <div className={classes.person_name}>{props.infoPerson}</div>
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
               <div className={classes.available_day}>{props.available}</div>
            </div>
            <div className={classes.screen_2_time}>
               <div className={classes.time_wrapper}>
                  <div className={classes.time_day}>{props.timeDay[0].time} am</div>
                  <div className={`${classes.time_day} ${classes.act}`}>{props.timeDay[1].time} pm</div>
               </div>
               <div className={classes.time_wrapper}>
                  <div className={classes.time_day}>{props.timeDay[2].time} am</div>
                  <div className={classes.time_day}>{props.timeDay[3].time} pm</div>
               </div>
               <div className={classes.time_wrapper}>
                  <div className={`${classes.time_day} ${classes.act}`}>{props.timeDay[4].time} am</div>
                  <div className={classes.time_day}>{props.timeDay[5].time} am</div>
               </div>
               <div className={classes.time_wrapper}>
                  <div className={`${classes.time_day} ${classes.act}`}>{props.timeDay[6].time} pm</div>
                  <div className={`${classes.time_day} ${classes.act_1}`}>{props.timeDay[7].time} pm</div>
               </div>
            </div>
         </div>
      </div>
   )
}
ScreenSecond.propTypes = {
   mensCuts: PropTypes.object,
   infoPerson: PropTypes.string,
   available: PropTypes.string,
   timeDay: PropTypes.array,
}

export default ScreenSecond;