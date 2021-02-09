import React from 'react';
import classes from './ScreenFirst.module.css';
import html from '../img/html-logo.png';
import Options from './Options/Options';



const ScreenFirst = (props) => {
   let optionsElements = props.state.options
      .map((options) => <Options options={options} />)
   return (
      <div className={classes.screen_1}>
         <div className={classes.html_image}>
            <img src={html} alt=""></img>
         </div>
         <div className={classes.screen_1_container}>
            <div lang='ru' className={classes.html_body}>
               HTML (от английского HyperText Markup Language) — это язык гипертекстовой разметки
               страницы. Он используется для того, чтобы дать браузеру понять, как нужно отображать
               загруженный сайт.
               Язык состоит из тегов — это своеобразные команды, которые преобразовываются в визуальные
               объекты в
               браузере пользователя.
            </div>
            <div className={classes.html_item_selected}>
               <div className={classes.item_selected_title}>Item selected:</div>
               <div className={classes.selected}>
                  <div className={classes.selected_text}>{props.state.itemSelected.item}</div>
                  <div className={classes.selected_price}>+${props.state.itemSelected.price.toFixed(2)}</div>
               </div>
            </div>
            <div className={classes.html_more_options} >
               <div>Please select more option if necessary:</div>
               {optionsElements}
            </div>
            <div className={classes.option_add}>Add more information</div>
            <div className={classes.html_button}>
               <div className={classes.html_btn}>HTML</div>
            </div>
         </div>
      </div>
   )
}

export default ScreenFirst;