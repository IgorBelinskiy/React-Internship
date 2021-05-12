import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const HeaderContainer = ({ t }) => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <Header
      click={click}
      dropdown={dropdown}
      handleClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      setDropdown={setDropdown}
      t={t}
    />
  );
};
HeaderContainer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default HeaderContainer;
