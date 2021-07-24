import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { createApi } from '../../services/api';
import { AppRoute, AuthorizationStatus, DEFAULT_CITY, DEFAULT_SORT_TYPE } from '../../const';
import App from './app';
import thunk from 'redux-thunk';

let history = null;
let store = null;
let fakeApp = null;
let api = null;

const offers = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/test.jpg',
      id: 1,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: ['img/test1.jpg', 'img/test2.jpg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/test3.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Lorem ipsum',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/test.jpg',
      id: 2,
      isPro: true,
      name: 'Angelina',
    },
    id: 2,
    images: ['img/test1.jpg', 'img/test2.jpg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/test3.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
];

const favoriteOffers = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/test.jpg',
      id: 1,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: ['img/test1.jpg', 'img/test2.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/test3.jpg',
    price: 120,
    rating: 4.8,
    title: 'Test favorite offer',
    type: 'apartment',
  },
];

const currentOffer = {
  bedrooms: 6,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Paris',
  },
  description: 'Test current offer description',
  goods: ['Heating', 'Kitchen', 'Cable TV'],
  host: {
    avatarUrl: 'img/test.jpg',
    id: 1,
    isPro: true,
    name: 'Tester',
  },
  id: 1,
  images: ['img/test1.jpg', 'img/test2.jpg'],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'img/test3.jpg',
  price: 120,
  rating: 4.8,
  title: 'Test current offer title',
  type: 'apartment',
};

const reviews = [
  {
    comment: 'Test comment 1',
    date: '2019-05-08T14:13:56.569Z',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/test.jpg',
      id: 1,
      isPro: false,
      name: 'Max',
    },
  },
  {
    comment: 'Test comment 2',
    date: '2020-05-08T14:40:56.569Z',
    id: 2,
    rating: 2,
    user: {
      avatarUrl: 'img/test.jpg',
      id: 2,
      isPro: false,
      name: 'Jaghatai Khan',
    },
  },
];

const nearbyOffers = [
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Test Nearby 1',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/test.jpg',
      id: 1,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: ['img/test1.jpg', 'img/test2.jpg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/test3.jpg',
    price: 120,
    rating: 4.8,
    title: 'Test Nearby 1',
    type: 'apartment',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Test Nearby 2',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/test.jpg',
      id: 2,
      isPro: true,
      name: 'Angelina',
    },
    id: 2,
    images: ['img/test1.jpg', 'img/test2.jpg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/test3.jpg',
    price: 120,
    rating: 4.8,
    title: 'Test Nearby 2',
    type: 'apartment',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Test Nearby 3',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/test.jpg',
      id: 22,
      isPro: true,
      name: 'Angelina',
    },
    id: 22,
    images: ['img/test1.jpg', 'img/test2.jpg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/test3.jpg',
    price: 120,
    rating: 4.8,
    title: 'Test Nearby 3',
    type: 'apartment',
  },
];

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    api = createApi(() => {});

    const createFakeStore = configureStore([thunk.withExtraArgument(api)]);

    store = createFakeStore({
      DATA: {
        offers: offers,
        favoriteOffers: favoriteOffers,
        currentOffer: currentOffer,
        reviews: reviews,
        nearbyOffers: nearbyOffers,
        isOffersLoaded: true,
        isCurrentOfferLoaded: true,
        isCommentsLoaded: true,
        isNearbyOffersLoaded: true,
        isFavoriteOffersLoaded: true,
        isCommentPosted: true,
      },
      UI: {
        city: DEFAULT_CITY,
        sortType: DEFAULT_SORT_TYPE,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.UNKNOWN,
        user: {
          avatarUrl: '',
          email: '',
          id: null,
          isPro: '',
          name: '',
        },
      },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render "MainPage" when user navigate to "/"', () => {
    history.push(AppRoute.MAIN);
    render(fakeApp);

    expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
    expect(screen.getByText(/ to stay in /i)).toBeInTheDocument();
    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
  });

  it('should render "LoginPage" when user navigate to "/login"', () => {
    history.push(AppRoute.LOGIN);
    render(fakeApp);

    expect(screen.getByRole('heading')).toHaveTextContent(/Sign in/i);
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent(/Sign in/i);
  });

  it('should render "RoomPage" when user navigate to "/offers"', () => {
    history = createMemoryHistory();
    const createFakeStore = configureStore([thunk.withExtraArgument(api)]);

    store = createFakeStore({
      DATA: {
        offers: offers,
        favoriteOffers: favoriteOffers,
        currentOffer: currentOffer,
        reviews: reviews,
        nearbyOffers: nearbyOffers,
        isOffersLoaded: true,
        isCurrentOfferLoaded: true,
        isCommentsLoaded: true,
        isNearbyOffersLoaded: true,
        isFavoriteOffersLoaded: true,
        isCommentPosted: true,
      },
      UI: {
        city: DEFAULT_CITY,
        sortType: DEFAULT_SORT_TYPE,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user: {
          avatarUrl: '',
          email: '',
          id: null,
          isPro: '',
          name: '',
        },
      },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );

    history.push(AppRoute.ROOM);
    render(fakeApp);

    expect(screen.getByText(/Test current offer title/i)).toBeInTheDocument();
    expect(screen.getByText(/6 bedrooms/i)).toBeInTheDocument();
    expect(screen.getByText(/Max 4 adults/i)).toBeInTheDocument();
    expect(screen.getByText(/Heating/i)).toBeInTheDocument();
    expect(screen.getByText(/Kitchen/i)).toBeInTheDocument();
    expect(screen.getByText(/Cable TV/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Tester/i)).toBeInTheDocument();
    expect(screen.getByText(/Test current offer description/i)).toBeInTheDocument();
    expect(screen.getByText(/Test comment 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Test comment 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Nearby 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Nearby 2/i)).toBeInTheDocument();
  });

  it('should render "Favorites" when user navigate to "/favorites"', () => {
    history = createMemoryHistory();
    const createFakeStore = configureStore([thunk.withExtraArgument(api)]);

    store = createFakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user: {
          avatarUrl: 'img/test.jpg',
          email: 'test@test.ru',
          id: 1,
          isPro: 'false',
          name: 'Tester',
        },
      },
      DATA: {
        isFavoriteOffersLoaded: true,
        favoriteOffers: favoriteOffers,
      },
      UI: {
        city: DEFAULT_CITY,
        activeSortType: DEFAULT_SORT_TYPE,
      },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );

    history.push(AppRoute.FAVORITES);
    render(fakeApp);

    expect(screen.getByText(/test@test.ru/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
    expect(screen.getByText(/Test favorite offer/i)).toBeInTheDocument();
  });

  it('should render "NotFoundPage" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
    expect(screen.getByText('Back to main page')).toBeInTheDocument();
  });
});
