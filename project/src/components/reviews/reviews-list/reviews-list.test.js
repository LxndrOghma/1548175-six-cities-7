import React from 'react';
import {render} from '@testing-library/react';

import ReviewsList from './reviews-list';

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

describe('Component: ReviewsList', () => {
  it('should render correctly', () => {
    const { getByText } = render(<ReviewsList reviews={mockReviews} />);

    mockReviews.forEach((review) => {
      expect(getByText(review.user.name)).toBeInTheDocument();
      expect(getByText(review.comment)).toBeInTheDocument();
    });
  });
});
