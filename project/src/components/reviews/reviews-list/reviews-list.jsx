import React from 'react';
import PropTypes from 'prop-types';

import ReviewsItem from '../reviews-item/reviews-item';
import reviewsProp from '../../props/reviews.prop';
import { MAX_REVIEWS_COUNT } from '../../../const';

function ReviewsList({reviews}) {
  const slicedReviews = reviews.slice(0, MAX_REVIEWS_COUNT);

  return (
    <ul className="reviews__list">
      {slicedReviews.map((review) => <ReviewsItem key={review.id} review={review}/>)}
    </ul>

  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
};

export default ReviewsList;
