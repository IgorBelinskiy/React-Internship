import React from 'react'
import { Link } from 'react-router-dom';
import classes from './ButtonHome.module.css'
import { GiReturnArrow } from 'react-icons/gi';

const ButtonHome = () => {
   return (
      <div className={classes.btn_home}>
         <Link to='/' className={classes.btn_text}><GiReturnArrow /></Link>
      </div>
   )
}

export default ButtonHome