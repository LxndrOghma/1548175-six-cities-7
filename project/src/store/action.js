import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  CHANGE_SORT_TYPE: 'main/changeSortType',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_OFFER: 'data/loadOffer',
  LOAD_COMMENTS: 'data/loadComments',
  LOAD_NEARBY_OFFERS: 'data/loadNearbyOffers',
  SET_OFFERS_LOAD_STATE: 'data/setOffersLoadState',
  SET_CURRENT_OFFER_LOAD_STATE: 'data/setCurrentOfferLoadState',
  SET_COMMENTS_LOAD_STATE: 'data/setCommentsLoadState',
  SET_IS_COMMENT_POSTED: 'data/setIsCommentPosted',
  SET_NEARBY_OFFERS_LOAD_STATE: 'data/setNearbyOffersLoadState',
  REQUIED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  SET_USER: 'user/setUser',
  REDIRECT_TO_ROUTE: 'route/redirectToRoute',
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (payload) => ({payload}));

export const changeSortType = createAction(ActionType.CHANGE_SORT_TYPE, (payload) => ({payload}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (payload) => ({payload}));

export const loadOffer = createAction(ActionType.LOAD_OFFER, (payload) => ({payload}));

export const loadComments = createAction(ActionType.LOAD_COMMENTS, (payload) => ({payload}));

export const loadNearbyOffers = createAction(ActionType.LOAD_NEARBY_OFFERS, (payload) => ({payload}));

export const setOffersLoadState = createAction(ActionType.SET_OFFERS_LOAD_STATE, (payload) => ({payload}));

export const setCurrentOfferLoadState = createAction(ActionType.SET_CURRENT_OFFER_LOAD_STATE, (payload) => ({payload}));

export const setCommentsLoadState = createAction(ActionType.SET_COMMENTS_LOAD_STATE, (payload) => ({payload}));

export const setIsCommentPosted = createAction(ActionType.SET_IS_COMMENT_POSTED, (payload) => ({payload}));

export const setNearbyOffersLoadState = createAction(ActionType.SET_NEARBY_OFFERS_LOAD_STATE, (payload) => ({payload}));

export const requiredAuthorization = createAction(ActionType.REQUIED_AUTHORIZATION, (payload) => ({payload}));

export const logout = createAction(ActionType.LOGOUT);

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (payload) => ({payload}));

export const setUser = createAction(ActionType.SET_USER, (payload) => ({payload}));
