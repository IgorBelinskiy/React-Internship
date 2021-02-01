import React from 'react';
import classes from './Header.module.css';
import inst from './img/logo-inst.png';
import tel from './img/logo-tel.png';
import gh from './img/logo-github.png';


const Header = () => {
   return <header className={classes.header}>
      <div className={classes.header_title}>
         <div className={classes.title_links}>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
               <img src={inst} alt="instagram"></img>
            </a>
            <a href="https://t.me/IgorBelinskiy" target="_blank" rel="noreferrer">
               <img src={tel} alt="telegram"></img>
            </a>
            <a href="https://github.com/IgorBelinskiy?tab=repositories" target="_blank" rel="noreferrer">
               <img src={gh} alt="github"></img>
            </a>
         </div>
         <div className={classes.title_description}>
            React Internship
               </div>
      </div>
      <div lang='ru' className={classes.header_text}>
         Базовые понятия HTML, CSS, git, node, npm.
            </div>
   </header>;
}

export default Header;