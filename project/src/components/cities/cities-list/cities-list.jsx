import React from 'react';
import PropTypes from 'prop-types';

import CitiesListItem from '../cities-list-item/cities-list-item';
import { cities } from '../../../const';

function CitiesList({onCityChange, activeCity}) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map(({name, id}) => <CitiesListItem key={id} city={name} onCityChange={onCityChange} activeCity={activeCity}/>)}
        </ul>
      </section>
    </div>
  );
}

CitiesList.propTypes = {
  onCityChange: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
};

export default CitiesList;
