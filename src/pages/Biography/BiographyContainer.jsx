import React, { Component } from 'react';
import Biography from './Biography';

class BiographyContainer extends Component {
  // eslint-disable-next-line react/state-in-constructor
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
    const { biographyData } = this.state;
    // eslint-disable-next-line no-restricted-globals
    if (data.year === '' || data.year === 0 || data.year === '0' || isNaN(data.year) || data.event === '') {
      // eslint-disable-next-line no-alert
      alert('Введите корректные данные!!!');
      this.setState((state) => ({
        ...state, newText: '', newYear: '',
      }));
    } else {
      const newEvent = {
        id: biographyData.length + 1,
        year: +data.year,
        event: data.event,
      };
      this.setState((state) => ({
        ...state, biographyData: [...biographyData, newEvent], newText: '', newYear: '',
      }));
    }
  }

  updateNewYear = (e) => {
    const year = e.target.value;
    this.setState({ newYear: year });
  }

  updateNewText = (e) => {
    const text = e.target.value;
    this.setState({ newText: text });
  }

  deleteLastPost = (state) => {
    const newBiographyData = [...state];
    newBiographyData.splice(-1, 1);
    this.setState({ biographyData: newBiographyData });
  }

  deleteSelectedItem = (index, state) => {
    const newBiographyData = [...state];
    newBiographyData.splice(index, 1);
    this.setState({ biographyData: newBiographyData });
  }

  toMax = (state) => {
    const newBiographyData = [...state];
    newBiographyData.sort((a, b) => a.year - b.year);
    this.setState({ biographyData: newBiographyData });
  }

  toMin = (state) => {
    const newBiographyData = [...state];
    newBiographyData.sort((a, b) => b.year - a.year);
    this.setState({ biographyData: newBiographyData });
  }

  minMax = (state) => {
    const newBiographyData = [...state];
    this.setState({
      biographyData: newBiographyData.reverse(),
    });
  }

  rndm = (state) => {
    const newBiographyData = [...state];
    let i; let j; let
      k;
    // eslint-disable-next-line no-plusplus
    for (i = newBiographyData.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * i);
      k = newBiographyData[i];
      newBiographyData[i] = newBiographyData[j];
      newBiographyData[j] = k;
    }
    this.setState({ biographyData: newBiographyData });
  }

  bubbleSort = (state) => {
    const newBiographyData = [...state];
    // eslint-disable-next-line no-plusplus
    for (let n = 0; n < newBiographyData.length; n++) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < newBiographyData.length - 1 - n; i++) {
        if (newBiographyData[i].year > newBiographyData[i + 1].year) {
          const buff = newBiographyData[i];
          newBiographyData[i] = newBiographyData[i + 1];
          newBiographyData[i + 1] = buff;
        }
      }
    }
    this.setState({ biographyData: newBiographyData });
  }

  render() {
    const { biographyData, newText, newYear } = this.state;

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
    );
  }
}

export default BiographyContainer;
