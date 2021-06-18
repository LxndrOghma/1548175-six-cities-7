import React from 'react';
import PropTypes from 'prop-types';

import Card from '../offer-card/offer-card';
import offersProp from '../../props/offers.prop';
import { useParams } from 'react-router-dom';

function OffersList({offers, setActiveCard}) {
  const params = useParams();

  const isRoomPage = Boolean(params.id);


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
};

export default OffersList;

