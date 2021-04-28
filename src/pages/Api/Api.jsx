/* eslint-disable react/state-in-constructor */
import React, { useState, useEffect, useContext } from 'react';
import * as axios from 'axios';
import classes from './css/Api.module.css';
import Users from './components/Users';
import ButtonHome from '../../components/ButtonHome/ButtonHome';
import Preloader from '../../components/Preloader/Preloader';
import SwitchDayNight from '../../components/SwitchDayNight/SwitchDayNight';
import { SwitchContext } from '../../context';

const Api = () => {
  const [state, setState] = useState({
    users: [],
    isFetching: true,
    error: false,
  });

  const { isDay } = useContext(SwitchContext);

  const { users, isFetching, error } = state;

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.data)
      .then((data) => setState({ users: data, isFetching: false, }))
      .catch(() => setState({ error: true }));
  }, []);

  if (isFetching) {
    return (
      <div className={!isDay ? classes.api : `${classes.api} ${classes.day}`}>
        <Preloader />
        {error && <div className={classes.title}>Ошибка при загрузке...</div>}
        <ButtonHome />
      </div>
    );
  }
  return (
    <div className={!isDay ? classes.api : `${classes.api} ${classes.day}`}>
      <div className={classes.api_switchDayNight}>
        <SwitchDayNight />
      </div>
      <div className={classes.title}>USERS</div>
      <Users users={users} />
      <ButtonHome />
    </div>
  );
};

export default Api;
