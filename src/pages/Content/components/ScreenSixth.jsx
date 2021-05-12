import React from 'react';
import PropTypes from 'prop-types';
import classes from '../css/ScreenSixth.module.css';
import node from '../../../assets/img/node.png';
import route from '../../../assets/img/route.png';

const ScreenSixth = ({ t }) => {
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
            {t('contentPage.node')}
          </div>
        </div>
      </div>
    </div>
  );
};
ScreenSixth.propTypes = {
  t: PropTypes.func.isRequired,
};

export default ScreenSixth;
