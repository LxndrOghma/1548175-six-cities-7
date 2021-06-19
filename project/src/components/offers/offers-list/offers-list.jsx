import React from 'react';
import PropTypes from 'prop-types';

import Card from '../offer-card/offer-card';
import offersProp from '../../props/offers.prop';
import { OffersListType } from '../../../const';

function OffersList({offers, setActiveCard, type}) {
  const isRoomPage = type === OffersListType.ROOM_PAGE;

  return (
    <div className={
      `places__list
      ${isRoomPage
      ? 'near-places__list'
      : 'cities__places-list tabs__content'}`
    }
    >
      {offers.map((offer) => <Card key={offer.id} offer={offer} setActiveCard={setActiveCard} isRoomPage={isRoomPage}/>)}
    </div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
  setActiveCard: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default OffersList;

