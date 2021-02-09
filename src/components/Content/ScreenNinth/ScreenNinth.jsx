import React from 'react';
import classes from './ScreenNinth.module.css';
import light from '../img/light.png';
import git from '../img/git.png';
import git1 from '../img/logo3png.png';
import git2 from '../img/git4.png';
import git3 from '../img/git1.png';
import git4 from '../img/git2.png';
import GitItems from './GitItems/GitItems';


const ScreenNinth = (props) => {
   let gitItemsElements = props.state.gitItems
      .map((items) => <GitItems state={items} />)
   return (
      <div className={classes.screen_9}>
         <div className={classes.screen_9_img}>
            <img src={light} alt=""></img>
         </div>
         <div className={classes.screen_9_image}>
            <img src={git} alt=""></img>
         </div>
         <div className={classes.git_circles}>
            <div className={classes.git_circle}></div>
            <div className={classes.git_circle}></div>
            <div className={`${classes.git_circle} ${classes.git_circle_active}`}></div>
            <div className={classes.git_circle}></div>
         </div>
         <div className={classes.screen_9_container}>
            <div lang='ru' className={classes.git_title}>
               Система контроля версий — это система, записывающая изменения в файл или набор файлов
               в течение времени и позволяющая вернуться позже к определённой версии. Для контроля версий
               файлов в этой
               книге в качестве примера будет использоваться исходный код программного обеспечения, хотя на
               самом деле
               вы можете использовать контроль версий практически для любых типов файлов.
            </div>
            <div className={classes.git_images}>
               <div className={classes.git_image}>
                  <div className={classes.git_image_item}>
                     <img src={git1} alt=""></img>
                  </div>
                  <div className={classes.git_image_item}>
                     <img src={git2} alt=""></img>
                  </div>
               </div>
            </div>
            <div className={classes.git_body_wrapper}>
               <div className={classes.git_body}>
                  <div className={classes.git_body_image}>
                     <img src={git3} alt=""></img>
                  </div>
                  <div className={classes.git_body_text}>
                     <ul>
                        {gitItemsElements}
                     </ul>
                  </div>
               </div>
               <div className={classes.git_body}>
                  <div className={classes.git_body_image}>
                     <img src={git4} alt=""></img>
                  </div>
                  <div lang='ru' className={classes.git_body_text}>
                     Основы ветвления и слияния
                     </div>
               </div>
            </div>
            <div className={classes.screen_9_addmore}>
               Learn More
               </div>
         </div>
      </div>
   )
}

export default ScreenNinth;