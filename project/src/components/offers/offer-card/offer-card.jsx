import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import offersProp from '../../props/offers.prop';
import { FavoriteButtonType, OffersListSettings } from '../../../const';
import FavoriteButton from '../../favorites/favorite-button/favorite-button';
import { getWordWithCapitalLetter } from '../../../utils';

function Card({offer, pageType, handleMouseEnter = () => {}, handleMouseLeave = () => {}}) {
  const {previewImage, price, title, type, isPremium, id, rating} = offer;

  return (
    <article
      className={
        `place-card
        ${OffersListSettings[pageType].classNameCardArticle}`
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={
        `place-card__image-wrapper
        ${OffersListSettings[pageType].classNameWrapperDiv}`
      }
      >
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
          <FavoriteButton offer={offer} buttonSettings={FavoriteButtonType.DEFAULT}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ Math.round(rating) * 20 }%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={ `/offer/${id}` }>{title}</Link>
        </h2>
        <p className="place-card__type">{getWordWithCapitalLetter(type)}</p>
      </div>
    </article>
  );
}

Card.propTypes = {
  offer: offersProp,
  pageType: PropTypes.string.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
};

export default Card;
