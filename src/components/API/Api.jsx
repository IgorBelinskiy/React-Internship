import React from 'react'
import classes from './Api.module.css'
import * as axios from 'axios';
import Users from './Users/Users';
import Preloader from './Preloader/Preloader';
import { GiReturnArrow } from 'react-icons/gi';
import { Link } from 'react-router-dom';



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
            <Users users={users} />
            <div className={classes.btn_home}>
               <Link to='/' className={classes.btn_text}><GiReturnArrow /></Link>
            </div>
         </div>
      )
   }
}

export default Api;