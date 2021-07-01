import { ActionCreator } from './action';
import { APIRoute } from '../const';
import { getAdaptedOffer } from '../adapter/adapter';

const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      const offers = data.map((offer) => getAdaptedOffer(offer));
      dispatch(ActionCreator.loadOffers(offers));
    })
    .then(() => dispatch(ActionCreator.setLoadState(true)))
);

export {
  fetchOffersList
};

