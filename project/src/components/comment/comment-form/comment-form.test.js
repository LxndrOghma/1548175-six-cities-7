import React from 'react';
import configureStore from 'redux-mock-store';
import {render} from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

import CommentForm from './comment-form';

let store;

const mockStore = configureStore({});

describe('Component: CommentForm', () => {
  it('should render correctly', () => {
    store = mockStore({
      DATA: {
        isCommentPosted: true,
      },
    });

    const { getByRole, getByText, getByLabelText, container } = render(
      <Provider store={store}>
        <CommentForm id={'1'} />
      </Provider>,
    );

    expect(getByRole('button')).toBeInTheDocument();
    expect(getByLabelText(/Your review/i)).toBeInTheDocument();
    expect(getByText(/50 characters/i)).toBeInTheDocument();

    userEvent.type(container.querySelector('#review'), 'testing text');
    expect(getByText(/testing text/i)).toBeInTheDocument();
  });

  it('should render error message when comment is not posted', () => {
    store = mockStore({
      DATA: {
        isCommentPosted: false,
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <CommentForm id={'1'} />
      </Provider>,
    );

    expect(getByText(/Error posting comment/i)).toBeInTheDocument();
  });
});
