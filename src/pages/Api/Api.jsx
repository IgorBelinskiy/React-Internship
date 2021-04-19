/* eslint-disable react/state-in-constructor */
import React from 'react';
import * as axios from 'axios';
import classes from './css/Api.module.css';
import Users from './components/Users';
import ButtonHome from '../../components/ButtonHome/ButtonHome';
import Preloader from '../../components/Preloader/Preloader';
import SwitchDayNight from '../../components/SwitchDayNight/SwitchDayNight';
import { SwitchConsumer } from '../../context';

class Api extends React.Component {
  state = {
    users: [],
    isFetching: true,
    error: false,
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.data)
      .then((data) => this.setState({ users: data, isFetching: false, }))
      .catch(() => this.setState({ error: true }));
  }

  render() {
    const { users, isFetching, error } = this.state;
    if (isFetching) {
      return (
        <div className={classes.api}>
          <Preloader />
          {error && <div className={classes.title}>Ошибка при загрузке...</div>}
          <ButtonHome />
        </div>
      );
    }
    return (
      <SwitchConsumer>
        {({ isDay }) => (
          <div className={!isDay ? classes.api : `${classes.api} ${classes.day}`}>
            <div className={classes.api_switchDayNight}>
              <SwitchDayNight />
            </div>
            <div className={classes.title}>USERS</div>
            <Users users={users} />
            <ButtonHome />
          </div>
        )}
      </SwitchConsumer>
    );
  }
}

export default Api;
