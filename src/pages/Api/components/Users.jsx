import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../css/User.css';
import User from './User';

const Users = ({ users }) => {
  const [current, setCurrent] = useState(0);
  const [activeUser, setActiveUser] = useState({ isActiveUserTitle: false, isActiveItem: false });
  const arrLength = users.length;

  const nextSlide = () => setCurrent(current === arrLength - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? arrLength - 1 : current - 1);

  const activeUserTitle = () => {
    setActiveUser(() => ({ ...activeUser, isActiveUserTitle: !activeUser.isActiveUserTitle }));
  };

  const handleKeyDown = (e) => {
    if (e.code === 'KeyZ' && e.shiftKey) {
      setActiveUser(() => ({ ...activeUser, isActiveItem: !activeUser.isActiveItem }));
    }
    if (e.code === 'KeyX' && e.shiftKey) {
      prevSlide();
    }
    if (e.code === 'KeyC' && e.shiftKey) {
      nextSlide();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div className="slider">
      <User
        users={users}
        current={current}
        activeUser={activeUser}
        activeUserTitle={activeUserTitle}
        isActiveUserTitle={activeUser.isActiveUserTitle}
        isActiveItem={activeUser.isActiveItem}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default Users;
