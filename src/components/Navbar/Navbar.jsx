import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';



const Navbar = () => {
   return <nav className={classes.nav}>
      <div className={classes.item}>
         <NavLink to='/bk' activeClassName={classes.activeLink}>Базовые понятия HTML, CSS, git, node, npm.</NavLink>
      </div>
      <div className={classes.item}>
         <NavLink to='/bio' activeClassName={classes.activeLink}>Biography</NavLink>
      </div>
   </nav>;
}

export default Navbar;