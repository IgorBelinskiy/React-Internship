import React, { useContext } from 'react';
import classes from './css/Home.module.css';
import Video from '../../assets/video/video.mp4';
import image from '../../assets/img/space.jpg';
import Footer from './components/Footer';
import HeaderContainer from './components/HeaderContainer';
import { SwitchContext } from '../../context';

const Home = () => {
  const { isDay } = useContext(SwitchContext);
  return (
    <div className={classes.home}>
      <div className={classes.home_bg}>
        {isDay
          ? (
            <img
              src={image}
              className={classes.home_bg_video}
              alt="dd"
            />
          )
          : (
            <video
              autoPlay
              loop
              muted
              src={Video}
              type="video/mp4"
              className={classes.home_bg_video}
            />
          )}
      </div>
      <div className={classes.home_container}>
        <div className={classes.home_wrapper}>
          <HeaderContainer />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
