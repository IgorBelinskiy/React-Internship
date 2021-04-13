import React from 'react';
import classes from '../css/Header.module.css';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
import DropdownMenu from './DropdownMenu';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import withDropDownMenuItem from '../../../hoc/withDropDownMenuItem';



const Header = ({ click, dropdown, handleClick, onMouseEnter, onMouseLeave, setDropdown }) => {

   const CurrentItem = withDropDownMenuItem(DropdownMenu)

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
            {dropdown &&
               <div className={classes.dropdown_menu}>
                  {/* <DropdownMenu to='/bk' setDropdown={setDropdown} text='basic knowledge' />
                  <DropdownMenu to='/bio' setDropdown={setDropdown} text='biography' />
                  <DropdownMenu to='/api' setDropdown={setDropdown} text='api' /> */}
                  <CurrentItem to='/bk' setDropdown={setDropdown} text='basic knowledge' />
                  <CurrentItem to='/bio' setDropdown={setDropdown} text='biography' />
                  <CurrentItem to='/api' setDropdown={setDropdown} text='api' />
               </div>
            }
         </div>
      </div>
      <div
         onClick={handleClick}
         className={click
            ? `${classes.mobile_menu} ${classes.mobile_menu_active}`
            : classes.mobile_menu}>
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