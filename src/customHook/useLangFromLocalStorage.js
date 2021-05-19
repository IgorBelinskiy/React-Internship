import { useEffect, useState } from 'react';

const useLangFromLocalStorage = (key) => {
  const [language, setLanguage] = useState('en');
  const toggleLang = (lang) => {
    setLanguage(() => lang);
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem(key);
    if (localLanguage) setLanguage(() => localLanguage);
  }, []);

  return [language, toggleLang];
};

export default useLangFromLocalStorage;
