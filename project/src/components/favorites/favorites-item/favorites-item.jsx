import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppRoute } from '../../../const';
import FavoritesPlaces from '../favorites-places/favorites-places';
import { useDispatch, useSelector } from 'react-redux';
import { changeCity } from '../../../store/action';
import { getSortedByCityFavoriteOffers } from '../../../store/data/selectors';

function FavoritesItem({city}) {

  const sortedOffers = useSelector(getSortedByCityFavoriteOffers);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeCity(city));
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={ AppRoute.MAIN } onClick={handleClick} data-testid='locations__item-link'>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <FavoritesPlaces offers={sortedOffers.get(city)}/>
    </li>

  );
}

FavoritesItem.propTypes ={
  city: PropTypes.string.isRequired,
};

export default FavoritesItem;
