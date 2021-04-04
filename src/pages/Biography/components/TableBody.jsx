import React from 'react';
import classes from '../css/TableBody.module.css'
import PropTypes from 'prop-types';
import { ImCross } from 'react-icons/im'

const TableBody = ({ index, year, event, deleteSelectedItem, state, isActive }) => (

   <div className={classes.table_body}>
      <div className={classes.body_number}>{index + 1}</div>
      <div className={!isActive ? classes.body_year : `${classes.body_year} ${classes.body_year_active}`}>{year}</div>
      <div className={!isActive ? classes.body_event : `${classes.body_event} ${classes.body_event_active}`}>{event}</div>
      <div onClick={() => { deleteSelectedItem(index, state) }} className={classes.event_del}>
         <ImCross />
      </div>
   </div >
)

TableBody.propTypes = {
   index: PropTypes.number,
   year: PropTypes.number,
   event: PropTypes.string,
   deleteSelectedItem: PropTypes.func,
   state: PropTypes.array,
   isActive: PropTypes.bool
}

export default TableBody;