import React from 'react';
import classes from './css/Home.module.css';
import Video from '../../assets/video/video.mp4';
import image from '../../assets/img/space.jpg';
import Footer from './components/Footer';
import HeaderContainer from './components/HeaderContainer';
import { SwitchConsumer } from '../../context';

const Home = () => (
  <div className={classes.home}>
    <div className={classes.home_bg}>
      <SwitchConsumer>
        {({ isDay }) => {
          if (isDay) {
            return (
              <img
                src={image}
                className={classes.home_bg_video}
                alt="dd"
              />
            );
          }
          return (
            <video
              autoPlay
              loop
              muted
              src={Video}
              type="video/mp4"
              className={classes.home_bg_video}
            />
          );
        }}
      </SwitchConsumer>
    </div>
    <div className={classes.home_container}>
      <div className={classes.home_wrapper}>
        <HeaderContainer />
        <Footer />
      </div>
    </div>
  </div>
);

export default Home;
