import { createSelector } from 'reselect';
import { getSortedOffersList } from '../../utils';
import { NameSpace } from '../root-reducer';
import { getCity, getSortType } from '../ui/selectors';

const getOffers = (state) => state[NameSpace.DATA].offers;
const getCurrentOffer = (state) => state[NameSpace.DATA].currentOffer;
const getReviews = (state) => state[NameSpace.DATA].reviews;
const getNearbyOffers = (state) => state[NameSpace.DATA].nearbyOffers;
const getFavoriteOffers = (state) => state[NameSpace.DATA].favoriteOffers;
const getIsOffersLoaded = (state) => state[NameSpace.DATA].isOffersLoaded;
const getIsCurrentOfferLoaded = (state) => state[NameSpace.DATA].isCurrentOfferLoaded;
const getIsFavoriteOffersLoaded = (state) => state[NameSpace.DATA].isFavoriteOffersLoaded;
const getIsCommentsLoaded = (state) => state[NameSpace.DATA].isCommentsLoaded;
const getIsNearbyOffersLoaded = (state) => state[NameSpace.DATA].isNearbyOffersLoaded;
const getIsCommentPosted = (state) => state[NameSpace.DATA].isCommentPosted;
const getIsDataLoadingError = (state) => state[NameSpace.DATA].isDataLoadingError;

const getSortedOffers = createSelector(
  getOffers,
  getCity,
  getSortType,
  (offers, city, sortType) => getSortedOffersList(offers.filter((offer) => offer.city.name === city) ,sortType),
);

const getFavoriteCities = createSelector(
  getFavoriteOffers,
  (offers) => [...new Set(offers.map((offer) => offer.city.name))],
);

const getSortedByCityFavoriteOffers = createSelector(
  getFavoriteOffers,
  getFavoriteCities,
  (offers, cities) => new Map(
    cities.map((city) => [city, offers.filter((offer) => city === offer.city.name)])),
);

export {
  getOffers,
  getCurrentOffer,
  getReviews,
  getNearbyOffers,
  getFavoriteOffers,
  getIsOffersLoaded,
  getIsCurrentOfferLoaded,
  getIsCommentsLoaded,
  getIsNearbyOffersLoaded,
  getIsCommentPosted,
  getIsDataLoadingError,
  getIsFavoriteOffersLoaded,
  getSortedOffers,
  getFavoriteCities,
  getSortedByCityFavoriteOffers
};

