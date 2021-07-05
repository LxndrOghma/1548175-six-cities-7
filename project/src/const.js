const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
  NOT_FOUND: '/404page',
};

const APIRoute = {
  HOTELS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

const cities = [
  {
    name: 'Paris',
    id: 'city-1',
  },
  {
    name: 'Cologne',
    id: 'city-2',
  },
  {
    name: 'Brussels',
    id: 'city-3',
  },
  {
    name: 'Amsterdam',
    id: 'city-4',
  },
  {
    name: 'Hamburg',
    id: 'city-5',
  },
  {
    name: 'Dusseldorf',
    id: 'city-6',
  },
];

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

const offersListSettings= {
  main: {
    classNameListDiv: 'cities__places-list tabs__content',
    classNameCardArticle: 'cities__place-card',
    classNameWrapperDiv: 'cities__image-wrapper',
  },
  room: {
    classNameListDiv: 'near-places__list',
    classNameCardArticle: 'near-places__card',
    classNameWrapperDiv: 'near-places__image-wrapper',
  },
};

const SortingOptions = {
  POPULAR: 'Popular',
  LOW_TO_HIGH_PRICE: 'Price: low to high',
  HIGH_TO_LOW_PRICE: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};

const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;

export {
  AppRoute,
  APIRoute,
  ratings,
  RatingSystem,
  PinSettings,
  OffersListType,
  offersListSettings,
  cities,
  SortingOptions,
  AuthorizationStatus,
  isCheckedAuth
};
