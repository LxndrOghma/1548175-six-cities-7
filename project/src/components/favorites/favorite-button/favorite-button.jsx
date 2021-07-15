import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { markOfferIsFavorite } from '../../../store/api-actions';
import offersProp from '../../props/offers.prop';
import { FavoriteButtonSettings, FavoriteButtonType} from '../../../const';

function FavoriteButton({offer, buttonSettings = FavoriteButtonType.DEFAULT}) {
  const {isFavorite, id} = offer;

  const dispatch = useDispatch();

  const onFavoriteButtonClick = (evt) => {
    evt.preventDefault();

    const status = isFavorite ? 0 : 1;
    dispatch(markOfferIsFavorite(id, status));
  };

  return (
    <button
      className={`${FavoriteButtonSettings[buttonSettings].buttonClasses} ${isFavorite ? FavoriteButtonSettings[buttonSettings].activeButtonClasses : ''}`}
      type="button"
      onClick={onFavoriteButtonClick}
    >
      <svg
        className={FavoriteButtonSettings[buttonSettings].svgClasses}
        width={FavoriteButtonSettings[buttonSettings].iconWidth}
        height={FavoriteButtonSettings[buttonSettings].iconHeight}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{FavoriteButtonSettings[buttonSettings].spanText}</span>
    </button>
  );
}

FavoriteButton.propTypes ={
  offer: offersProp,
  buttonSettings: PropTypes.string.isRequired,
};

export default FavoriteButton;
