import React from 'react'
import { Link } from 'react-router-dom'
import userPhoto from '../../../assets/img/user.png'
import arrowLeft from '../../../assets/img/arrowleft.svg'
import arrowRight from '../../../assets/img/arrowright.svg'
import PropTypes from 'prop-types';




const User = ({ users, current, activeUser, activeUserTitle, prevSlide, nextSlide }) => {


   return (
      <>
         <img className='left' src={arrowLeft} alt='left' onClick={prevSlide} />
         <img className='right' src={arrowRight} alt='right' onClick={nextSlide} />
         {users.map(({ photo, name, username, address, phone }, index) => {
            return (
               <div key={index} className={current === index ? 'slide active' : 'slide'}>
                  {index === current && (
                     <div className={activeUser.isActiveItem ? 'items itemsActive' : 'items'}>
                        <div className='item'>
                           <img
                              // onError={() => alert('Ошибка во время загрузки изображения')}
                              // onLoad={() => alert(`Изображение загружено`)}
                              src={photo === undefined
                                 ? userPhoto
                                 : photo} alt="userphoto" />
                        </div>
                        <div onClick={activeUserTitle} className={activeUser.isActiveUserTitle ? 'user-title activeTitle' : 'user-title'}>{name}</div>
                        <Link to={{
                           pathname: `/api/${username}`,
                           state: { username: username, address: address, phone: phone }
                        }} className='userBtn'>More...</Link>
                     </div>
                  )}
               </div>
            )
         })}
      </>
   )
}

User.propTypes = {
   users: PropTypes.array,
   current: PropTypes.number,
   activeUser: PropTypes.object,
   activeUserTitle: PropTypes.func,
   prevSlide: PropTypes.func,
   nextSlide: PropTypes.func
}

export default User


