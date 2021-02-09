import React from 'react';
import Options from './Options/Options';
import classes from './ScreenEighth.module.css';
import PropTypes from 'prop-types';


const ScreenEighth = (props) => {
   let optionsElements = props.options
      .map((el) => <Options key={el.option} price={el.price} options={el.option} />)
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
ScreenEighth.propTypes = {
   options: PropTypes.array,
}

export default ScreenEighth;