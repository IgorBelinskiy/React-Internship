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


const Content = (props) => {
   return <div className={classes.content}>
      <div className={classes.content_body}>
         <div className={classes.body_columns}>
            <ScreenFirst
               itemSelected={props.state.screenFirstData.itemSelected}
               options={props.state.screenFirstData.options}
            />
            <ScreenSecond
               title={props.state.screenSecondData.title}
               mensCuts={props.state.screenSecondData.mensCuts}
               infoPerson={props.state.screenSecondData.infoPerson}
               available={props.state.screenSecondData.available}
               timeDay={props.state.screenSecondData.timeDay}
            />
         </div>
         <div className={classes.body_columns}>
            <ScreenThird
               subtotal={props.state.screenThirdData.subtotal}
               tax={props.state.screenThirdData.tax}
               total={props.state.screenThirdData.total}
            />
            <ScreenFourth item={props.state.screenFourthData.item} />
            <ScreenFifth data={props.state.screenFifthData} />
         </div>
         <div className={classes.body_columns}>
            <ScreenSixth />
            <ScreenSeventh />
         </div>
         <div className={classes.body_columns}>
            <ScreenEighth options={props.state.screenEighthData.options} />
            <ScreenNinth gitItems={props.state.screenNinthData.gitItems} />
         </div>
      </div>
   </div>
}

export default Content;