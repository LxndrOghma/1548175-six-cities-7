import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppRoute } from '../../../const';
import FavoritesPlaces from '../favorites-places/favorites-places';

function FavoritesItem({city, offers}) {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={ AppRoute.MAIN }>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <FavoritesPlaces offers={offers}/>
    </li>

  );
}

FavoritesItem.propTypes ={
  offers: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
};

export default FavoritesItem;