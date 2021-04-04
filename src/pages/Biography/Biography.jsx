import React, { Component } from 'react';
import classes from './css/Biography.module.css';
import TableBody from './components/TableBody';
import ButtonHome from '../../components/ButtonHome/ButtonHome';
import PropTypes from 'prop-types';



class Biography extends Component {

   state = {
      year: '',
      event: '',
      isActive: false,
   }

   componentDidMount() {
      window.addEventListener('keyup', this.handleKeyDown);
   }

   componentWillUnmount() {
      window.removeEventListener('keyup', this.handleKeyDown);
   }

   componentDidUpdate(prevProps) {
      if (this.props.newText !== prevProps.newText) {
         this.setState(state => ({ ...state, event: this.props.newText }))

      }
      if (this.props.newYear !== prevProps.newYear) {
         this.setState(state => ({ ...state, year: this.props.newYear }))
      }
   }

   shouldComponentUpdate(prevProps) {
      if (prevProps.newYear > 2021) {
         return false
      }
      return true
   }

   handleKeyDown = (e) => {
      if (e.code === 'KeyZ' && e.shiftKey) {
         this.props.deleteLastPost(this.props.biographyData)
      }
      if (e.code === 'KeyX' && e.shiftKey) {
         this.props.minMax(this.props.biographyData)
      }
      if (e.code === 'KeyC' && e.shiftKey) {
         this.props.rndm(this.props.biographyData)
      }
      if (e.code === 'KeyA' && e.shiftKey) {
         this.setState({ isActive: !this.state.isActive })
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


      return (
         <div className={classes.biography}>
            <div className={classes.biography_wrapper}>
               <div className={classes.table}>
                  <div className={classes.table_title}>
                     <div className={classes.title_number}>#</div>
                     <div className={classes.title_year}>Year</div>
                     <div className={classes.title_event}>Event in life</div>
                  </div>
                  {
                     biographyData
                        .map((el, index) => <TableBody
                           deleteSelectedItem={deleteSelectedItem}
                           key={el.id}
                           index={index}
                           year={el.year}
                           event={el.event}
                           state={biographyData}
                           isActive={this.state.isActive}
                        />)
                  }
                  <div className={classes.form}>
                     <div className={classes.form_input}>
                        <textarea
                           onChange={updateNewYear}
                           value={newYear}
                           placeholder='Введите год'>
                        </textarea>
                        <textarea
                           onChange={updateNewText}
                           value={newText}
                           placeholder='Введите событие'>
                        </textarea>
                     </div>
                     <div className={classes.form_button}>
                        <button onClick={() => { addEvent(this.state) }}>
                           Add new event
                        </button>
                        <button onClick={() => { deleteLastPost(biographyData) }}
                           className={classes.del_btn}>Delete last event in list
                        </button>
                     </div>
                     <div className={classes.form_action}>
                        <div className={classes.action_title}>Сортировка данных</div>
                        <div className={classes.action_items}>
                           <div onClick={() => { toMax(biographyData) }} className={classes.items}>#1</div>
                           <div onClick={() => { toMin(biographyData) }} className={classes.items}>#2</div>
                           <div onClick={() => { minMax(biographyData) }} className={classes.items}>#3</div>
                           <div onClick={() => { rndm(biographyData) }} className={classes.items}>#4</div>
                           <div onClick={() => { bubbleSort(biographyData) }} className={classes.items}>#5</div>
                        </div>
                     </div>
                  </div>
               </div>
               <ButtonHome />
            </div>
         </div>
      )
   }
}

Biography.propTypes = {
   biographyData: PropTypes.array,
   newText: PropTypes.string,
   newYear: PropTypes.string,
   addEvent: PropTypes.func,
   updateNewYear: PropTypes.func,
   updateNewText: PropTypes.func,
   deleteLastPost: PropTypes.func,
   deleteSelectedItem: PropTypes.func,
   toMax: PropTypes.func,
   toMin: PropTypes.func,
   minMax: PropTypes.func,
   rndm: PropTypes.func,
   bubbleSort: PropTypes.func
}


export default Biography;

