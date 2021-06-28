import React from 'react';
import PropTypes from 'prop-types';

import { SortingOptions } from '../../../const';
import SortingOptionsItem from '../sorting-options-item/sorting-options-item';

function SortingOptionsList({isOpened, changeOpenedState, onSortTypeChange}) {
  const options = Object.values(SortingOptions);

  return (
    <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : 'places__options--closed'}`}
      onClick={onSortTypeChange}
    >
      {options.map((option) => <SortingOptionsItem key={option} label={option} changeOpenedState={changeOpenedState} isOpened={isOpened}/>)}
    </ul>
  );
}

SortingOptionsList.propTypes = {
  onSortTypeChange: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
  changeOpenedState: PropTypes.func.isRequired,
};

export default SortingOptionsList;
