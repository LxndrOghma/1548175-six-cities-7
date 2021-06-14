import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Card from '../offer-card/offer-card';
import offersProp from '../../props/offers.prop';

function OffersList({offers}) {
  const [, setActiveCard] = useState('');

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Card key={offer.id} offer={offer} setActiveCard={setActiveCard}/>)}
    </div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
};

export default OffersList;

