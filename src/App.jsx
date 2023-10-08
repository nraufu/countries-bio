import React, { useState } from 'react';
import data from './data/data.json';
import Header from './components/Header/Header';
import CountriesListContainer from './containers/CountriesListContainer/CountriesListContainer';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode((prevValue) => !prevValue);
  };

  return (
    <>
      <Header isDarkMode={darkMode} onThemeChange={handleThemeChange} />
      <CountriesListContainer countries={data} />
    </>
  );
};

export default App;
