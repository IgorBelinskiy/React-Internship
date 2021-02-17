import React from 'react';
import classes from './Content.module.css';
import ScreenFirst from './ScreenFirst/ScreenFirst';
import ScreenSecond from './ScreenSecond/ScreenSecond';
import ScreenThird from './ScreenThird/ScreenThird';
import ScreenFourth from './ScreenFourth/ScreenFourth';
import ScreenFifth from './ScreenFifth/ScreenFifth';
import ScreenSixth from './ScreenSixth/ScreenSixth';
import ScreenSeventh from './ScreenSeventh/ScreenSeventh';
import ScreenEighth from './ScreenEighth/ScreenEighth';
import ScreenNinth from './ScreenNinth/ScreenNinth';


const Content = () => {
   return <div className={classes.content}>
      <div className={classes.content_body}>
         <div className={classes.body_columns}>
            <ScreenFirst />
            <ScreenSecond />
         </div>
         <div className={classes.body_columns}>
            <ScreenThird />
            <ScreenFourth />
            <ScreenFifth />
         </div>
         <div className={classes.body_columns}>
            <ScreenSixth />
            <ScreenSeventh />
         </div>
         <div className={classes.body_columns}>
            <ScreenEighth />
            <ScreenNinth />
         </div>
      </div>
   </div>
}

export default Content;