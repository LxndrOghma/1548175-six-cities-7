import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_OFFER } from '../../const';
import { setCurrentOffer, setFavoriteOffers, setOffers} from '../../utils';
import {
  loadComments,
  loadFavoriteOffers,
  loadNearbyOffers,
  loadOffer,
  loadOffers,
  setCommentsLoadState,
  setCurrentOfferLoadState,
  setDataLoadingError,
  setFavoriteOffersLoadState,
  setIsCommentPosted,
  setNearbyOffersLoadState,
  setOfferIsFavorite,
  setOffersLoadState
} from '../action';

const initialState = {
  offers: [],
  favoriteOffers: [],
  currentOffer: DEFAULT_OFFER,
  reviews: [],
  nearbyOffers: [],
  isOffersLoaded: false,
  isCurrentOfferLoaded: false,
  isCommentsLoaded: false,
  isNearbyOffersLoaded: false,
  isFavoriteOffersLoaded: false,
  isCommentPosted: true,
  isDataLoadingError: false,
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    })
    .addCase(setOffersLoadState, (state, action) => {
      state.isOffersLoaded = action.payload;
    })
    .addCase(setCurrentOfferLoadState, (state, action) => {
      state.isCurrentOfferLoaded = action.payload;
    })
    .addCase(setCommentsLoadState, (state, action) => {
      state.isCommentsLoaded = action.payload;
    })
    .addCase(setNearbyOffersLoadState, (state, action) => {
      state.isNearbyOffersLoaded = action.payload;
    })
    .addCase(setFavoriteOffersLoadState, (state, action) => {
      state.isFavoriteOffersLoaded = action.payload;
    })
    .addCase(setIsCommentPosted, (state, action) => {
      state.isCommentPosted = action.payload;
    })
    .addCase(setOfferIsFavorite, (state, action) => {
      state.offers = setOffers(state.offers, action.payload);
      state.favoriteOffers = setFavoriteOffers(state.favoriteOffers, action.payload);
      state.currentOffer = setCurrentOffer(state.currentOffer, action.payload);
      state.nearbyOffers = setOffers(state.nearbyOffers, action.payload);
    })
    .addCase(setDataLoadingError, (state, action) => {
      state.isDataLoadingError = action.payload;
    });
});

export default data;
