import React, { useState } from 'react'
import './User.css'
import userPhoto from '../../../assets/img/user.png'
import Slider from 'react-slick'
import arrowLeft from '../../../assets/img/arrowleft.svg'
import arrowRight from '../../../assets/img/arrowright.svg'


const User = (props) => {
   const [indexImage, setIndexImage] = useState(0)

   const NextArrow = ({ onClick }) => <div className='arrow next' onClick={onClick}><img src={arrowRight} alt="" /></div>

   const PrevArrow = ({ onClick }) => <div className='arrow prev' onClick={onClick}><img src={arrowLeft} alt="" /></div>

   const settings = {
      infinite: true,
      lazyLoad: true,
      speed: 300,
      slidesToShow: 3,
      centerMode: true,
      centerPadding: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setIndexImage(next)
   }

   return (
      <div className='user'>
         <Slider {...settings}>
            {props.state.map(({ name, username, photo, address, phone }, index) => {
               return (
                  <div key={index} className={index === indexImage ? 'slide activeSlide' : 'slide'}>
                     <div className='item'><img src={photo === undefined ? userPhoto : photo} alt="" /></div>
                     <div>name: {name}</div>
                     <div>username: {username}</div>
                     <div>city: {address.city}</div>
                     <div>street: {address.street}</div>
                     <div>phone: {phone}</div>
                  </div>
               )
            })}
         </Slider>
      </div>
   )
}

export default User;