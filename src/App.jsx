import React, { useState } from 'react';
import data from './data/data.json';
import Header from './components/Header/Header';
import CountriesListContainer from './containers/CountriesListContainer/CountriesListContainer';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [region, setRegion] = useState('');

  const handleThemeChange = () => {
    setDarkMode((prevValue) => !prevValue);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleRegionChange = (reg) => {
    setRegion(reg);
  };

  return (
    <>
      <Header isDarkMode={darkMode} onThemeChange={handleThemeChange} />
      <CountriesListContainer
        countries={data}
        searchInput={searchInput}
        region={region}
        onSearchInputChange={handleSearchInputChange}
        onRegionChange={handleRegionChange}
      />
    </>
  );
};

export default App;
