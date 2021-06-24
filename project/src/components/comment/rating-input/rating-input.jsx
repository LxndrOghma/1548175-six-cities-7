import React from 'react';
import PropTypes from 'prop-types';

import { RatingSystem } from '../../../const';

function RatingInput({comment, setComment, starsCount}) {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={starsCount} id={`${starsCount}-stars`} type="radio" onClick={(evt) => setComment({...comment, rating: evt.target.value})}/>
      <label htmlFor={`${starsCount}-stars`} className="reviews__rating-label form__rating-label" title={RatingSystem[starsCount]}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

RatingInput.propTypes = {
  comment: PropTypes.object.isRequired,
  setComment: PropTypes.func.isRequired,
  starsCount: PropTypes.number.isRequired,
};

export default RatingInput;