import React from 'react';
import PropTypes from 'prop-types';
import classes from '../css/Footer.module.css';

const Footer = ({ t }) => (
  <footer className={classes.footer}>
    <div className={classes.footer_title}>{t('homePage.author')}</div>
    <div className={classes.footer_design}>
      <a href="https://dribbble.com/shots/11389109-Salon-App-Design" target="_blank" rel="noreferrer">
        {t('homePage.design')}
      </a>
    </div>
  </footer>
);
Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default Footer;
