import { ActionCreator } from './action';
import { APIRoute } from '../const';
import { getAdaptedOffer } from '../adapter/adapter';

const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => data.map((offer) => getAdaptedOffer(offer)))
    .then((offers) => dispatch(ActionCreator.loadOffers(offers)))
);

export {
  fetchOffersList
};

