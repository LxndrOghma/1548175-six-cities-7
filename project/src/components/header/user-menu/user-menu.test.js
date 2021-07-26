import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import { AuthorizationStatus } from '../../../const';


import UserMenu from './user-menu';


let history;
let store;
const mockStore = configureStore({});

describe('Component: PageHeader', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    store = mockStore({
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
  });

  it('should render correctly when user logged in', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <UserMenu />
        </Router>
      </Provider>);

    expect(getByText(/test@test.ru/i)).toBeInTheDocument();
    expect(getByText(/Sign out/i)).toBeInTheDocument();
  });

  it('should render correctly when user logged out', () => {

    store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
    });
    const { getByText, queryByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <UserMenu />
        </Router>
      </Provider>);

    expect(queryByText(/test@test.ru/i)).not.toBeInTheDocument();
    expect(getByText(/Sign In/i)).toBeInTheDocument();
  });
});
