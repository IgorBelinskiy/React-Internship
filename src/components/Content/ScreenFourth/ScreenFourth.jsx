import React from 'react';
import classes from './ScreenFourth.module.css';
import css from '../img/css3.png';
import light from '../img/light.png';
import SuggestedItem from './SuggestedItem/SuggestedItem';
import PropTypes from 'prop-types';
import css1 from '../img/css_1.png';
import css2 from '../img/css_2.png';
import css3 from '../img/css_3.png';

const screenFourthData = {
   item: [
      { itemName: 'Hair Cut', price: 15, img: css1 },
      { itemName: 'Hair Wash', price: 12.7, img: css2 },
      { itemName: 'Buzz Cut', price: 18, img: css3 },
   ]
}

const ScreenFourth = () => {
   let suggestedItemElements = screenFourthData.item
      .map((el) => <SuggestedItem key={el.price} itemName={el.itemName} price={el.price} img={el.img} />)
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
               {suggestedItemElements}
            </div>
         </div>
      </div>
   )
}
ScreenFourth.propTypes = {
   item: PropTypes.array,
}

export default ScreenFourth;