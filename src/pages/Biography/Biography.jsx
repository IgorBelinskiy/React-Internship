/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './css/Biography.module.css';
import TableBody from './components/TableBody';
import ButtonHome from '../../components/ButtonHome/ButtonHome';
import { SwitchConsumer } from '../../context';
import SwitchDayNight from '../../components/SwitchDayNight/SwitchDayNight';

class Biography extends Component {
  state = {
    year: '',
    event: '',
    isActive: false,
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyDown);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.newYear > 2021) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps) {
    const { newText, newYear } = this.props;
    if (newText !== prevProps.newText) {
      this.updText(newText);
    }
    if (newYear !== prevProps.newYear) {
      this.updYear(newYear);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyDown);
  }

  updText = (t) => {
    this.setState((state) => ({ ...state, event: t }));
  }

  updYear = (y) => {
    this.setState((state) => ({ ...state, event: y }));
  }

  handleKeyDown = (e) => {
    const {
      deleteLastPost, biographyData, minMax, rndm
    } = this.props;
    if (e.code === 'KeyZ' && e.shiftKey) {
      deleteLastPost(biographyData);
    }
    if (e.code === 'KeyX' && e.shiftKey) {
      minMax(biographyData);
    }
    if (e.code === 'KeyC' && e.shiftKey) {
      rndm(biographyData);
    }
    if (e.code === 'KeyA' && e.shiftKey) {
      this.setState((state) => ({ ...state, isActive: !state.isActive }));
    }
  };

  render() {
    const {
      biographyData,
      newText,
      newYear,
      addEvent,
      updateNewYear,
      updateNewText,
      deleteLastPost,
      deleteSelectedItem,
      toMax,
      toMin,
      minMax,
      rndm,
      bubbleSort
    } = this.props;
    const { isActive } = this.state;

    return (
      <SwitchConsumer>
        {({ isDay }) => (
          <div className={!isDay ? classes.biography : `${classes.biography} ${classes.day}`}>
            <div className={classes.biography_dayNight}><SwitchDayNight /></div>
            <div className={classes.biography_wrapper}>
              <div className={classes.table}>
                <div className={classes.table_title}>
                  <div className={classes.title_number}>#</div>
                  <div className={classes.title_year}>Year</div>
                  <div className={classes.title_event}>Event in life</div>
                </div>
                {
                  biographyData
                    .map((el, index) => (
                      <TableBody
                        deleteSelectedItem={deleteSelectedItem}
                        key={el.id}
                        index={index}
                        year={el.year}
                        event={el.event}
                        state={biographyData}
                        isActive={isActive}
                      />
                    ))
                }
                <div className={classes.form}>
                  <div className={classes.form_input}>
                    <textarea
                      onChange={updateNewYear}
                      value={newYear}
                      placeholder="Введите год"
                    />
                    <textarea
                      onChange={updateNewText}
                      value={newText}
                      placeholder="Введите событие"
                    />
                  </div>
                  <div className={classes.form_button}>
                    <button type="button" onClick={() => { addEvent(this.state); }}>
                      Add new event
                    </button>
                    <button
                      type="button"
                      onClick={() => { deleteLastPost(biographyData); }}
                      className={classes.del_btn}
                    >
                      Delete last event in list
                    </button>
                  </div>
                  <div className={classes.form_action}>
                    <div
                      className={classes.action_title}
                    >
                      Сортировка данных
                    </div>
                    <div className={classes.action_items}>
                      <div
                        aria-hidden="true"
                        onClick={() => { toMax(biographyData); }}
                        className={classes.items}
                      >
                        #1
                      </div>
                      <div
                        aria-hidden="true"
                        onClick={() => { toMin(biographyData); }}
                        className={classes.items}
                      >
                        #2
                      </div>
                      <div
                        aria-hidden="true"
                        onClick={() => { minMax(biographyData); }}
                        className={classes.items}
                      >
                        #3
                      </div>
                      <div
                        aria-hidden="true"
                        onClick={() => { rndm(biographyData); }}
                        className={classes.items}
                      >
                        #4
                      </div>
                      <div
                        aria-hidden="true"
                        onClick={() => { bubbleSort(biographyData); }}
                        className={classes.items}
                      >
                        #5
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ButtonHome />
            </div>
          </div>
        )}
      </SwitchConsumer>
    );
  }
}

Biography.propTypes = {
  biographyData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  newText: PropTypes.string.isRequired,
  newYear: PropTypes.string.isRequired,
  addEvent: PropTypes.func.isRequired,
  updateNewYear: PropTypes.func.isRequired,
  updateNewText: PropTypes.func.isRequired,
  deleteLastPost: PropTypes.func.isRequired,
  deleteSelectedItem: PropTypes.func.isRequired,
  toMax: PropTypes.func.isRequired,
  toMin: PropTypes.func.isRequired,
  minMax: PropTypes.func.isRequired,
  rndm: PropTypes.func.isRequired,
  bubbleSort: PropTypes.func.isRequired
};

export default Biography;
