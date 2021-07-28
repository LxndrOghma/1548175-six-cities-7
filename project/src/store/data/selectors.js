import { NameSpace } from '../root-reducer';

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
  getIsFavoriteOffersLoaded
};

