const ActionType = {
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

const ActionCreator ={
  changeCity: (payload) => ({
    type: ActionType.CHANGE_CITY,
    payload,
  }),
  changeSortType: (payload) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload,
  }),
  loadOffers: (payload) => ({
    type: ActionType.LOAD_OFFERS,
    payload,
  }),
  loadOffer: (payload) => ({
    type: ActionType.LOAD_OFFER,
    payload,
  }),
  loadComments: (payload) => ({
    type: ActionType.LOAD_COMMENTS,
    payload,
  }),
  loadNearbyOffers: (payload) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload,
  }),
  setOffersLoadState: (payload) => ({
    type: ActionType.SET_OFFERS_LOAD_STATE,
    payload,
  }),
  setCurrentOfferLoadState: (payload) => ({
    type: ActionType.SET_CURRENT_OFFER_LOAD_STATE,
    payload,
  }),
  setCommentsLoadState: (payload) => ({
    type: ActionType.SET_COMMENTS_LOAD_STATE,
    payload,
  }),
  setIsCommentPosted: (payload) => ({
    type: ActionType.SET_IS_COMMENT_POSTED,
    payload,
  }),
  setNearbyOffersLoadState: (payload) => ({
    type: ActionType.SET_NEARBY_OFFERS_LOAD_STATE,
    payload,
  }),
  requiredAuthorization: (payload) => ({
    type: ActionType.REQUIED_AUTHORIZATION,
    payload,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (payload) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload,
  }),
  setUser: (payload) => ({
    type: ActionType.SET_USER,
    payload,
  }),
};

export {
  ActionType,
  ActionCreator
};
