import React from 'react';
import { Provider } from 'react-redux';
import {render} from '@testing-library/react';
import configureStore from 'redux-mock-store';

import FavoritesCard from './favorites-card';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

const mockOffer = {
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
  title: 'Excepteur sint occaecat cupidatat non proident',
  type: 'room',
};

let store;
let history;
const mockStore = configureStore({});

describe('Component: FavoriteButton', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    store = mockStore({});
  });

  it('should render correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesCard offer={mockOffer} />
        </Router>
      </Provider>,
    );

    expect(getByText(/€150/i)).toBeInTheDocument();
    expect(getByText(/Excepteur sint occaecat cupidatat non proident/i)).toBeInTheDocument();
    expect(getByText(/Rating/i)).toBeInTheDocument();
    expect(getByText(/Room/i)).toBeInTheDocument();
  });
});
