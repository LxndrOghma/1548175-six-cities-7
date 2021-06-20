import React from 'react';
import PropTypes from 'prop-types';

import ReviewsItem from '../reviews-item/reviews-item';
import reviewsProp from '../../props/reviews.prop';

function ReviewsList({reviews}) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <ReviewsItem key={review.id} review={review}/>)}
    </ul>

  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
};

export default ReviewsList;
