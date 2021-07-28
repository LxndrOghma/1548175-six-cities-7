import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import { createApi } from '../../../services/api';
import thunk from 'redux-thunk';

import ReviewsSection from './reviews-section';

const mockReviews = [
  {
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    date: '2020-05-08T14:40:56.569Z',
    id: 2,
    rating: 2,
    user: {
      avatarUrl: 'img/test.jpg',
      id: 2,
      isPro: false,
      name: 'Jaghatai Khan',
    },
  },
  {
    comment: 'Lorem',
    date: '2020-05-08T14:40:56.569Z',
    id: 3,
    rating: 1,
    user: {
      avatarUrl: 'img/test.jpg',
      id: 4,
      isPro: true,
      name: 'John',
    },
  },
];

let store;
let api = null;

describe('Component: ReviewsSection', () => {
  beforeEach(() => {
    api = createApi(() => {});
  });

  it('should render correctly if data is loaded', () => {
    const mockStore = configureStore([thunk.withExtraArgument(api)]);
    store = mockStore({
      DATA: {
        reviews: mockReviews,
        isCommentsLoaded: true,
      },
      USER: {
        authorizationStatus: 'AUTH',
      },
    });
    const { getByText } = render(
      <Provider store={store}>
        <ReviewsSection id={'1'} reviews={mockReviews}/>
      </Provider>,
    );

    expect(getByText(mockReviews.length.toString())).toBeInTheDocument();
  });
});
