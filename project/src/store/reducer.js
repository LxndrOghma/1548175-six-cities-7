import { offers, nearestOffers } from '../mocks/offers';
import reviews from '../mocks/reviews';
import { ActionType } from './action';

const initialState = {
  city: 'Paris',
  offers: offers,
  reviews: reviews,
  nearestOffers: nearestOffers,
  sortType: 'Popular',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };
    default:
      return state;
  }
};

export { reducer };
