import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ details }) => (
  <div className="card">
    <img src={details.image} alt={details.imgAlt} className="card__image" />
    <div className="card__details">
      <h2 className="card__details--name">{details.countryName}</h2>
      <span className="card__details--population">Population: {details.countryPopulation}</span>
      <span className="card__details--region">Region: {details.CountryRegion}</span>
      <span className="card__details--capital">Capital: {details.countryCapital}</span>
    </div>
  </div>
);

Card.propTypes = {
  details: PropTypes.object.isRequired,
};

export default Card;
