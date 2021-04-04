import React from 'react'
import classes from './css/Home.module.css'
import Video from '../../assets/video/video.mp4'
import Footer from './components/Footer'
import HeaderContainer from './components/HeaderContainer'

const Home = () => (
   <div className={classes.home}>
      <div className={classes.home_bg}>
         <video autoPlay loop muted src={Video}
            type='video/mp4'
            className={classes.home_bg_video}>
         </video>
      </div>
      <div className={classes.home_container}>
         <div className={classes.home_wrapper}>
            <HeaderContainer />
            <Footer />
         </div>
      </div>
   </div>
)

export default Home
