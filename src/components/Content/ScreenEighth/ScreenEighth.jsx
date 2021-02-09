import React from 'react';
import Options from './Options/Options';
import classes from './ScreenEighth.module.css';


const ScreenEighth = (props) => {
   let optionsElements = props.state.options
      .map((options) => <Options state={options} />)
   return (
      <div className={classes.screen_8}>
         <div className={classes.screen_8_container}>
            <div className={classes.screen_8_options}>
               {optionsElements}
            </div>
            <div className={classes.option_add}>Add more information</div>
            <div className={classes.html_button}>
               <div className={`${classes.html_btn} ${classes.html_btn_active}`}>Book</div>
            </div>
         </div>
      </div>
   )
}

export default ScreenEighth;