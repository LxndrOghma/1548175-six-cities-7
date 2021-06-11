import React from 'react';
import PropTypes from 'prop-types';

import FavoritesItem from '../favorites-item/favorites-item';
import offersProp from '../../props/offers.prop';


function FavoritesList({offers}) {
  const getSortedFavorites = (allOffers) => {
    const favoriteOffers = allOffers.filter((offer) => offer.isFavorite === true);

    const allFavoritesCities = favoriteOffers.reduce((allCities, offer) => {
      allCities.push(offer.city.name);
      return allCities;
    }, []);

    const uniqueFavoritesCities = Array.from(new Set(allFavoritesCities));

    const sortedFavoriteOffers = uniqueFavoritesCities.reduce((sortedOffers, favoriteOffer) => {
      sortedOffers[favoriteOffer] = favoriteOffers.filter((offer) => offer.city.name === favoriteOffer);
      return sortedOffers;
    }, {});

    return Object.entries(sortedFavoriteOffers);
  };

  const sortedFavorites = getSortedFavorites(offers);

  return (
    <ul className="favorites__list">
      {sortedFavorites.map((favorite) => <FavoritesItem key={favorite} favorite={favorite} />)}
    </ul>
  );
}

FavoritesList.propTypes ={
  offers: PropTypes.arrayOf(offersProp).isRequired,
};

export default FavoritesList;
