import React from 'react';
import classes from './TableBody.module.css'
import PropTypes from 'prop-types';

const TableBody = ({ index, year, event, deleteSelectedItem, state, consoleLog }) => {

   return (
      <div className={classes.table_body}>
         <div className={classes.body_number}>{index + 1}</div>
         <div className={classes.body_year}>{year}</div>
         <div className={classes.body_event}>{event}</div>
         <div onClick={() => { deleteSelectedItem(index, state, consoleLog) }} className={classes.event_del}>del</div>
      </div >
   )
}

TableBody.propTypes = {
   id: PropTypes.number,
   year: PropTypes.number,
   event: PropTypes.string,
   deleteSelectedItem: PropTypes.func,
   state: PropTypes.array
}

export default TableBody;