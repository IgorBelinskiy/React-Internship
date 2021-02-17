import React from 'react';
import classes from './ScreenSecond.module.css';
import light from '../img/light.png';
import star from '../img/star.png';
import pp from '../img/person-photo.png';
import PropTypes from 'prop-types';
import Time from './Time/Time';

const screenSecondData = {
   title: "Ibrahim's Barbershop",
   mensCuts: {
      cutsPrice: 5,
      appointedTo: '',
      time: '',
   },
   infoPerson: 'Ibrahim Debbagh',
   available: 'Today',
   timeDay: [
      { time1: '08:30', time2: '02:30' },
      { time1: '02:30', time2: '12:20' },
      { time1: '03:30', time2: '11:30' },
      { time1: '05:30', time2: '15:30' },

   ]
}

const ScreenSecond = () => {
   const TimeElements = screenSecondData.timeDay
      .map((t) => <Time
         key={t.time1}
         timeOne={t.time1}
         timeTwo={t.time2}
      />)

   return (
      <div className={classes.screen_2}>
         <div className={classes.screen_2_image}>
            <img src={light} alt=""></img>
         </div>
         <div className={classes.screen_2_container}>
            <div className={classes.screen_2_title}>
               {screenSecondData.title}
            </div>
            <div className={classes.screen_2_cuts}>
               <div className={classes.mens_cuts}>
                  <div>Men's Cuts</div>
                  <div className={classes.cuts_price}>$ {screenSecondData.mensCuts.cutsPrice.toFixed(2)}</div>
               </div>
               <div className={classes.appointed}>
                  <div>Appointed to:</div>
                  <div>{screenSecondData.mensCuts.appointedTo}</div>
               </div>
               <div className={classes.appointed_time}>
                  <div>time:</div>
                  <div>{screenSecondData.mensCuts.time}</div>
               </div>
            </div>
            <div className={classes.screen_2_addmore}>
               Add More Service
               </div>
            <div className={classes.screen_2_info}>
               <div className={classes.info_person}>
                  <div className={classes.person_name}>{screenSecondData.infoPerson}</div>
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
               <div className={classes.available_day}>{screenSecondData.available}</div>
            </div>
            <div className={classes.screen_2_time}>
               {
                  TimeElements
               }
            </div>
         </div>
      </div>
   )
}
ScreenSecond.propTypes = {
   title: PropTypes.string,
   mensCuts: PropTypes.object,
   infoPerson: PropTypes.string,
   available: PropTypes.string,
   timeDay: PropTypes.array,
}

export default ScreenSecond;