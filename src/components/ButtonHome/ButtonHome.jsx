import React from 'react';
import { Link } from 'react-router-dom';
import { GiReturnArrow } from 'react-icons/gi';
import classes from './css/ButtonHome.module.css';

// eslint-disable-next-line react/prop-types
const ButtonHome = ({ reset }) => (
  <div className={classes.btn_home}>
    <Link to="/" onClick={reset} className={classes.btn_text}>
      <GiReturnArrow />
    </Link>
  </div>
);
export default ButtonHome;
