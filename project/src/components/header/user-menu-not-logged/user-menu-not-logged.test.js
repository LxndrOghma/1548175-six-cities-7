import React from 'react';
import {render} from '@testing-library/react';
import {Route, Router, Switch} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';

import UserMenuNotLogged from './user-menu-not-logged';

let history;

describe('Component: CitiesListItem', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly', () => {
    const {getByText} = render(
      <Router history={history} >
        <UserMenuNotLogged />
      </Router>,
    );
    const linkElement = getByText('Sign In');

    expect(linkElement).toBeInTheDocument();
  });

  it('should redirect to login page after link click', () => {
    history.push('/');

    const {getByTestId, getByText} = render(
      <Router history={history}>
        <Switch>
          <Route path="/login" exact>
            <h1>This is login page</h1>
          </Route>
          <Route>
            <UserMenuNotLogged />
          </Route>
        </Switch>
      </Router>,
    );
    expect(getByTestId('header__nav-link')).toBeInTheDocument();
    userEvent.click(getByTestId('header__nav-link'));

    expect(getByText(/his is login page/i)).toBeInTheDocument();
  });
});
