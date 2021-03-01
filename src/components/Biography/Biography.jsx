import React from 'react';
import classes from './Biography.module.css';
import TableBody from './TableBody/TableBody';



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
   addPost(data, state) {
      if (data.year === 0 || isNaN(data.year) || data.event === '') {
         alert('Введите корректные данные!!!')
      } else {
         let newEvent = {
            id: state.length + 1,
            ...data,
         }
         let newBiographyData = [...state, newEvent];
         console.log(newBiographyData);
         console.log(this.state.biographyData);
      }

   },
   deleteLastPost(state) {
      let newBiographyData = [...state];
      newBiographyData.splice(-1, 1);
      console.log(newBiographyData);
      console.log(this.state.biographyData);
   },
   deleteSelectedItem(index, state) {
      let newBiographyData = [...state];
      newBiographyData.splice(index, 1);
      console.log(newBiographyData);
      console.log(this.state.biographyData);
   },
   toMax(state) {
      let newBiographyData = [...state];
      newBiographyData.sort((a, b) => a.year - b.year);
      console.log(newBiographyData);
      console.log(this.state.biographyData);
   },
   toMin(state) {
      let newBiographyData = [...state];
      newBiographyData.sort((a, b) => b.year - a.year);
      console.log(newBiographyData);
      console.log(this.state.biographyData);
   },
   minMax(state, type) {
      let newBiographyData = [...state];
      (type === true) ? newBiographyData.sort((a, b) => a.year - b.year) : newBiographyData.sort((a, b) => b.year - a.year);
      console.log(newBiographyData);
      console.log(this.state.biographyData);
      parameter = !parameter;
      // this.state.type = !this.state.type;
   },
   rndm(state) {
      let newBiographyData = [...state];
      let i, j, k;
      for (i = newBiographyData.length - 1; i > 0; i--) {
         j = Math.floor(Math.random() * i);
         k = newBiographyData[i];
         newBiographyData[i] = newBiographyData[j];
         newBiographyData[j] = k;
      }
      console.log(newBiographyData)
      console.log(this.state.biographyData);
   },
   bubbleSort(state) {
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
      console.log(newBiographyData)
      console.log(this.state.biographyData);
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
         state={biographyData} />)

   let newYearEl = React.createRef();
   let newEventEl = React.createRef();

   const onAddItemBiography = (state) => {
      let data = {
         year: +newYearEl.current.value,
         event: newEventEl.current.value,
      };
      biographyObj.addPost(data, state);
   };


   return (
      <div className={classes.biography}>
         <div className={classes.biography_title}></div>
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
                  <button onClick={() => { biographyObj.deleteLastPost(biographyData) }} className={classes.del_btn}>Delete last event in list</button>
               </div>
               <div className={classes.form_action}>
                  <div className={classes.action_title}>Сортировка данных</div>
                  <div className={classes.action_items}>
                     <div onClick={() => { biographyObj.toMax(biographyData) }} className={classes.items}>#1</div>
                     <div onClick={() => { biographyObj.toMin(biographyData) }} className={classes.items}>#2</div>
                     <div onClick={() => { biographyObj.minMax(biographyData, parameter) }} className={classes.items}>#3</div>
                     <div onClick={() => { biographyObj.rndm(biographyData) }} className={classes.items}>#4</div>
                     <div onClick={() => { biographyObj.bubbleSort(biographyData) }} className={classes.items}>#5</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}


export default Biography;

