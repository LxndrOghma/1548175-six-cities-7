import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import { createApi } from '../../../services/api';
import thunk from 'redux-thunk';

import MainPage from './main-page';
import { AuthorizationStatus } from '../../../const';

let history;
let store;
let api = null;

describe('Component: MainPage', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    api = createApi(() => {});
  });

  it('should render correctly with loaded offers', () => {
    const mockStore = configureStore([thunk.withExtraArgument(api)]);
    store = mockStore({
      DATA: {
        offers: [],
        isOffersLoaded: true,
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
      UI: {
        city: 'Paris',
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <MainPage />
        </Router>
      </Provider>);

    expect(getByText(/No places to stay available/i)).toBeInTheDocument();
    expect(getByText(/test@test.ru/i)).toBeInTheDocument();
  });

  it('should render correctly when offers not loaded', () => {
    const mockStore = configureStore([thunk.withExtraArgument(api)]);
    store = mockStore({
      DATA: {
        offers: [],
        isOffersLoaded: false,
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
      UI: {
        city: 'Paris',
      },
    });

    const { queryByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <MainPage />
        </Router>
      </Provider>);

    expect(queryByText(/No places to stay available/i)).not.toBeInTheDocument();
  });
});
