import React from 'react'

const Modal = ({ toggleModal, username, address, phone }) => {
   return (
      <div className='modal-body'>
         <div className='modal-content'>
            <div className='modal-title'>USER DATA</div>
            <div className='modal-item'>{username}</div>
            <div className='modal-item'>city: {address.city}</div>
            <div className='modal-item'>street: {address.street}</div>
            <div className='modal-item'>suite: {address.suite}</div>
            <div className='modal-item'>zipcode: {address.zipcode}</div>
            <div className='modal-item'>tel: {phone}</div>
            <span onClick={toggleModal} className='modal-close'>X</span>
         </div>
      </div>
   )
}

export default Modal;

