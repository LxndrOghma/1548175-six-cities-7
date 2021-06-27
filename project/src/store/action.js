const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  CHANGE_SORT_TYPE: 'main/changeSortType',
};

const ActionCreator ={
  changeCity: (payload) => ({
    type: ActionType.CHANGE_CITY,
    payload: payload,
  }),
  changeSortType: (payload) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: payload,
  }),
};

export {
  ActionType,
  ActionCreator
};
