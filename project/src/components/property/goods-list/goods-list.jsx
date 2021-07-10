import React from 'react';
import PropTypes from 'prop-types';
import GoodsItem from '../goods-item/goods-item';

function GoodsList({goods}) {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {goods.map((good) => <GoodsItem key={good} good={good}/>)}
      </ul>
    </div>
  );
}

GoodsList.propTypes = {
  goods: PropTypes.array.isRequired,
};

export default GoodsList;
