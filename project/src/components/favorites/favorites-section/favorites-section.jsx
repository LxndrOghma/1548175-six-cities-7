import React from 'react';

import FavoritesList from '../favorites-list/favorites-list';

function FavoritesSection() {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <FavoritesList/>
    </section>
  );
}


export default FavoritesSection;
