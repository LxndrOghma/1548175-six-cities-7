import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function CitiesListItem({city, onCityChange, activeCity}) {
  return (
    <li className="locations__item" onClick={onCityChange}>
      <NavLink className={`locations__item-link tabs__item ${city === activeCity ? 'tabs__item--active' : ''}`} to={'#'}>
        <span>{city}</span>
      </NavLink>
    </li>
  );
}

CitiesListItem.propTypes = {
  city: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
};

export default CitiesListItem;
