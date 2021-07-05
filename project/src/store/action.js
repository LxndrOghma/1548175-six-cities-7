const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  CHANGE_SORT_TYPE: 'main/changeSortType',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_OFFER: 'data/loadOffer',
  SET_OFFERS_LOAD_STATE: 'data/setOffersLoadState',
  SET_CURRENT_OFFER_LOAD_STATE: 'data/setCurrentOfferLoadState',
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
  setOffersLoadState: (payload) => ({
    type: ActionType.SET_OFFERS_LOAD_STATE,
    payload,
  }),
  setCurrentOfferLoadState: (payload) => ({
    type: ActionType.SET_CURRENT_OFFER_LOAD_STATE,
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
