import React from 'react';
import Input from '../../components/Input/Input';
import Card from '../../components/Card/Card';

const CountriesList = ({
  regionsList,
  countriesList,
  searchInput,
  region,
  onSearchInputChange,
  onRegionChange,
}) => (
    <div className="countries-list">
      <div className="countries-list__filters">
        { /* search */ }
        <Input
          type="search"
          label="Search for a Country..."
          value={ searchInput }
          onChange={ onSearchInputChange }
        />

        { /* select */ }
        <Input
          type="select"
          label="Filter by Region"
          value={ region }
          onChange={ onRegionChange }
          options={ regionsList }
        />
      </div>

      <ul className="countries-list__list">
        { countriesList.map((country) => (
          <li
            className="countries-list__list--item"
            key={ country.alpha2Code }
          >
            <a href="#" className="countries-list__list--link">
                <Card details={ country } />
            </a>
          </li>
        )) }
      </ul>
    </div>
);

export default CountriesList;
