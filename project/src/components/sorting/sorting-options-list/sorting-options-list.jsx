import React from 'react';
import PropTypes from 'prop-types';

import { sortingOptions } from '../../../const';
import SortingOptionsItem from '../sorting-options-item/sorting-options-item';

function SortingOptionsList({setActiveOption, activeOption, isOpened, changeOpenedState}) {
  return (
    <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : 'places__options--closed'}`}
      onClick={(evt) => {setActiveOption(evt.target.textContent);
        changeOpenedState(!isOpened);}}
    >
      {sortingOptions.map((option) => <SortingOptionsItem key={option} label={option} activeOption={activeOption} changeOpenedState={changeOpenedState}/>)}
    </ul>
  );
}

SortingOptionsList.propTypes = {
  setActiveOption: PropTypes.func.isRequired,
  activeOption: PropTypes.string.isRequired,
  isOpened: PropTypes.bool.isRequired,
  changeOpenedState: PropTypes.func.isRequired,
};

export default SortingOptionsList;
