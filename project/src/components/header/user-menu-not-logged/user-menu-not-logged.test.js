import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import UserMenuNotLogged from './user-menu-not-logged';

describe('Component: CitiesListItem', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history} >
        <UserMenuNotLogged />
      </Router>,
    );
    const linkElement = getByText('Sign In');

    expect(linkElement).toBeInTheDocument();
  });
});
