const AppRoute ={
  MAIN: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
};

const ratings = [5, 4, 3, 2, 1];

const RatingSystem = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
};

const PinSettings = {
  DEFAULT_IMG: 'img/pin.svg',
  ACTIVE_IMG: 'img/pin-active.svg',
  SIZE: [30, 30],
  ANCHOR: [15, 30],
};

const OffersListType = {
  MAIN_PAGE: 'main',
  ROOM_PAGE: 'room',
};

export {
  AppRoute,
  ratings,
  RatingSystem,
  PinSettings,
  OffersListType
};
