import React from 'react';
import PropTypes from 'prop-types';

import RatingInput from '../rating-input/rating-input';
import { ratings } from '../../../const';

function RatingInputsList({comment, setComment}) {
  return (
    <div className="reviews__rating-form form__rating">
      {ratings.map((rating) => <RatingInput key={rating} comment={comment} setComment={setComment} starsCount={rating}/>)}
    </div>
  );
}

RatingInputsList.propTypes = {
  comment: PropTypes.object.isRequired,
  setComment: PropTypes.func.isRequired,
};

export default RatingInputsList;
