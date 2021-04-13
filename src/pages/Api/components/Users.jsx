import React, { useState, useEffect } from 'react'
import '../css/User.css'
import User from './User'
import PropTypes from 'prop-types';


const Users = ({ users }) => {


   const [current, setCurrent] = useState(0)
   const [activeUser, setActiveUser] = useState({ isActiveUserTitle: false, isActiveItem: false })
   const length = users.length;



   const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1)
   const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1)

   const activeUserTitle = () => {
      setActiveUser(activeUser => ({ ...activeUser, isActiveUserTitle: !activeUser.isActiveUserTitle }))
   }


   const handleKeyDown = (e) => {
      if (e.code === 'KeyZ' && e.shiftKey) {
         setActiveUser(activeUser => ({ ...activeUser, isActiveItem: !activeUser.isActiveItem }))
      }
      if (e.code === 'KeyX' && e.shiftKey) {
         prevSlide()
      }
      if (e.code === 'KeyC' && e.shiftKey) {
         nextSlide()
      }
   };

   useEffect(() => {
      window.addEventListener('keydown', handleKeyDown);

      // cleanup this component
      return () => {
         window.removeEventListener('keydown', handleKeyDown);
      };
   });


   return (
      <div className='slider'>
         <User
            users={users}
            current={current}
            activeUser={activeUser}
            activeUserTitle={activeUserTitle}
            isActiveUserTitle={activeUser.isActiveUserTitle}
            isActiveItem={activeUser.isActiveItem}
            prevSlide={prevSlide}
            nextSlide={nextSlide} />
      </div>
   )
}

Users.propTypes = {
   users: PropTypes.array
}

export default Users;

