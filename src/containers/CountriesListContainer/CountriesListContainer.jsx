import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/Input/Input';
// import Card from '../../components/Card/Card';

const CountriesListContainer = ({
  searchInput,
  region,
  onSearchInputChange,
  onRegionChange,
}) => {
  const regions = [
    { id: 1, label: 'Africa' },
    { id: 2, label: 'America' },
    { id: 3, label: 'Asia' },
    { id: 4, label: 'Europe' },
    { id: 5, label: 'Oceania' },
  ];

  return (
    <div className="countries-list-container">
      <div className="countries-list-container__filters">
        {/* search */}
        <Input
          type="search"
          label="Search for a Country..."
          value={searchInput}
          onChange={onSearchInputChange}
        />

        {/* select */}
        <Input
          type="select"
          label="Filter by Region"
          value={region}
          onChange={onRegionChange}
          options={regions}
        />
      </div>

      <div className="countries-list-container__list">
        {/* <Card
        details={{
          image:
            'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
          imgAlt: 'Afghanistan Flag',
          countryName: 'Afghanistan',
          countryPopulation: '27657145',
          CountryRegion: 'Asia',
          countryCapital: 'Kabul',
        }}
      /> */}
      </div>
    </div>
  );
};

CountriesListContainer.propTypes = {
  searchInput: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  onSearchInputChange: PropTypes.func.isRequired,
  onRegionChange: PropTypes.func.isRequired,
};

export default CountriesListContainer;
