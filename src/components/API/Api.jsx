import React from 'react'
import classes from './Api.module.css'
import * as axios from 'axios';
import User from './Users/User';
import Preloader from './Preloader/Preloader';


class Api extends React.Component {
   state = {
      users: [],
      isFetching: true,
   }

   componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/users')
         .then(response => response.data)
         .then((data) => this.setState({ users: data, isFetching: false, }))
   }

   render() {

      const { users, isFetching } = this.state;
      return (
         <div className={classes.api} >
            <div className={classes.title}>USERS</div>
            <div>{isFetching ? <Preloader /> : null}</div>
            <User users={users} />
         </div>
      )
   }
}

export default Api;