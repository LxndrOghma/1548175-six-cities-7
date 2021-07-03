const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  CHANGE_SORT_TYPE: 'main/changeSortType',
  LOAD_OFFERS: 'data/loadOffers',
  SET_LOAD_STATE: 'data/setLoadState',
  REQUIED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_MAIN: 'route/redirectToMain',
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
  setLoadState: (payload) => ({
    type: ActionType.SET_LOAD_STATE,
    payload,
  }),
  requiredAuthorization: (payload) => ({
    type: ActionType.REQUIED_AUTHORIZATION,
    payload,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToMain: (payload) => ({
    type: ActionType.REDIRECT_TO_MAIN,
    payload,
  }),
};

export {
  ActionType,
  ActionCreator
};
