import React from 'react';
import PropTypes from 'prop-types';

import FavoritesItem from '../favorites-item/favorites-item';
import offersProp from '../../props/offers.prop';


function FavoritesList({offers}) {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite === true);
  const cities = [...new Set(favoriteOffers.map((item) => item.city.name))];

  return (
    <ul className="favorites__list">
      {cities.map((city) => <FavoritesItem key={city} city={city} offers={offers.filter((offer) => city === offer.city.name)} />)}
    </ul>
  );
}

FavoritesList.propTypes ={
  offers: PropTypes.arrayOf(offersProp).isRequired,
};

export default FavoritesList;
