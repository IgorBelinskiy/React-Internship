import React from 'react';
import PropTypes from 'prop-types';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SwitchDayNight from '../../../components/SwitchDayNight/SwitchDayNight';
import DropdownMenu from './DropdownMenu';
import classes from '../css/Header.module.css';

const Header = ({
  click, dropdown, handleClick, onMouseEnter, onMouseLeave, setDropdown
}) => (
  <header className={classes.header}>
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
      <div className={classes.switchDayNight}>
        <SwitchDayNight />
      </div>
      <div
        aria-hidden="true"
        className={classes.menu_icon}
        onClick={handleClick}
      >
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={classes.title_description}
      >
        <div className={classes.description}>
          {!dropdown
            ? <i className="fas fa-caret-down" />
            : <i className="fas fa-caret-up" />}
          {' '}
          React Internship
        </div>
        {dropdown && (
          <div className={classes.dropdown_menu}>
            <DropdownMenu to="/bk" onClose={() => setDropdown(false)} text="basic knowledge" />
            <DropdownMenu to="/bio" onClose={() => setDropdown(false)} text="biography" />
            <DropdownMenu to="/api" onClose={() => setDropdown(false)} text="api" />
          </div>
        )}
      </div>
    </div>
    <div
      aria-hidden="true"
      onClick={handleClick}
      className={click
        ? `${classes.mobile_menu} ${classes.mobile_menu_active}`
        : classes.mobile_menu}
    >
      <div className={classes.mobile_menu_wrapper}>
        <div className={classes.mobile_links}>
          <Link to="/bk" className={classes.mobile_link}>basic knowledge</Link>
          <Link to="/bio" className={classes.mobile_link}>biography</Link>
          <Link to="/api" className={classes.mobile_link}>api</Link>
        </div>
      </div>
    </div>
  </header>
);
Header.propTypes = {
  click: PropTypes.bool.isRequired,
  dropdown: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  setDropdown: PropTypes.func.isRequired,
};

export default Header;
