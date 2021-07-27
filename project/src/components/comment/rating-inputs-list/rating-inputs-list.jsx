import React from 'react';
import PropTypes from 'prop-types';

import RatingInput from '../rating-input/rating-input';
import { ratings } from '../../../const';

function RatingInputsList({comment, setComment, isInputsDisabled}) {
  return (
    <div className="reviews__rating-form form__rating">
      {ratings.map((rating) => <RatingInput key={rating} comment={comment} setComment={setComment} starsCount={rating} isChecked={comment.rating === rating} isInputsDisabled={isInputsDisabled}/>)}
    </div>
  );
}

RatingInputsList.propTypes = {
  comment: PropTypes.object.isRequired,
  setComment: PropTypes.func.isRequired,
  isInputsDisabled: PropTypes.bool.isRequired,
};

export default RatingInputsList;
