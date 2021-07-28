import React from 'react';
import PropTypes from 'prop-types';

import FavoritesCard from '../favorites-card/favorites-card';
import offersProp from '../../props/offers.prop';

function FavoritesPlaces({offers}) {
  return (
    <div className="favorites__places">
      {offers.map((offer) => <FavoritesCard key={offer.id} offer={offer}/>)}
    </div>
  );
}

FavoritesPlaces.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
};

export default FavoritesPlaces;
