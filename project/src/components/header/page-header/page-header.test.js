import React from 'react';
import {render} from '@testing-library/react';
import {Route, Router, Switch} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';


import Header from './page-header';
import { AuthorizationStatus } from '../../../const';


let history;
let store;
const mockStore = configureStore({});

describe('Component: Header', () => {
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
          <Header />
        </Router>
      </Provider>);

    expect(getByText(/test@test.ru/i)).toBeInTheDocument();
    expect(getByText(/Sign out/i)).toBeInTheDocument();
  });

  it('should redirect to main page after link click', () => {
    history.push('/offer/1');

    const {getByTestId, getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <h1>This is main page</h1>
            </Route>
            <Route>
              <Header />
            </Route>
          </Switch>
        </Router>
      </Provider>);

    expect(getByTestId('header__logo-link')).toBeInTheDocument();
    userEvent.click(getByTestId('header__logo-link'));

    expect(getByText(/This is main page/i)).toBeInTheDocument();
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
          <Header />
        </Router>
      </Provider>);

    expect(queryByText(/test@test.ru/i)).not.toBeInTheDocument();
    expect(getByText(/Sign In/i)).toBeInTheDocument();
  });
});
