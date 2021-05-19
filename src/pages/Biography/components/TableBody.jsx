import React from 'react';
import { ImCross } from 'react-icons/im';
import PropTypes from 'prop-types';
import classes from '../css/TableBody.module.css';

const TableBody = ({
  index, year, event, deleteSelectPost
}) => (
  <div className={classes.table_body}>
    <div className={classes.body_number}>{index + 1}</div>
    <div className={classes.body_year}>{year}</div>
    <div className={classes.body_event}>{event}</div>
    <div aria-hidden="true" onClick={() => { deleteSelectPost(index); }} className={classes.event_del}>
      <ImCross />
    </div>
  </div>
);

TableBody.propTypes = {
  index: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  event: PropTypes.string.isRequired,
  deleteSelectPost: PropTypes.func.isRequired,
};

export default TableBody;
