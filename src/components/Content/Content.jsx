import React, { Component } from 'react';
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
import css1 from './img/css_1.png';
import css2 from './img/css_2.png';
import css3 from './img/css_3.png';
import ButtonHome from '../ButtonHome/ButtonHome';



class Content extends Component {
   state = {
      screenFirst: {
         itemSelected: {
            item: 'html',
            price: 9
         },
         isBtnActive: false,
      },
      screenSecond: {
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
      },
      screenThird: {
         subtotal: 5,
         tax: 0.15,
         total() {
            return this.subtotal + this.tax;
         }
      },
      screenFourth: {
         item: [
            { itemName: 'Hair Cut', price: 15, img: css1 },
            { itemName: 'Hair Wash', price: 12.7, img: css2 },
            { itemName: 'Buzz Cut', price: 18, img: css3 },
         ]
      },
      screenFifth: {
         date: 'Sunday, Apr 14th',
         price: 28.39,
      },
      screenEighth: {
         options: [
            { option: 'Wash', price: 6, active: false },
            { option: 'Buz Cut', price: 7.5, active: false },
            { option: 'X Cut', price: 6, active: true },
            { option: 'Y Cut', price: 6, active: false },
         ],
         isBtnActive: true,
      },
      screenNinth: {
         gitItems: [
            { value: 'checkout' },
            { value: 'add' },
            { value: 'commit' },
            { value: 'pull' },
            { value: 'push' },
         ]
      }
   }


   screenFirstBtnToggle() {
      this.setState({ ...this.state, screenFirst: { ...this.state.screenFirst, isBtnActive: !this.state.screenFirst.isBtnActive } })
   }

   screenEightBtnToggle() {
      this.setState({ ...this.state, screenEighth: { ...this.state.screenEighth, isBtnActive: !this.state.screenEighth.isBtnActive } })
   }

   screenEightOptionsToggle(index) {
      let updateScreenEight = this.state.screenEighth.options.map((option, id) => {
         if (index === id) {
            option.active = !option.active
         }
         return option
      })
      this.setState({ ...this.state, screenEighth: { ...this.state.screenEighth, options: updateScreenEight } })
   }


   render() {
      console.log(this.state)
      return (
         <div className={classes.content}>
            <div className={classes.content_body}>
               <div className={classes.body_columns}>
                  <ScreenFirst
                     screenFirstBtnToggle={this.screenFirstBtnToggle.bind(this)}
                     screenFirstData={this.state.screenFirst} />
                  <ScreenSecond screenSecondData={this.state.screenSecond} />
               </div>
               <div className={classes.body_columns}>
                  <ScreenThird screenThirdData={this.state.screenThird} />
                  <ScreenFourth screenFourthData={this.state.screenFourth} />
                  <ScreenFifth screenFifthData={this.state.screenFifth} />
               </div>
               <div className={classes.body_columns}>
                  <ScreenSixth />
                  <ScreenSeventh />
               </div>
               <div className={classes.body_columns}>
                  <ScreenEighth
                     screenEighthData={this.state.screenEighth}
                     screenEightOptionsToggle={this.screenEightOptionsToggle.bind(this)}
                     screenEightBtnToggle={this.screenEightBtnToggle.bind(this)} />
                  <ScreenNinth screenNinthData={this.state.screenNinth} />
               </div>
            </div>
            <ButtonHome />
         </div>
      )

   }

}

export default Content;