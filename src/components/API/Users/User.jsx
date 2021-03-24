import React from 'react'
import { Link } from 'react-router-dom'
import userPhoto from '../../../assets/img/user.png'




const User = ({ users, current, activeUser, activeUserTitle }) => {


   return (
      <>
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

export default User


