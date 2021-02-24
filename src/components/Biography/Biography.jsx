import React from 'react';
import classes from './Biography.module.css';
import TableBody from './TableBody/TableBody';



const Biography = () => {

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
      addPost(data) {
         let newEvent = {
            id: this.state.biographyData.length + 1,
            // year: postMessage.year,
            // event: postMessage.event,
            ...data,
         }
         this.state.biographyData.push(newEvent);
         console.log(this.state.biographyData);
      },
      deleteLastPost() {
         this.state.biographyData.splice(-1, 1);
         console.log(this.state.biographyData);
      },
      deleteSelectedItem(index) {
         this.state.biographyData.splice(index, 1);
         console.log(this.state.biographyData);
      },
      toMax() {
         this.state.biographyData.sort((a, b) => a.year - b.year);
         console.log(this.state.biographyData);
      },
      toMin() {
         this.state.biographyData.sort((a, b) => b.year - a.year);
         console.log(this.state.biographyData);
      },
      minMax(type = this.state.type) {
         (type === true) ? this.state.biographyData.sort((a, b) => a.year - b.year) : this.state.biographyData.sort((a, b) => b.year - a.year);
         console.log(this.state.biographyData);
         this.state.type = !this.state.type;
      },
      rndm() {
         let i, j, k;
         for (i = this.state.biographyData.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * i);
            k = this.state.biographyData[i];
            this.state.biographyData[i] = this.state.biographyData[j];
            this.state.biographyData[j] = k;
         }
         console.log(this.state.biographyData);
      },
      bubbleSort() {
         for (let n = 0; n < this.state.biographyData.length; n++) {
            for (let i = 0; i < this.state.biographyData.length - 1 - n; i++) {
               if (this.state.biographyData[i].year > this.state.biographyData[i + 1].year) {
                  const buff = this.state.biographyData[i];
                  this.state.biographyData[i] = this.state.biographyData[i + 1];
                  this.state.biographyData[i + 1] = buff;
               }
            }
         }
         let updateBiographyData = this.state.biographyData.map((el, index) => {
            return {
               id: index + 1,
               year: el.year,
               event: el.event,
            }
         })
         this.state.biographyData = updateBiographyData;
         console.log(this.state.biographyData);
      },
      getState() {
         return this.state;
      },
   };



   const itemDelete = (index) => {
      biographyObj.deleteSelectedItem(index);
   };
   let biographyElement = biographyObj.getState().biographyData
      .map((el, index) => <TableBody
         deleteSelectedItem={itemDelete}
         key={el.id}
         index={index}
         year={el.year}
         event={el.event} />)

   let newYearEl = React.createRef();
   let newEventEl = React.createRef();

   const onAddItemBiography = () => {
      let data = {
         year: +newYearEl.current.value,
         event: newEventEl.current.value,
      };
      if (data.year === 0 || isNaN(data.year) || data.event === '') {
         alert('Введите корректные данные!!!')
      } else {
         biographyObj.addPost(data);
      }
   };
   const onDelLastItemBiography = () => {
      biographyObj.deleteLastPost();
   };
   const onToMaxByYear = () => {
      biographyObj.toMax();
   };
   const onToMinByYear = () => {
      biographyObj.toMin();
   };

   const onMinMaxByYear = () => {
      biographyObj.minMax();
   };
   const onRandom = () => {
      biographyObj.rndm();
   };
   const onBubbleSort = () => {
      biographyObj.bubbleSort();
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
                  <button onClick={onAddItemBiography}>Add new event</button>
                  <button onClick={onDelLastItemBiography} className={classes.del_btn}>Delete last event in list</button>
               </div>
               <div className={classes.form_action}>
                  <div className={classes.action_title}>Сортировка данных</div>
                  <div className={classes.action_items}>
                     <div onClick={onToMaxByYear} className={classes.items}>#1</div>
                     <div onClick={onToMinByYear} className={classes.items}>#2</div>
                     <div onClick={onMinMaxByYear} className={classes.items}>#3</div>
                     <div onClick={onRandom} className={classes.items}>#4</div>
                     <div onClick={onBubbleSort} className={classes.items}>#5</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}


export default Biography;

