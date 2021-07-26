import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

import SignInPage from './sign-in-page';
import { AuthorizationStatus } from '../../../const';

let store;

describe('Component: SignInPage', () => {
  beforeEach(() => {
    const mockStore = configureStore({});
    store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        user: {
          avatarUrl: '',
          email: '',
          id: null,
          isPro: false,
          name: '',
        },
      }});
  });

  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/login');

    const { getByRole, getByText, getByPlaceholderText, getByTestId, getByDisplayValue } = render(
      <Provider store={store}>
        <Router history={history}>
          <SignInPage />
        </Router>
      </Provider>,
    );

    expect(getByRole('button')).toBeInTheDocument();
    expect(getByText(/Amsterdam/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/Password/i)).toBeInTheDocument();

    userEvent.type(getByTestId('email'), 'test@test.ru');
    userEvent.type(getByTestId('password'), 'TestPassword');

    expect(getByDisplayValue(/test@test.ru/i)).toBeInTheDocument();
    expect(getByDisplayValue(/TestPassword/i)).toBeInTheDocument();
  });
});
