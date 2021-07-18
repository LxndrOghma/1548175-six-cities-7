import React from 'react';
import { render } from '@testing-library/react';

import ReviewsItem from './reviews-item';

const review = {
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
};

describe('Component: ReviewsItem', () => {
  it('should render correctly', () => {
    const {getByText, getByRole, getByTestId} = render(<ReviewsItem review={review} />);

    const imageElement = getByRole('img', 'img/test.jpg');
    const userNameElement = getByText('Jaghatai Khan');
    const reviewTextElement = getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit');
    const timeElement = getByTestId('reviews__time');

    expect(imageElement).toHaveAttribute('src', 'img/test.jpg');
    expect(userNameElement).toBeInTheDocument();
    expect(reviewTextElement).toBeInTheDocument();
    expect(timeElement).toHaveAttribute('dateTime', '08-05-2020');
    expect(timeElement).toHaveTextContent('May 2020');
  });
});
