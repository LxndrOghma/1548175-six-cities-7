import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import FavoritesSection from './favorites-section';

const mockOffers = [
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

let history;
let store;
const mockStore = configureStore({});

describe('Component: FavoritesSection', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly', () => {
    store = mockStore({});

    const { getByRole, getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesSection offers={mockOffers} />
        </Router>
      </Provider>);

    expect(getByRole('heading', {level: 1})).toBeInTheDocument();
    expect(getByText(/Amsterdam/i)).toBeInTheDocument();
    expect(getByText(/Paris/i)).toBeInTheDocument();
    expect(getByText(/Test offer 1/i)).toBeInTheDocument();
    expect(getByText(/Test offer 2/i)).toBeInTheDocument();
  });
});
