import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
   return <footer className={classes.footer}>
      <div className={classes.footer_title}>igor belinskiy</div>
      <div className={classes.footer_design}>
         <a href="https://dribbble.com/shots/11389109-Salon-App-Design" target="_blank" rel="noreferrer">design by dribbble</a>
      </div>
   </footer>
}

export default Footer;