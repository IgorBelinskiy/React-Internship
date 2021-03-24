import React, { useState, useEffect } from 'react'
import './User.css'
import arrowLeft from '../../../assets/img/arrowleft.svg'
import arrowRight from '../../../assets/img/arrowright.svg'
import User from './User'




const Users = ({ users }) => {

   const [modal, setModal] = useState(false)
   const [current, setCurrent] = useState(0)
   const [activeUser, setActiveUser] = useState({ isActiveUserTitle: false, isActiveItem: false })
   const length = users.length;


   const toggleModal = () => {
      setModal(prev => !prev)
   }

   const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1)
   const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1)

   const activeUserTitle = () => {
      setActiveUser({ ...activeUser, isActiveUserTitle: !activeUser.isActiveUserTitle })
   }


   const handleKeyDown = (e) => {
      if (e.code === 'KeyZ' && e.shiftKey) {
         setActiveUser({ ...activeUser, isActiveItem: !activeUser.isActiveItem })
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
         <img className={modal ? 'c' : 'left'} src={arrowLeft} alt='left' onClick={prevSlide} />
         <img className={modal ? 'c' : 'right'} src={arrowRight} alt='right' onClick={nextSlide} />
         <User
            users={users}
            toggleModal={toggleModal}
            current={current}
            modal={modal}
            activeUser={activeUser}
            activeUserTitle={activeUserTitle} />
      </div>
   )
}

export default Users;

