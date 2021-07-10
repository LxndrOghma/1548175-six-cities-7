import React from 'react';
import PropTypes from 'prop-types';

import ReviewsItem from '../reviews-item/reviews-item';
import reviewsProp from '../../props/reviews.prop';

function ReviewsList({reviews}) {
  const sortedReviews =
    reviews.sort((first, second) => new Date(second.date) - new Date(first.date)).slice(0, 10);

  return (
    <ul className="reviews__list">
      {sortedReviews.map((review) => <ReviewsItem key={review.id} review={review}/>)}
    </ul>

  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
};

export default ReviewsList;
