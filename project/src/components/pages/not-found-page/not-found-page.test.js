import React from 'react';
import {render} from '@testing-library/react';
import {Route, Router, Switch} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import NotFoundPage from './not-found-page';
import { AuthorizationStatus } from '../../../const';

let history;
let store;
const mockStore = configureStore({});

describe('Component: NotFoundPage', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });
  });

  it('should render correctly', () => {
    const {getByText} = render(
      <Provider store={store}>
        <Router history={history} >
          <NotFoundPage />
        </Router>,
      </Provider>,
    );

    expect(getByText(/404 Not Found/i)).toBeInTheDocument();
  });

  it('should redirect to login page after link click', () => {
    history.push('/404page');

    const {getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <h1>This is main page</h1>
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>,
      </Provider>,
    );
    expect(getByText('Back to main page')).toBeInTheDocument();
    userEvent.click(getByText('Back to main page'));

    expect(getByText(/This is main page/i)).toBeInTheDocument();
  });
});
