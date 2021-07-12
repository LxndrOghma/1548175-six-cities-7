import React, { useState } from 'react';
import PropTypes from 'prop-types';

import RatingInputsList from '../rating-inputs-list/rating-inputs-list';
import { CommentFormSettings } from '../../../const';
import { useDispatch, useSelector } from 'react-redux';
import { sendComment } from '../../../store/api-actions';
import { getIsCommentPosted } from '../../../store/data/selectors';

function CommentForm({id}) {
  const [ comment, setComment ] = useState({rating: 0, text: ''});
  const [ isDisabled, setIsDisabled] = useState(true);

  const isCommentPosted = useSelector(getIsCommentPosted);


  const dispatch = useDispatch();

  const handleFormChange = () => {
    const {text, rating} = comment;

    setIsDisabled(text.length < CommentFormSettings.MIN_CHARACTERS_COUNT
      || text.length > CommentFormSettings.MAX_CHARACTERS_COUNT
      || rating === 0);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    setIsDisabled(true);
    dispatch(sendComment({id: id, comment: comment.text, rating: comment.rating}))
      .then(() => {
        setComment({rating: 0, text: ''});
      })
      .catch(() => {
        setIsDisabled(false);
      });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onChange={handleFormChange} onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingInputsList comment={comment} setComment={setComment}/>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={comment.text} onChange={(evt) => {setComment({...comment, text: evt.target.value});}}></textarea>
      {!isCommentPosted && <p style={{color: 'red'}}>Error posting comment</p>}
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>Submit</button>
      </div>
    </form>
  );
}

CommentForm.propTypes = {
  id: PropTypes.number.isRequired,
};

export default CommentForm;
