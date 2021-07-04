import React from 'react';
import PropTypes from 'prop-types';

function GoodsItem({good}) {
  return (
    <li className="property__inside-item">
      {good}
    </li>
  );
}

GoodsItem.propTypes = {
  good: PropTypes.string.isRequired,
};

export default GoodsItem;
