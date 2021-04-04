import React from 'react';
import classes from '../css/ScreenFourth.module.css';
import css from '../../../assets/img/css3.png';
import light from '../../../assets/img/light.png';
import SuggestedItem from './SuggestedItem';
import PropTypes from 'prop-types';



const ScreenFourth = ({ screenFourthData }) => {

   const { item } = screenFourthData;

   return (
      <div className={classes.screen_4}>
         <div className={classes.screen_4_img}>
            <img src={light} alt=""></img>
         </div>
         <div className={classes.screen_4_image}>
            <img src={css} alt=""></img>
         </div>
         <div className={classes.screen_4_container}>
            <div lang='ru' className={classes.css_text}>
               CSS – это формальный язык, служащий для описания оформления внешнего вида документа,
               созданного с использованием языка разметки (HTML, XHTML, XML). Название происходит от
               английского
               Cascading Style Sheets, что означает «каскадные таблицы стилей». Назначение CSS – отделять
               то, что задает
               внешний вид страницы, от ее содержания. Если документ создан только с использованием HTML,
               то
               в нем
               определяется не только каждый элемент, но и способ его отображения (цвет, шрифт, положение
               блока и т.
               д.). Если же подключены каскадные таблицы стилей, то HTML описывает только очередность
               объектов. А за все
               их свойства отвечает CSS.
               </div>
            <div className={classes.screen_4_addmore}>
               Learn More
               </div>
            <div className={classes.suggested}>
               <div className={classes.suggested_title}>
                  Suggested Item
               </div>
               <SuggestedItem item={item} />
            </div>
         </div>
      </div>
   )
}
ScreenFourth.propTypes = {
   screenFourthData: PropTypes.object,
}

export default ScreenFourth;