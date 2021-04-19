/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from '../css/ScreenFirst.module.css';
import html from '../../../assets/img/html-logo.png';
import ScreenFirstOptions from './ScreenFirstOptions';

class ScreenFirst extends Component {
  state = {
    options:
      [
        { id: 1, option: 'Button', price: 6 },
        { id: 2, option: 'Checkbox', price: 7.5 },
        { id: 3, option: 'Submit', price: 6 },
      ],
    isBtnActive: null
  };

  componentDidMount() {
    const { options } = this.state;
    const option = options.map((state) => ({ ...state, isActive: false }));
    this.setState((prevState) => ({ ...prevState, options: option }));
  }

  componentDidUpdate(prevProps) {
    const { screenFirstData } = this.props;
    const { isBtnActive } = screenFirstData;
    if (isBtnActive !== prevProps.screenFirstData.isBtnActive) {
      this.btnActive(isBtnActive);
    }
  }

  toggleOptions = (index) => {
    const { options } = this.state;
    const updateState = options.map((option, id) => {
      if (id === index) {
        // eslint-disable-next-line no-param-reassign
        option.isActive = !option.isActive;
      }
      return option;
    });
    this.setState({ options: updateState });
  };

  btnActive = (b) => {
    this.setState({ isBtnActive: b });
  }

  render() {
    const { options, isBtnActive } = this.state;
    const { screenFirstData, screenFirstBtnToggle } = this.props;
    const { itemSelected } = screenFirstData;

    return (
      <div className={classes.screen_1}>
        <div className={classes.html_image}>
          <img src={html} alt="html" />
        </div>
        <div className={classes.screen_1_container}>
          <div className={classes.html_body}>
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
              <div className={classes.selected_text}>{itemSelected.item}</div>
              <div className={classes.selected_price}>
                {`+$ ${itemSelected.price.toFixed(2)}`}
              </div>
            </div>
          </div>
          <div className={classes.html_more_options}>
            <div>Please select more option if necessary:</div>
            <ScreenFirstOptions
              toggleOptions={this.toggleOptions}
              options={options}
            />
          </div>
          <div className={classes.option_add}>Add more information</div>
          <div className={classes.html_button}>
            <div
              aria-hidden="true"
              onClick={screenFirstBtnToggle}
              className={!isBtnActive
                ? classes.html_btn
                : `${classes.html_btn} ${classes.html_btn_active}`}
            >
              HTML
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ScreenFirst.propTypes = {
  screenFirstData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  screenFirstBtnToggle: PropTypes.func.isRequired,
};

export default ScreenFirst;
