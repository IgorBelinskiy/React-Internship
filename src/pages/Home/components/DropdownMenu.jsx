import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from '../css/DropdownMenu.module.css';

const DropdownMenu = ({ to, setDropdown, text }) => (
  <div aria-hidden="true" onClick={() => setDropdown(false)}>
    <Link to={to} className={classes.dropdown_item}>
      {text}
    </Link>
  </div>
);

DropdownMenu.propTypes = {
  setDropdown: PropTypes.func.isRequired,
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default DropdownMenu;
