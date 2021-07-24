import React from 'react';
import {render} from '@testing-library/react';
import {Route, Router, Switch} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';


import UserMenuSignedIn from './user-menu-signed-in';


let history;
let store;
const mockStore = configureStore({});

describe('Component: UserMenuSignedIn', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    store = mockStore({
      USER: {
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

  it('should render correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <UserMenuSignedIn />
        </Router>
      </Provider>);

    expect(getByText(/test@test.ru/i)).toBeInTheDocument();
    expect(getByText(/Sign out/i)).toBeInTheDocument();
  });

  it('should redirect to favorites page after link click', () => {
    history.push('/offer/1');

    const {getByTestId, getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/favorites" exact>
              <h1>This is favorites page</h1>
            </Route>
            <Route>
              <UserMenuSignedIn />
            </Route>
          </Switch>
        </Router>
      </Provider>);

    expect(getByTestId('header__nav-link--profile')).toBeInTheDocument();
    userEvent.click(getByTestId('header__nav-link--profile'));

    expect(getByText(/This is favorites page/i)).toBeInTheDocument();
  });
});
