import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getSortType } from '../../../store/ui/selectors';

function SortingOptionsItem({label, changeOpenedState, isOpened}) {
  const sortType = useSelector(getSortType);

  return <li className={`places__option ${label === sortType ? 'places__option--active' : ''}`} tabIndex="0" onClick={() => {changeOpenedState(!isOpened);}}>{label}</li>;
}

SortingOptionsItem.propTypes = {
  label: PropTypes.string.isRequired,
  changeOpenedState: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
};

export default SortingOptionsItem;

