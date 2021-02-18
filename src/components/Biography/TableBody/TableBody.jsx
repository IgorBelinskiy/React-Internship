import React from 'react';
import classes from './TableBody.module.css'
import PropTypes from 'prop-types';

const TableBody = ({ index, year, event, itemDelete }) => {

   return (
      <div className={classes.table_body}>
         <div className={classes.body_number}>{++index}</div>
         <div className={classes.body_year}>{year}</div>
         <div className={classes.body_event}>{event}</div>
         <div onClick={() => itemDelete(index)} className={classes.event_del}>del</div>
      </div >
   )
}

TableBody.propTypes = {
   id: PropTypes.number,
   year: PropTypes.number,
   event: PropTypes.string,
   itemDelete: PropTypes.func,
}

export default TableBody;