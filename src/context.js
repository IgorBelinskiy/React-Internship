import React, { useState, createContext } from 'react';
import { useTranslation } from 'react-i18next';

const SwitchContext = createContext();

const SwitchDayNightProvider = (props) => {
  const [state, setState] = useState({
    isDay: false
  });

  const { i18n } = useTranslation();

  const toggleState = () => {
    setState(({ isDay }) => ({ isDay: !isDay }));
  };

  const changeLang = (lang) => i18n.changeLanguage(lang);

  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <SwitchContext.Provider value={{ ...state, toggleState, changeLang }}>
      {children}
    </SwitchContext.Provider>
  );
};

export { SwitchDayNightProvider, SwitchContext };
