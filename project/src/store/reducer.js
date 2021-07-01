import { nearestOffers } from '../mocks/offers';
import reviews from '../mocks/reviews';
import { ActionType } from './action';

const initialState = {
  city: 'Paris',
  offers: [],
  reviews: reviews,
  nearestOffers: nearestOffers,
  sortType: 'Popular',
  isDataLoaded: false,
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
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };
    case ActionType.SET_LOAD_STATE:
      return {
        ...state,
        isDataLoaded: action.payload,
      };
    default:
      return state;
  }
};

export { reducer };
