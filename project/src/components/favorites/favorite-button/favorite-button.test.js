import React from 'react';
import { Provider } from 'react-redux';
import {render} from '@testing-library/react';
import configureStore from 'redux-mock-store';

import FavoriteButton from './favorite-button';

const mockFavoriteOffer = {
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

const mockNotFavoriteOffer = {
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
  isFavorite: false,
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
const mockStore = configureStore({});

describe('Component: FavoriteButton', () => {
  beforeAll(() => {
    store = mockStore({});
  });

  it('should render correctly when offer is favorite', () => {
    const { getByText, getByRole } = render(
      <Provider store={store}>
        <FavoriteButton offer={mockFavoriteOffer} buttonSettings={'default'}/>
      </Provider>,
    );

    expect(getByText(/To bookmarks/i)).toBeInTheDocument();
    expect(getByRole('button')).toHaveClass('place-card__bookmark-button--active');
  });

  it('should render correctly when offer is not favorite', () => {
    const { getByText, getByRole } = render(
      <Provider store={store}>
        <FavoriteButton offer={mockNotFavoriteOffer} buttonSettings={'default'}/>
      </Provider>,
    );

    expect(getByText(/To bookmarks/i)).toBeInTheDocument();
    expect(getByRole('button')).not.toHaveClass('place-card__bookmark-button--active');
  });
});
