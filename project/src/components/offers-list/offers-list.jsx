import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card/card';
import offersProp from '../props/offers.prop';

function OffersList({offers}) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Card key={offer.id} offer={offer}/>)}
    </div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
};

export default OffersList;

