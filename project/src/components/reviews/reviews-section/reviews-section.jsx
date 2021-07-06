import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ReviewsList from '../reviews-list/reviews-list';
import CommentForm from '../../comment/comment-form/comment-form';
import reviewsProp from '../../props/reviews.prop';
import { useParams } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { fetchComments } from '../../../store/api-actions';

function ReviewsSection({reviews}) {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments(id));
  }, [dispatch, id]);

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

const mapStateToProps = (state) => ({
  reviews: state.reviews,
});

export {ReviewsSection};
export default connect(mapStateToProps)(ReviewsSection);
