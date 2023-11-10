import React, { useState, useEffect, useContext } from 'react';
import localData from './data/data.json';
import Header from './components/Header/Header';
import CountriesList from './pages/CountriesList/CountriesList';
import { responseFormatter } from './helpers';
import { ThemeContext } from './contexts/ThemeContext';

const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [region, setRegion] = useState('');
  const [countriesList, setCountriesList] = useState([]);

  const context = useContext(ThemeContext);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,region,population,subregion,tld,languages,cca2,cca3,altSpellings,borders',
        );
        const responseData = await response.json();
        const formatResponse = responseFormatter(responseData);

        setCountriesList(formatResponse);
      } catch (error) {
        // fallback data for offline use
        setCountriesList(localData);
      }
    })();
  }, []);

  useEffect(() => {
    if (context?.theme === 'dark') {
      document.body.style.setProperty('--bodyBackgroundColor', '#202C36');
      document.body.style.setProperty('--elementsBackgroundColor', '#2B3844');
      document.body.style.setProperty('--textColor', '#fff');
    }

    // cleanup
    return () => {
      document.body.style.removeProperty('--bodyBackgroundColor');
      document.body.style.removeProperty('--elementsBackgroundColor');
      document.body.style.removeProperty('--textColor');
    };
  }, [context?.theme]);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleRegionChange = (reg) => {
    setRegion(reg);
  };

  const filteredCountries = countriesList.filter(
    (country) => country.name.toLowerCase().includes(searchInput.toLowerCase())
      && (region === '' || country.region === region),
  );

  const worldRegions = [
    { id: 1, label: 'Africa', value: 'Africa' },
    { id: 2, label: 'America', value: 'Americas' },
    { id: 3, label: 'Asia', value: 'Asia' },
    { id: 4, label: 'Europe', value: 'Europe' },
    { id: 5, label: 'Oceania', value: 'Oceania' },
  ];

  return (
    <>
      <Header />
      <CountriesList
        regionsList={ worldRegions }
        countriesList={ filteredCountries }
        searchInput={ searchInput }
        region={ region }
        onSearchInputChange={ handleSearchInputChange }
        onRegionChange={ handleRegionChange }
      />
    </>
  );
};

export default App;
