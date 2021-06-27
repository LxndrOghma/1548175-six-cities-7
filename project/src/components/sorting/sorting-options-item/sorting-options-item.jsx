import React from 'react';
import PropTypes from 'prop-types';

function SortingOptionsItem({label, activeOption}) {
  return <li className={`places__option ${label === activeOption ? 'places__option--active' : ''}`} tabIndex="0">{label}</li>;
}

SortingOptionsItem.propTypes = {
  label: PropTypes.string.isRequired,
  activeOption: PropTypes.string.isRequired,
};

export default SortingOptionsItem;
