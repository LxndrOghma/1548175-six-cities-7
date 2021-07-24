import { createMemoryHistory } from 'history';
import React from 'react';
import { render, screen } from '@testing-library/react';
import configurateStore from 'redux-mock-store';
import { AuthorizationStatus } from '../../const';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import PrivateRoute from './private-route';

const mockStore = configurateStore({});
let history;

describe('Component: PrivateRouter', () => {
  beforeEach(()=> {
    history = createMemoryHistory();
    history.push('/private');
  });

  it('should render component for public route when user not authorized', () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route exact path='/login'><h1>Public Route</h1></Route>
          <PrivateRoute
            exact
            path='/private'
            render={() => (<h1>Private Route</h1>)}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Public Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private Route/i)).not.toBeInTheDocument();
  });

  it('should render component for private route when user authorized', () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route exact path='/login'><h1>Public Route</h1></Route>
          <PrivateRoute
            exact
            path='/private'
            render={() => (<h1>Private Route</h1>)}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Private Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Public Route/i)).not.toBeInTheDocument();
  });
});
