import React from 'react';
import classes from '../css/ScreenSixth.module.css';
import node from '../../../assets/img/node.png';
import route from '../../../assets/img/route.png';

const ScreenSixth = () => {
  const line = <div className={classes.item_line} />;
  const lineAct = <div className={`${classes.item_line} ${classes.line_g}`} />;
  return (
    <div className={classes.screen_6}>
      <div className={classes.screen_6_node}>
        <img src={node} alt="" />
      </div>
      <div className={classes.screen_6_route}>
        <img src={route} alt="" />
      </div>
      <div className={classes.node_footer}>
        <div className={classes.screen_6_container}>
          <div className={classes.node_title}>NodeJS</div>
          <div className={classes.node_items}>
            <div className={classes.items_item}>
              {line}
            </div>
            <div className={classes.items_item}>
              {lineAct}
            </div>
            <div className={classes.items_item}>
              {lineAct}
            </div>
            <div className={classes.items_item}>
              {lineAct}
            </div>
          </div>
          <div className={classes.node_text}>
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
  );
};

export default ScreenSixth;
