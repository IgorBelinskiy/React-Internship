import React from 'react';
import classes from './ScreenFourth.module.css';
import css from '../img/css3.png';
import SuggestedItem from './SuggestedItem/SuggestedItem';
import PropTypes from 'prop-types';


const ScreenFourth = (props) => {
   let suggestedItemElements = props.item
      .map((el) => <SuggestedItem key={el.price} itemName={el.itemName} price={el.price} img={el.img} />)
   return (
      <div className={classes.screen_4}>
         <div className={classes.screen_2_image}>
            <img src="img/content/light.png" alt=""></img>
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
               {suggestedItemElements}
            </div>
         </div>
      </div>
   )
}
ScreenFourth.propTypes = {
   gitItems: PropTypes.array,
}

export default ScreenFourth;