import { offers, nearestOffers } from '../mocks/offers';
import reviews from '../mocks/reviews';
import { ActionType } from './action';

const initialState = {
  city: 'Paris',
  offers: offers,
  reviews: reviews,
  nearestOffers: nearestOffers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};

export { reducer };
