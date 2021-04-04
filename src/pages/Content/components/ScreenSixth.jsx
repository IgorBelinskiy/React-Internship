import React from 'react';
import classes from '../css/ScreenSixth.module.css';
import node from '../../../assets/img/node.png';
import route from '../../../assets/img/route.png';


const ScreenSixth = () => {
   return (
      <div className={classes.screen_6}>
         <div className={classes.screen_6_node}>
            <img src={node} alt=""></img>
         </div>
         <div className={classes.screen_6_route}>
            <img src={route} alt=""></img>
         </div>
         <div className={classes.node_footer}>
            <div className={classes.screen_6_container}>
               <div className={classes.node_title}>NodeJS</div>
               <div className={classes.node_items}>
                  <div className={classes.items_item}>
                     <div className={classes.item_line}></div>
                  </div>
                  <div className={classes.items_item}>
                     <div className={`${classes.item_line} ${classes.line_g}`}></div>
                  </div>
                  <div className={classes.items_item}>
                     <div className={`${classes.item_line} ${classes.line_g}`}></div>
                  </div>
                  <div className={classes.items_item}>
                     <div className={`${classes.item_line} ${classes.line_g}`}></div>
                  </div>
               </div>
               <div lang='ru' className={classes.node_text}>
                  Node.js (или просто Node) — это серверная платформа для работы с JavaScript через
                  движок V8. JavaScript выполняет действие на стороне клиента, а Node — на сервере. С
                  помощью Node можно
                  писать полноценные приложения. Node умеет работать с внешними библиотеками, вызывать
                  команды из кода на
                  JavaScript и выполнять роль веб-сервера. Чтобы установить, необходимо перейти на
                  официальный сайт
                  https://nodejs.org и на главной странице скачать последнюю стабильную версию.
                  </div>
            </div>
         </div>
      </div>
   )
}

export default ScreenSixth;