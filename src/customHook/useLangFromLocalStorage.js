import { useEffect, useState } from 'react';

const useLangFromLocalStorage = () => {
  const [language, setLanguage] = useState('en');
  const toggleLang = (lang) => {
    setLanguage(() => lang);
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem('i18nextLng');
    if (localLanguage) setLanguage(() => localLanguage);
  }, []);

  return [language, toggleLang];
};

export default useLangFromLocalStorage;
