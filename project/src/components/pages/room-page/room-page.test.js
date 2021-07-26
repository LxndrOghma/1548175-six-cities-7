import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import { createApi } from '../../../services/api';
import thunk from 'redux-thunk';

import RoomPage from './room-page';
import { AuthorizationStatus } from '../../../const';

let history;
let store;
let api = null;

const mockNearbyOffers = [
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    goods: ['Heating', 'Kitchen', 'Washing machine', 'Coffee machine'],
    host: {
      avatarUrl: 'img/test.jpg',
      id: 11,
      isPro: false,
      name: 'Horus',
    },
    id: 11,
    images: ['img/test.jpg, img/test2.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/test.jpg',
    price: 150,
    rating: 3,
    title: 'Test offer 1',
    type: 'room',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    goods: ['Heating', 'Kitchen', 'Washing machine', 'Coffee machine'],
    host: {
      avatarUrl: 'img/test.jpg',
      id: 11,
      isPro: false,
      name: 'Horus',
    },
    id: 22,
    images: ['img/test.jpg, img/test2.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/test.jpg',
    price: 150,
    rating: 3,
    title: 'Test offer 2',
    type: 'hotel',
  },

];

const mockCurrentOffer = {
  bedrooms: 2,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description: 'Test current offer description',
  goods: ['Heating', 'Kitchen', 'Washing machine', 'Coffee machine'],
  host: {
    avatarUrl: 'img/test.jpg',
    id: 11,
    isPro: false,
    name: 'Horus',
  },
  id: 44,
  images: ['img/test.jpg, img/test2.jpg'],
  isFavorite: true,
  isPremium: true,
  location: {
    latitude: 52.369553943508,
    longitude: 4.85309666406198,
    zoom: 8,
  },
  maxAdults: 2,
  previewImage: 'img/test.jpg',
  price: 150,
  rating: 3,
  title: 'Test current offer 1',
  type: 'room',
};

const mockReviews = [
  {
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
  {
    comment: 'Lorem',
    date: '2020-05-08T14:40:56.569Z',
    id: 3,
    rating: 1,
    user: {
      avatarUrl: 'img/test.jpg',
      id: 4,
      isPro: true,
      name: 'Jaghatai ',
    },
  },
];

describe('Component: RoomPage', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    history.push('offer/17');
    api = createApi(() => {});
  });

  it('should render correctly', () => {
    const mockStore = configureStore([thunk.withExtraArgument(api)]);
    store = mockStore({
      DATA: {
        nearbyOffers: mockNearbyOffers,
        currentOffer: mockCurrentOffer,
        reviews: mockReviews,
        isCurrentOfferLoaded: true,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user: {
          avatarUrl: 'img/test.jpg',
          email: 'test@test.ru',
          id: 1,
          isPro: false,
          name: 'Test',
        },
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <RoomPage />
        </Router>
      </Provider>,
    );

    expect(getByText(/Test current offer description/i)).toBeInTheDocument();
    expect(getByText(/Test current offer 1/i)).toBeInTheDocument();
    expect(getByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit/i)).toBeInTheDocument();
    expect(getByText(/Test offer 1/i)).toBeInTheDocument();
    expect(getByText(/Test offer 2/i)).toBeInTheDocument();
  });

  it('should render correctly when offers not loaded', () => {
    const mockStore = configureStore([thunk.withExtraArgument(api)]);
    store = mockStore({
      DATA: {
        nearbyOffers: mockNearbyOffers,
        currentOffer: mockCurrentOffer,
        reviews: mockReviews,
        isCurrentOfferLoaded: false,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user: {
          avatarUrl: 'img/test.jpg',
          email: 'test@test.ru',
          id: 1,
          isPro: false,
          name: 'Test',
        },
      },
    });

    const { queryByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <RoomPage />
        </Router>
      </Provider>);

    expect(queryByText(/Test current offer description/i)).not.toBeInTheDocument();
  });
});
