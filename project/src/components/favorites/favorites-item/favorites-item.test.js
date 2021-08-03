import React from 'react';
import * as Redux from 'react-redux';
import {render} from '@testing-library/react';
import {Route, Router, Switch} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';

import FavoritesItem from './favorites-item';
import { ActionType } from '../../../store/action';

const mockOffers = [
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

describe('Component: FavoritesItem', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    store = mockStore({
      DATA: {
        favoriteOffers: mockOffers,
      },
    });
  });

  it('should render correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesItem city={'Paris'} />
        </Router>
      </Provider>);

    expect(getByText(/Paris/i)).toBeInTheDocument();
  });

  it('should redirect to main page after link click', () => {
    history.push('/favorite');
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    const {getByTestId, queryByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <h1>This is main page</h1>
            </Route>
            <Route>
              <FavoritesItem city={'Paris'} />
            </Route>
          </Switch>
        </Router>
      </Provider>);

    expect(getByTestId('locations__item-link')).toBeInTheDocument();
    userEvent.click(getByTestId('locations__item-link'));

    expect(dispatch).toBeCalled();
    expect(dispatch).nthCalledWith(1, {
      type: ActionType.CHANGE_CITY,
      payload: 'Paris',
    });

    expect(queryByText('This is main page')).toBeInTheDocument();
  });
});
