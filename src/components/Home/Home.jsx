import React from 'react'
import classes from './Home.module.css'
import Video from '../../assets/video/video.mp4'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Home = () => {
   return (
      <div className={classes.home}>
         <div className={classes.home_bg}>
            <video autoPlay loop muted src={Video}
               type='video/mp4'
               className={classes.home_bg_video}>
            </video>
         </div>
         <div className={classes.home_container}>
            <div className={classes.home_wrapper}>
               <Header />
               <Footer />
            </div>
         </div>
      </div>
   )
}

export default Home
