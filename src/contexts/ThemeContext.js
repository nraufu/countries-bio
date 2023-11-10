import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  const value = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={ value } >{ props.children }</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
