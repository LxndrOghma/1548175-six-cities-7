import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card';
import offersProp from '../../props/offers.prop';
import { OffersListSettings } from '../../../const';

function OffersList({offers, setActiveCard = () => {}, pageType}) {
  return (
    <div className={
      `places__list
      ${OffersListSettings[pageType].classNameListDiv}`
    }
    >
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          setActiveCard={setActiveCard}
          pageType={pageType}
          handleMouseEnter={() => {
            setActiveCard(offer.id);
          }}
          handleMouseLeave={() => {
            setActiveCard(NaN);
          }}
        />))}
    </div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
  setActiveCard: PropTypes.func,
  pageType: PropTypes.string.isRequired,
};

export default OffersList;

