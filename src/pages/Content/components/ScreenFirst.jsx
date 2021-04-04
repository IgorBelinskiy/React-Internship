import React, { Component } from 'react';
import classes from '../css/ScreenFirst.module.css';
import html from '../../../assets/img/html-logo.png';
import ScreenFirstOptions from './ScreenFirstOptions';
import PropTypes from 'prop-types';


class ScreenFirst extends Component {
   state = {
      options:
         [
            { option: 'Button', price: 6 },
            { option: 'Checkbox', price: 7.5 },
            { option: 'Submit', price: 6 },
         ],
      isBtnActive: null
   }


   toggleOptions = (index) => {
      let updateState = this.state.options.map((option, id) => {
         if (id === index) {
            option.isActive = !option.isActive
         }
         return option
      })
      this.setState({ options: updateState })
   }


   componentDidMount() {
      let options = this.state.options.map(el => ({ ...el, isActive: false }))
      this.setState({ ...this.state, options: options })
   }

   componentDidUpdate(prevProps) {
      if (this.props.screenFirstData.isBtnActive !== prevProps.screenFirstData.isBtnActive) {
         this.setState({ ...this.state, isBtnActive: this.props.screenFirstData.isBtnActive });
      }
   }


   render() {

      const { options, isBtnActive } = this.state;
      const toggleOptions = this.toggleOptions;

      return (
         <div className={classes.screen_1}>
            <div className={classes.html_image}>
               <img src={html} alt="html"></img>
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
                     <div className={classes.selected_text}>{this.props.screenFirstData.itemSelected.item}</div>
                     <div className={classes.selected_price}>+${this.props.screenFirstData.itemSelected.price.toFixed(2)}</div>
                  </div>
               </div>
               <div className={classes.html_more_options} >
                  <div>Please select more option if necessary:</div>
                  <ScreenFirstOptions
                     toggleOptions={toggleOptions}
                     options={options} />
               </div>
               <div className={classes.option_add}>Add more information</div>
               <div className={classes.html_button}>
                  <div
                     onClick={this.props.screenFirstBtnToggle}
                     className={!isBtnActive
                        ? classes.html_btn
                        : `${classes.html_btn} ${classes.html_btn_active}`}>HTML</div>
               </div>
            </div>
         </div>
      )
   }
}
ScreenFirst.propTypes = {
   screenFirstData: PropTypes.object,
   screenFirstBtnToggle: PropTypes.func,
}


export default ScreenFirst;