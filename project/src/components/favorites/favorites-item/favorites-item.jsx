import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppRoute } from '../../../const';
import FavoritesCard from '../favorites-card/favorites-card';

function FavoritesItem({favorite}) {
  const [city , offers] = favorite;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={ AppRoute.MAIN }>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <FavoritesCard key={offer.id} offer={offer}/>)}
      </div>
    </li>

  );
}

FavoritesItem.propTypes ={
  favorite: PropTypes.array.isRequired,
};

export default FavoritesItem;
