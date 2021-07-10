import React from 'react';
import PropTypes from 'prop-types';

import Card from '../offer-card/offer-card';
import offersProp from '../../props/offers.prop';
import { offersListSettings } from '../../../const';

function OffersList({offers, setActiveCard = () => {}, pageType}) {
  return (
    <div className={
      `places__list
      ${offersListSettings[pageType].classNameListDiv}`
    }
    >
      {offers.map((offer) => <Card key={offer.id} offer={offer} setActiveCard={setActiveCard} pageType={pageType}/>)}
    </div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
  setActiveCard: PropTypes.func,
  pageType: PropTypes.string.isRequired,
};

export default OffersList;

