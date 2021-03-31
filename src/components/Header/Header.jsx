import React from 'react';
import classes from './Header.module.css';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
import DropdownMenu from '../Home/DropdownMenu/DropdownMenu';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ click, dropdown, handleClick, onMouseEnter, onMouseLeave, setDropdown }) => {


   return <header className={classes.header}>
      <div className={classes.header_title}>
         <div className={classes.title_links}>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
               <AiFillInstagram className={classes.icon} />
            </a>
            <a href="https://t.me/IgorBelinskiy" target="_blank" rel="noreferrer">
               <FaTelegramPlane className={classes.icon} />
            </a>
            <a href="https://github.com/IgorBelinskiy?tab=repositories" target="_blank" rel="noreferrer">
               <AiFillGithub className={classes.icon} />
            </a>
         </div>
         <div className={classes.menu_icon} onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
         </div>
         <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={classes.title_description}>
            <div className={classes.description}>
               {!dropdown
                  ? <i className='fas fa-caret-down' />
                  : <i className='fas fa-caret-up' />} React Internship
            </div>
            {dropdown && <DropdownMenu setDropdown={setDropdown} />}
         </div>
      </div>
      <div onClick={handleClick} className={click ? `${classes.mobile_menu} ${classes.mobile_menu_active}` : classes.mobile_menu}>
         <div className={classes.mobile_menu_wrapper}>
            <div className={classes.mobile_links}>
               <Link to='/bk' className={classes.mobile_link}>basic knowledge</Link>
               <Link to='/bio' className={classes.mobile_link}>biography</Link>
               <Link to='/api' className={classes.mobile_link}>api</Link>
            </div>
         </div>
      </div>
   </header >;
}
Header.propTypes = {
   click: PropTypes.bool,
   dropdown: PropTypes.bool,
   handleClick: PropTypes.func,
   onMouseEnter: PropTypes.func,
   onMouseLeave: PropTypes.func,
   setDropdown: PropTypes.func,
}

export default Header;