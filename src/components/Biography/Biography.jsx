import React from 'react';
import classes from './Biography.module.css';
import TableBody from './TableBody/TableBody';

const Biography = () => {

   let biographyData = [
      { id: 1, year: 1992, event: 'Рождение' },
      { id: 2, year: 1994, event: 'Детский сад' },
      { id: 3, year: 1999, event: 'Школа' },
      { id: 4, year: 2009, event: 'Университет' },
      { id: 5, year: 2015, event: 'Окончание учебы' },
   ]


   let itemDelete = (index) => {
      biographyData.splice(--index, 1)
      console.log(biographyData)
   }

   let biographyElement = biographyData.map((el, index) => <TableBody itemDelete={itemDelete} key={el.id} index={index} year={el.year} event={el.event} />)

   let newYearEl = React.createRef();
   let newEventEl = React.createRef();

   const onAddItemBiography = () => {
      let data = {
         year: +newYearEl.current.value,
         event: newEventEl.current.value,
      }
      if (data.year === 0 || isNaN(data.year) || data.event === '') {
         alert('Введите корректные данные!!!')
      } else {
         let newItem = {
            id: biographyData.length + 1,
            year: data.year,
            event: data.event,
         }
         biographyData.splice(biographyData.length, 0, newItem);
         console.log(biographyData);
      }
   }

   const onDelLastItemBiography = () => {
      biographyData.splice(-1, 1)
      console.log(biographyData)
   }


   const onToMaxByYear = () => {
      biographyData.sort((a, b) => a.year - b.year);
      console.log(biographyData)
   }

   const onToMinByYear = () => {
      biographyData.sort((a, b) => b.year - a.year);
      console.log(biographyData)
   }



   let prop;
   const onMinMaxByYear = (type = false) => {
      (type === true) ? biographyData.sort((a, b) => a.year - b.year) : biographyData.sort((a, b) => b.year - a.year);
      console.log(biographyData)
      prop = !prop;
   }


   const onRandom = () => {
      let i, j, k;
      for (i = biographyData.length - 1; i > 0; i--) {
         j = Math.floor(Math.random() * i)
         k = biographyData[i]
         biographyData[i] = biographyData[j]
         biographyData[j] = k
      }
      console.log(biographyData);
   }


   const onBubbleSort = () => {
      for (let n = 0; n < biographyData.length; n++) {
         for (let i = 0; i < biographyData.length - 1 - n; i++) {
            if (biographyData[i].year > biographyData[i + 1].year) {
               const buff = biographyData[i]
               biographyData[i] = biographyData[i + 1]
               biographyData[i + 1] = buff
            }
         }
      }
      let updateBiographyData = biographyData.map((el, index) => {
         return {
            id: index + 1,
            year: el.year,
            event: el.event,
         }
      })
      biographyData = updateBiographyData;
      console.log(biographyData)
   }

   return (
      <div className={classes.biography}>
         <div className={classes.biography_title}>Biography</div>
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
                     <div onClick={() => onMinMaxByYear(prop)} className={classes.items}>#3</div>
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