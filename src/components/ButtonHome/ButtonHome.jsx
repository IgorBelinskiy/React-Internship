import React from 'react';
import { Link } from 'react-router-dom';
import { GiReturnArrow } from 'react-icons/gi';
import classes from './css/ButtonHome.module.css';

const ButtonHome = () => (
  <div className={classes.btn_home}>
    <Link to="/" className={classes.btn_text}>
      <GiReturnArrow />
    </Link>
  </div>
);
export default ButtonHome;
