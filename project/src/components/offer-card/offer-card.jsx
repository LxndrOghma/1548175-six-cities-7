import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppRoute } from '../../const';
import offersProp from '../props/offers.prop';

function Card({offer, setActiveCard}) {
  const {previewImage, price, title, type, isPremium, id, rating} = offer;
  return (
    <article className="cities__place-card place-card" onMouseEnter={() => setActiveCard(id)}>
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={ `/offer/${id}` }>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ rating * 20 }%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={ AppRoute.ROOM }>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

Card.propTypes = {
  offer: offersProp,
  setActiveCard: PropTypes.func.isRequired,
};

export default Card;
