import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Biography.module.css';
import TableBody from './TableBody/TableBody';
import { GiReturnArrow } from 'react-icons/gi';


let parameter = true;
const biographyObj = {
   state: {
      biographyData: [
         { id: 1, year: 1992, event: 'Рождение' },
         { id: 2, year: 1994, event: 'Детский сад' },
         { id: 3, year: 1999, event: 'Школа' },
         { id: 4, year: 2009, event: 'Университет' },
         { id: 5, year: 2015, event: 'Окончание учебы' },
      ],
      type: true,
   },
   addPost(data, state, f) {
      if (data.year === 0 || isNaN(data.year) || data.event === '') {
         alert('Введите корректные данные!!!')
      } else {
         let newEvent = {
            id: state.length + 1,
            ...data,
         }
         let newBiographyData = [...state, newEvent];
         f(state, newBiographyData)
         return newBiographyData;
      }
   },
   deleteLastPost(state, f) {
      let newBiographyData = [...state];
      newBiographyData.splice(-1, 1);
      f(state, newBiographyData)
      return newBiographyData;
   },
   deleteSelectedItem(index, state, f) {
      let newBiographyData = [...state];
      newBiographyData.splice(index, 1);
      f(state, newBiographyData)
      return newBiographyData;
   },
   toMax(state, f) {
      let newBiographyData = [...state];
      newBiographyData.sort((a, b) => a.year - b.year);
      f(state, newBiographyData)
      return newBiographyData;
   },
   toMin(state, f) {
      let newBiographyData = [...state];
      newBiographyData.sort((a, b) => b.year - a.year);
      f(state, newBiographyData)
      return newBiographyData;
   },
   minMax(state, type, f) {
      let newBiographyData = [...state];
      (type === true) ? newBiographyData.sort((a, b) => a.year - b.year) : newBiographyData.sort((a, b) => b.year - a.year);
      parameter = !parameter;
      // this.state.type = !this.state.type;
      f(state, newBiographyData)
      return newBiographyData;
   },
   rndm(state, f) {
      let newBiographyData = [...state];
      let i, j, k;
      for (i = newBiographyData.length - 1; i > 0; i--) {
         j = Math.floor(Math.random() * i);
         k = newBiographyData[i];
         newBiographyData[i] = newBiographyData[j];
         newBiographyData[j] = k;
      }
      f(state, newBiographyData)
      return newBiographyData;
   },
   bubbleSort(state, f) {
      let newBiographyData = [...state];
      for (let n = 0; n < newBiographyData.length; n++) {
         for (let i = 0; i < newBiographyData.length - 1 - n; i++) {
            if (newBiographyData[i].year < newBiographyData[i + 1].year) {
               const buff = newBiographyData[i];
               newBiographyData[i] = newBiographyData[i + 1];
               newBiographyData[i + 1] = buff;
            }
         }
      }
      f(state, newBiographyData)
      return newBiographyData;
   },
   consoleLog(oldObj, newObj) {
      return console.log(oldObj, newObj)
   },
   getState() {
      return this.state;
   },
};


const Biography = () => {

   let { biographyData } = biographyObj.getState();

   let biographyElement = biographyData
      .map((el, index) => <TableBody
         deleteSelectedItem={biographyObj.deleteSelectedItem.bind(biographyObj)}
         key={el.id}
         index={index}
         year={el.year}
         event={el.event}
         state={biographyData}
         consoleLog={biographyObj.consoleLog} />)

   let newYearEl = React.createRef();
   let newEventEl = React.createRef();

   const onAddItemBiography = (state) => {
      let data = {
         year: +newYearEl.current.value,
         event: newEventEl.current.value,
      };
      biographyObj.addPost(data, state, biographyObj.consoleLog);
   };


   return (
      <div className={classes.biography}>
         <div className={classes.biography_wrapper}>
            <div className={classes.table}>
               <div className={classes.table_title}>
                  <div className={classes.title_number}>#</div>
                  <div className={classes.title_year}>Year</div>
                  <div className={classes.title_event}>Event in life</div>
               </div>
               {
                  biographyElement
               }
               <div className={classes.form}>
                  <div className={classes.form_input}>
                     <textarea ref={newYearEl} placeholder='Введите год'></textarea>
                     <textarea ref={newEventEl} placeholder='Введите событие'></textarea>
                  </div>
                  <div className={classes.form_button}>
                     <button onClick={() => { onAddItemBiography(biographyData) }}>Add new event</button>
                     <button onClick={() => { biographyObj.deleteLastPost(biographyData, biographyObj.consoleLog) }} className={classes.del_btn}>Delete last event in list</button>
                  </div>
                  <div className={classes.form_action}>
                     <div className={classes.action_title}>Сортировка данных</div>
                     <div className={classes.action_items}>
                        <div onClick={() => { biographyObj.toMax(biographyData, biographyObj.consoleLog) }} className={classes.items}>#1</div>
                        <div onClick={() => { biographyObj.toMin(biographyData, biographyObj.consoleLog) }} className={classes.items}>#2</div>
                        <div onClick={() => { biographyObj.minMax(biographyData, parameter, biographyObj.consoleLog) }} className={classes.items}>#3</div>
                        <div onClick={() => { biographyObj.rndm(biographyData, biographyObj.consoleLog) }} className={classes.items}>#4</div>
                        <div onClick={() => { biographyObj.bubbleSort(biographyData, biographyObj.consoleLog) }} className={classes.items}>#5</div>
                     </div>
                  </div>
               </div>
            </div>
            <div className={classes.btn_home}>
               <Link to='/' className={classes.btn_text}><GiReturnArrow /></Link>
            </div>
         </div>

      </div>
   )
}


export default Biography;

