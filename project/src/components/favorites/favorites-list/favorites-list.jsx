import React from 'react';

import FavoritesItem from '../favorites-item/favorites-item';
import { useSelector } from 'react-redux';
import { getFavoriteCities } from '../../../store/data/selectors';


function FavoritesList() {
  const cities = useSelector(getFavoriteCities);

  return (
    <ul className="favorites__list">
      {cities.map((city) => <FavoritesItem key={city} city={city} />)}
    </ul>
  );
}

export default FavoritesList;
