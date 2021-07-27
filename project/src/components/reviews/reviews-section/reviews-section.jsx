import React from 'react';
import PropTypes from 'prop-types';

import ReviewsList from '../reviews-list/reviews-list';
import CommentForm from '../../comment/comment-form/comment-form';
import { useSelector } from 'react-redux';
import { getAuthorizationStatus } from '../../../store/user/selectors';
import { isUserAuthorized } from '../../../const';
import reviewsProp from '../../props/reviews.prop';

function ReviewsSection({ id, reviews }) {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList reviews={reviews}/>
      {isUserAuthorized(authorizationStatus) && <CommentForm id={id} />}
    </section>
  );
}

ReviewsSection.propTypes = {
  id: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
};

export default ReviewsSection;
