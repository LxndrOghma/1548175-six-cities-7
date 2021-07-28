import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';

import EmptyMainPage from './empty-main-page';
import { AuthorizationStatus } from '../../const';
import { Provider } from 'react-redux';

let history;
let store;
const mockStore = configureStore({});

describe('Component:EmptyMainPage', () => {
  beforeEach(() => {
    history = createMemoryHistory();
  });

  it('should render correctly', () => {
    store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
      DATA: {
        isDataLoadingError: false,
      },
    });

    const { getByRole, rerender, queryByRole } = render(
      <Provider store={store}>
        <Router history={history}>
          <EmptyMainPage onCityChange={() => {}} city={'Paris'} isDataLoaded/>
        </Router>,
      </Provider>,
    );

    expect(getByRole('heading')).toBeInTheDocument();

    rerender(
      <Provider store={store}>
        <Router history={history}>
          <EmptyMainPage onCityChange={() => {}} city={'Paris'} isDataLoaded={false}/>
        </Router>,
      </Provider>,
    );

    expect(queryByRole('heading')).not.toBeInTheDocument();
  });
});
