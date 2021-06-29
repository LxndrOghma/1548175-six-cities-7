const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  CHANGE_SORT_TYPE: 'main/changeSortType',
  LOAD_OFFERS: 'data/loadOffers',
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
};

export {
  ActionType,
  ActionCreator
};
