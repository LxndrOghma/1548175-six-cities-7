import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import RatingInput from './rating-input';

describe('Component: RatingInput', () => {
  it('should render correctly', () => {
    const comment = {
      rating: 3,
    };

    const setComment = jest.fn();

    const {getByTitle, getByRole} = render(<RatingInput comment={comment} setComment={setComment} starsCount={3} isChecked={false}/>);

    expect(getByRole('radio')).toBeInTheDocument();
    expect(getByTitle('not bad')).toBeInTheDocument();

    userEvent.click(getByRole('radio'));
    expect(setComment).toBeCalled();
  });

});
