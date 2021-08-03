import React from 'react';
import PropTypes from 'prop-types';

import FavoritesList from '../favorites-list/favorites-list';
import offersProp from '../../props/offers.prop';

function FavoritesSection({offers}) {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <FavoritesList/>
    </section>
  );
}

FavoritesSection.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
};

export default FavoritesSection;
