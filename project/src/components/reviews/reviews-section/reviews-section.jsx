import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ReviewsList from '../reviews-list/reviews-list';
import CommentForm from '../../comment/comment-form/comment-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../../../store/api-actions';
import { getReviews } from '../../../store/data/selectors';

function ReviewsSection({ id }) {
  const dispatch = useDispatch();

  const reviews = useSelector(getReviews).slice().sort((first, second) => new Date(second.date) - new Date(first.date));

  useEffect(() => {
    dispatch(fetchComments(id));
  }, [dispatch, id]);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList reviews={reviews}/>
      <CommentForm id={id} />
    </section>
  );
}

ReviewsSection.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ReviewsSection;
