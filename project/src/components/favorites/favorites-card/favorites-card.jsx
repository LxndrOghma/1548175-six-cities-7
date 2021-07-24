import React from 'react';
import { Link } from 'react-router-dom';
import { FavoriteButtonType } from '../../../const';
import { getWordWithCapitalLetter } from '../../../utils';

import offersProp from '../../props/offers.prop';
import FavoriteButton from '../favorite-button/favorite-button';

function FavoritesCard({offer}) {
  const {price, rating, title, id, type, previewImage} = offer;
  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={ `/offer/${id}` }>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton offer={offer} buttonSettings={FavoriteButtonType.FAVORITES_PAGE} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ rating * 20 }%`}}></span>
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

FavoritesCard.propTypes = {
  offer: offersProp,
};

export default FavoritesCard;

