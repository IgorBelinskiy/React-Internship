import React, { Component } from 'react';
import Biography from './Biography';



class BiographyContainer extends Component {
   state = {
      biographyData: [
         { id: 1, year: 1992, event: 'Рождение' },
         { id: 2, year: 1994, event: 'Детский сад' },
         { id: 3, year: 1999, event: 'Школа' },
         { id: 4, year: 2009, event: 'Университет' },
         { id: 5, year: 2015, event: 'Окончание учебы' },
      ],
      newText: '',
      newYear: '',
   }

   addEvent = (data) => {
      if (data.year === '' || data.year === 0 || data.year === '0' || isNaN(data.year) || data.event === '') {
         alert('Введите корректные данные!!!')
      } else {
         let newEvent = {
            id: this.state.biographyData.length + 1,
            year: +data.year,
            event: data.event,
         }
         this.setState({ ...this.state, biographyData: [...this.state.biographyData, newEvent], newText: '', newYear: '', })
      }
   }

   updateNewYear = (e) => {
      let year = e.target.value
      this.setState({ ...this.state, newYear: year })
   }

   updateNewText = (e) => {
      let text = e.target.value
      this.setState({ ...this.state, newText: text })
   }

   deleteLastPost = (state) => {
      let newBiographyData = [...state];
      newBiographyData.splice(-1, 1);
      this.setState({ ...this.state, biographyData: newBiographyData })
   }

   deleteSelectedItem = (index, state) => {
      let newBiographyData = [...state];
      newBiographyData.splice(index, 1);
      this.setState({ ...this.state, biographyData: newBiographyData })
   }

   toMax = (state) => {
      let newBiographyData = [...state];
      newBiographyData.sort((a, b) => a.year - b.year);
      this.setState({ ...this.state, biographyData: newBiographyData })
   }

   toMin = (state) => {
      let newBiographyData = [...state];
      newBiographyData.sort((a, b) => b.year - a.year);
      this.setState({ ...this.state, biographyData: newBiographyData })
   }

   minMax = (state) => {
      let newBiographyData = [...state];
      this.setState({
         ...this.state,
         biographyData: newBiographyData.reverse(),
         type: !this.state.type
      })

   }

   rndm = (state) => {
      let newBiographyData = [...state];
      let i, j, k;
      for (i = newBiographyData.length - 1; i > 0; i--) {
         j = Math.floor(Math.random() * i);
         k = newBiographyData[i];
         newBiographyData[i] = newBiographyData[j];
         newBiographyData[j] = k;
      }
      this.setState({ ...this.state, biographyData: newBiographyData })
   }

   bubbleSort = (state) => {
      let newBiographyData = [...state];
      for (let n = 0; n < newBiographyData.length; n++) {
         for (let i = 0; i < newBiographyData.length - 1 - n; i++) {
            if (newBiographyData[i].year > newBiographyData[i + 1].year) {
               const buff = newBiographyData[i];
               newBiographyData[i] = newBiographyData[i + 1];
               newBiographyData[i + 1] = buff;
            }
         }
      }
      this.setState({ ...this.state, biographyData: newBiographyData })
   }


   render() {

      const { biographyData, newText, newYear } = this.state;
      console.log(biographyData)
      return (
         <>
            <Biography
               biographyData={biographyData}
               newText={newText}
               newYear={newYear}
               addEvent={this.addEvent}
               updateNewYear={this.updateNewYear}
               updateNewText={this.updateNewText}
               deleteLastPost={this.deleteLastPost}
               deleteSelectedItem={this.deleteSelectedItem}
               toMax={this.toMax}
               toMin={this.toMin}
               minMax={this.minMax}
               rndm={this.rndm}
               bubbleSort={this.bubbleSort}
            />
         </>
      )
   }
}


export default BiographyContainer;

