import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Biography from './Biography';

const BiographyContainer = () => {
  const { t } = useTranslation();
  const [state, setState] = useState({
    biographyData: [
      { id: 1, year: 1992, event: t('biographyPage.event_1') },
      { id: 2, year: 1994, event: t('biographyPage.event_2') },
      { id: 3, year: 1999, event: t('biographyPage.event_3') },
      { id: 4, year: 2009, event: t('biographyPage.event_4') },
      { id: 5, year: 2015, event: t('biographyPage.event_5') },
    ],
    newText: '',
    newYear: '',
  });

  const addEvent = (data) => {
    const { biographyData } = state;
    // eslint-disable-next-line no-restricted-globals
    if (data.year === '' || data.year === 0 || data.year === '0' || isNaN(data.year) || data.event === '') {
      // eslint-disable-next-line no-alert
      alert('Введите корректные данные!!!');
      setState((prevState) => ({
        ...prevState, newText: '', newYear: '',
      }));
    } else {
      const newEvent = {
        id: biographyData.length + 1,
        year: +data.year,
        event: data.event,
      };
      setState((prevState) => ({
        ...prevState, biographyData: [...biographyData, newEvent], newText: '', newYear: '',
      }));
    }
  };

  const updateNewYear = (e) => {
    const year = e.target.value;
    setState((prevState) => ({ ...prevState, newYear: year }));
  };

  const updateNewText = (e) => {
    const text = e.target.value;
    setState((prevState) => ({ ...prevState, newText: text }));
  };

  const deleteLastPost = (data) => {
    const newBiographyData = [...data];
    newBiographyData.splice(-1, 1);
    setState((prevState) => ({ ...prevState, biographyData: newBiographyData }));
  };

  const deleteSelectedItem = (index, data) => {
    const newBiographyData = [...data];
    newBiographyData.splice(index, 1);
    setState((prevState) => ({ ...prevState, biographyData: newBiographyData }));
  };

  const toMax = (data) => {
    const newBiographyData = [...data];
    newBiographyData.sort((a, b) => a.year - b.year);
    setState((prevState) => ({ ...prevState, biographyData: newBiographyData }));
  };

  const toMin = (data) => {
    const newBiographyData = [...data];
    newBiographyData.sort((a, b) => b.year - a.year);
    setState((prevState) => ({ ...prevState, biographyData: newBiographyData }));
  };

  const minMax = (data) => {
    const newBiographyData = [...data];
    setState((prevState) => ({ ...prevState, biographyData: newBiographyData.reverse() }));
  };

  const rndm = (data) => {
    const newBiographyData = [...data];
    let i; let j; let
      k;
    // eslint-disable-next-line no-plusplus
    for (i = newBiographyData.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * i);
      k = newBiographyData[i];
      newBiographyData[i] = newBiographyData[j];
      newBiographyData[j] = k;
    }
    setState((prevState) => ({ ...prevState, biographyData: newBiographyData }));
  };

  const bubbleSort = (data) => {
    const newBiographyData = [...data];
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
    setState((prevState) => ({ ...prevState, biographyData: newBiographyData }));
  };

  const { biographyData, newText, newYear } = state;

  return (
    <>
      <Biography
        t={t}
        biographyData={biographyData}
        newText={newText}
        newYear={newYear}
        addEvent={addEvent}
        updateNewYear={updateNewYear}
        updateNewText={updateNewText}
        deleteLastPost={deleteLastPost}
        deleteSelectedItem={deleteSelectedItem}
        toMax={toMax}
        toMin={toMin}
        minMax={minMax}
        rndm={rndm}
        bubbleSort={bubbleSort}
      />
    </>
  );
};

export default BiographyContainer;
