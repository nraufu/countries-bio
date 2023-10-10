import React, { useState, useEffect } from 'react';
import data from './data/data.json';
import Header from './components/Header/Header';
import CountriesListContainer from './containers/CountriesListContainer/CountriesListContainer';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [region, setRegion] = useState('');
  const [countriesList, setCountriesList] = useState(data);

  useEffect(() => {
    // handle search and region filters
    const filteredCountries = data.filter((country) => {
      const countryName = country.name.toLowerCase();
      const countryRegion = country.region.toLowerCase();

      return (
        countryName.includes(searchInput.toLowerCase())
        && countryRegion.includes(region.toLowerCase())
      );
    });

    setCountriesList(filteredCountries);
  }, [searchInput, region]);

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
        countriesList={countriesList}
        searchInput={searchInput}
        region={region}
        onSearchInputChange={handleSearchInputChange}
        onRegionChange={handleRegionChange}
      />
    </>
  );
};

export default App;
