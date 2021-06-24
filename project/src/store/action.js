const ActionType = {
  CHANGE_CITY: 'main/changeCity',
};

const ActionCreator ={
  changeCity: (evt) => ({
    type: ActionType.CHANGE_CITY,
    payload: evt.target.textContent,
  }),
};

export {
  ActionType,
  ActionCreator
};
