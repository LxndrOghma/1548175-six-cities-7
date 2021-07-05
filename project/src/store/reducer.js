import { nearestOffers } from '../mocks/offers';
import reviews from '../mocks/reviews';
import { ActionType } from './action';
import { AuthorizationStatus } from '../const';

const initialState = {
  city: 'Paris',
  offers: [],
  currentOffer: {},
  reviews: reviews,
  nearestOffers: nearestOffers,
  sortType: 'Popular',
  isOffersLoaded: false,
  isCurrentOfferLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  user: {
    avatarUrl: '',
    email: '',
    id: null,
    isPro: '',
    name: '',
  },
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
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        currentOffer: action.payload,
      };
    case ActionType.SET_OFFERS_LOAD_STATE:
      return {
        ...state,
        isOffersLoaded: action.payload,
      };
    case ActionType.SET_CURRENT_OFFER_LOAD_STATE:
      return {
        ...state,
        isCurrentOfferLoaded: action.payload,
      };
    case ActionType.REQUIED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    case ActionType.SET_USER:
      return {
        ...state,
        user: {
          avatarUrl: action.payload.avatarUrl,
          email: action.payload.email,
          id: action.payload.id,
          isPro: action.payload.isPro,
          name: action.payload.name,
        },
      };
    default:
      return state;
  }
};

export { reducer };
