import React from 'react';
import classes from './TableBody.module.css'

const TableBody = ({ index, year, event, itemDelete }) => {

   let delEven = () => {
      itemDelete(index)
   }

   return (
      <div className={classes.table_body}>
         <div className={classes.body_number}>{++index}</div>
         <div className={classes.body_year}>{year}</div>
         <div className={classes.body_event}>{event}</div>
         <div onClick={delEven} className={classes.event_del}>del</div>
      </div>
   )
}

export default TableBody;