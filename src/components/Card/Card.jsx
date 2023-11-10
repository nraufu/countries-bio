import React from 'react';

const Card = ({ details }) => (
  <div className="card">
    <div className="card__image">
      <img src={ details.flags?.svg || details.flags?.png } alt={ details.demonym } />
    </div>

    <div className="card__details">
      <h2 className="card__details--title">{ details.name }</h2>
      <p className="card__details--description">
        <span className="card__details--description__label">
          Population:
        </span>
        <span className="card__details--description__value">
          { details.population.toLocaleString() }
        </span>
      </p>
      <p className="card__details--description">
        <span className="card__details--description__label">Region: </span>
        <span className="card__details--description__value">
          { details.region }
        </span>
      </p>
      <p className="card__details--description">
        <span className="card__details--description__label">Capital: </span>
        <span className="card__details--description__value">
          { details.capital }
        </span>
      </p>
    </div>
  </div>
);

export default Card;
