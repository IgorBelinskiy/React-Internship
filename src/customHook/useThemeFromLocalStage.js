import { useEffect, useState } from 'react';

const useThemeFromLocalStorage = () => {
  const [theme, setTheme] = useState('night');
  const setLocalStorage = (value) => {
    window.localStorage.setItem('theme', value);
    setTheme(() => value);
  };

  const toggleTheme = () => {
    setLocalStorage(theme === 'day' ? 'night' : 'day');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) setTheme(() => localTheme);
  }, []);

  return [theme, toggleTheme];
};

export default useThemeFromLocalStorage;
