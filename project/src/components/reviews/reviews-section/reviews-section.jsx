import React, { useEffect } from 'react';

import ReviewsList from '../reviews-list/reviews-list';
import CommentForm from '../../comment/comment-form/comment-form';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../../../store/api-actions';
import { getReviews } from '../../../store/data/selectors';

function ReviewsSection() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const reviews = useSelector(getReviews);

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

export default ReviewsSection;
