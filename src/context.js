import React, { createContext } from 'react';
import { useTranslation } from 'react-i18next';
import useThemeFromLocalStorage from './customHook/useThemeFromLocalStage';
import useLangFromLocalStorage from './customHook/useLangFromLocalStorage';

const SwitchContext = createContext();

const SwitchProvider = (props) => {
  const [theme, toggleTheme] = useThemeFromLocalStorage();
  const [language, toggleLang] = useLangFromLocalStorage();

  const { i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    toggleLang(lang);
  };

  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <SwitchContext.Provider
      value={{
        theme, language, toggleTheme, changeLang
      }}
    >
      {children}
    </SwitchContext.Provider>
  );
};

export { SwitchProvider, SwitchContext };
