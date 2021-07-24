import { render } from '@testing-library/react';
import React from 'react';

import RatingInputsList from './rating-inputs-list';

const ratings = [5, 4, 3, 2, 1];

const RatingSystem = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
};

describe('Component: RatingInputsList', () => {
  const comment = {
    rating: 3,
  };

  it('should render correctly', () => {
    const {getByTitle} = render (<RatingInputsList comment={comment} setComment={() => {}}/>);

    ratings.forEach((rating) => {
      expect(getByTitle(RatingSystem[rating])).toBeInTheDocument();
    });
  });
});
