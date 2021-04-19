import React from 'react';
import { ImCross } from 'react-icons/im';
import PropTypes from 'prop-types';
import classes from '../css/TableBody.module.css';

const TableBody = ({
  index, year, event, deleteSelectedItem, state, isActive
}) => (
  <div className={classes.table_body}>
    <div className={classes.body_number}>{index + 1}</div>
    <div className={!isActive ? classes.body_year : `${classes.body_year} ${classes.body_year_active}`}>{year}</div>
    <div className={!isActive ? classes.body_event : `${classes.body_event} ${classes.body_event_active}`}>{event}</div>
    <div aria-hidden="true" onClick={() => { deleteSelectedItem(index, state); }} className={classes.event_del}>
      <ImCross />
    </div>
  </div>
);

TableBody.propTypes = {
  index: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  event: PropTypes.string.isRequired,
  deleteSelectedItem: PropTypes.func.isRequired,
  state: PropTypes.PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  isActive: PropTypes.bool.isRequired
};

export default TableBody;
