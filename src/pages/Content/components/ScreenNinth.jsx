import React from 'react';
import PropTypes from 'prop-types';
import classes from '../css/ScreenNinth.module.css';
import light from '../../../assets/img/light.png';
import git from '../../../assets/img/git.png';
import git1 from '../../../assets/img/logo3png.png';
import git2 from '../../../assets/img/git4.png';
import git3 from '../../../assets/img/git1.png';
import git4 from '../../../assets/img/git2.png';
import GitItems from './GitItems';

const ScreenNinth = ({ screenNinthData, t }) => {
  const { gitItems } = screenNinthData;
  const divItem = <div className={classes.git_circle} />;
  const divItemAct = <div className={`${classes.git_circle} ${classes.git_circle_active}`} />;
  return (
    <div className={classes.screen_9}>
      <div className={classes.screen_9_img}>
        <img src={light} alt="df" />
      </div>
      <div className={classes.screen_9_image}>
        <img src={git} alt="u" />
      </div>
      <div className={classes.git_circles}>
        {divItem}
        {divItem}
        {divItemAct}
        {divItem}
      </div>
      <div className={classes.screen_9_container}>
        <div className={classes.git_title}>
          {t('contentPage.git')}
        </div>
        <div className={classes.git_images}>
          <div className={classes.git_image}>
            <div className={classes.git_image_item}>
              <img src={git1} alt="" />
            </div>
            <div className={classes.git_image_item}>
              <img src={git2} alt="" />
            </div>
          </div>
        </div>
        <div className={classes.git_body_wrapper}>
          <div className={classes.git_body}>
            <div className={classes.git_body_image}>
              <img src={git3} alt="" />
            </div>
            <div className={classes.git_body_text}>
              <ul>
                <GitItems gitItems={gitItems} />
              </ul>
            </div>
          </div>
          <div className={classes.git_body}>
            <div className={classes.git_body_image}>
              <img src={git4} alt="" />
            </div>
            <div className={classes.git_body_text}>Основы ветвления и слияния</div>
          </div>
        </div>
        <div className={classes.screen_9_addmore}>
          Learn More
        </div>
      </div>
    </div>
  );
};

ScreenNinth.propTypes = {
  screenNinthData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  t: PropTypes.func.isRequired
};

export default ScreenNinth;
