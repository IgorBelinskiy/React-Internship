import React from 'react';
import classes from '../css/ScreenSeventh.module.css';
import npm from '../../../assets/img/npm.png';


const ScreenSeventh = () => {
   return (
      <div className={classes.screen_7}>
         <div className={classes.screen_7_npm}>
            <img src={npm} alt=""></img>
         </div>
         <div className={classes.screen_7_container}>
            <div lang='ru' className={classes.npm_text}>
               NPM – это менеджер пакетов, который входит в состав Node.js. В течение многих лет
               широко использовался разработчиками JavaScript для обмена инструментами, установки различных
               модулей и
               управления их зависимостями. Вот почему людям, работающим с Node.js, очень важно понять, что
               такое npm.
               </div>
         </div>
      </div>
   )
}

export default ScreenSeventh;