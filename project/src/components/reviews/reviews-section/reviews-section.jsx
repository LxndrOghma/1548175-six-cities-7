import React from 'react';
import PropTypes from 'prop-types';

import ReviewsList from '../reviews-list/reviews-list';
import CommentForm from '../../comment/comment-form/comment-form';
import reviewsProp from '../../props/reviews.prop';

function ReviewsSection({reviews}) {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList reviews={reviews}/>
      <CommentForm />
    </section>
  );
}

ReviewsSection.propTypes = {
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
};

export default ReviewsSection;
