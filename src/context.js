import React, { useState, createContext } from 'react';

const SwitchContext = createContext();

const SwitchDayNightProvider = (props) => {
  const [state, setState] = useState({
    isDay: false
  });

  const toggleState = () => {
    setState(({ isDay }) => ({ isDay: !isDay }));
  };

  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <SwitchContext.Provider value={{ ...state, toggleState }}>
      {children}
    </SwitchContext.Provider>
  );
};

export { SwitchDayNightProvider, SwitchContext };
