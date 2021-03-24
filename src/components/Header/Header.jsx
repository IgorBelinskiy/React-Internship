import React, { useState } from 'react';
import classes from './Header.module.css';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
import DropdownMenu from '../Home/DropdownMenu/DropdownMenu';

const Header = () => {

   const [dropdown, setDropdown] = useState(false)

   const onMouseEnter = () => {
      if (window.innerWidth < 960) {
         setDropdown(false)
      } else {
         setDropdown(true)
      }
   }
   const onMouseLeave = () => {
      if (window.innerWidth < 960) {
         setDropdown(false)
      } else {
         setDropdown(false)
      }
   }

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
      <div className={classes.header_text}>
      </div>
   </header>;
}

export default Header;