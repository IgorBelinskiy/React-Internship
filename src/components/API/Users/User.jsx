import React, { useState } from 'react'
import './User.css'
import userPhoto from '../../../assets/img/user.png'
import arrowLeft from '../../../assets/img/arrowleft.svg'
import arrowRight from '../../../assets/img/arrowright.svg'
import Modal from './Modal'



const User = ({ users }) => {

   const [modal, setModal] = useState(false)
   const [current, setCurrent] = useState(0)
   const length = users.length;

   const toggleModal = () => {
      setModal(prev => !prev)
   }

   const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1)
   const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1)

   const ArrowLeft = () => <img className={modal ? 'c' : 'left'} src={arrowLeft} alt='left' onClick={prevSlide} />
   const ArrowRight = () => <img className={modal ? 'c' : 'right'} src={arrowRight} alt='right' onClick={nextSlide} />


   return (
      <div className='slider'>
         <ArrowLeft />
         <ArrowRight />
         {users.map(({ photo, name, username, address, phone }, index) => {
            return (
               <div key={index} className={current === index ? 'slide active' : 'slide'}>
                  {index === current &&
                     (<div className='items'>
                        <div className='item'>
                           <img src={photo === undefined ? userPhoto : photo} alt="" />
                        </div>
                        <div className='modal-title'>{name}</div>
                        <button onClick={toggleModal}>More information</button>
                        <div className={modal ? 'mod act' : 'mod'}>
                           {modal ? <Modal
                              toggleModal={toggleModal}
                              username={username}
                              address={address}
                              phone={phone}
                           /> : null}
                        </div>
                     </div>
                     )}
               </div>
            )
         })}
      </div>
   )
}

export default User;