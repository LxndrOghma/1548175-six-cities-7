const ActionType = {
  CHANGE_CITY: 'main/changeCity',
};

const ActionCreator ={
  changeCity: (payload) => ({
    type: ActionType.CHANGE_CITY,
    payload: payload,
  }),
};

export {
  ActionType,
  ActionCreator
};
