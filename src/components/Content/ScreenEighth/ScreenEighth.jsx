import React from 'react';
import Options from './Options/Options';
import classes from './ScreenEighth.module.css';
import PropTypes from 'prop-types';



const ScreenEighth = ({ screenEighthData, screenEightOptionsToggle, screenEightBtnToggle }) => {

   return (
      <div className={classes.screen_8}>
         <div className={classes.screen_8_container}>
            <div className={classes.screen_8_options}>
               <Options
                  options={screenEighthData.options}
                  screenEightOptionsToggle={screenEightOptionsToggle} />
            </div>
            <div className={classes.option_add}>Add more information</div>
            <div className={classes.html_button}>
               <div
                  onClick={screenEightBtnToggle}
                  className={screenEighthData.isBtnActive ? `${classes.html_btn} ${classes.html_btn_active}` : classes.html_btn}>Book</div>
            </div>
         </div>
      </div>
   )
}
ScreenEighth.propTypes = {
   screenEighthData: PropTypes.object,
   screenEightOptionsToggle: PropTypes.func,
   screenEightBtnToggle: PropTypes.func,
}

export default ScreenEighth;