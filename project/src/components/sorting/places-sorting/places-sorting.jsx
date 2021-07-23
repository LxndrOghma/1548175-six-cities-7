import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import SortingOptionsList from '../sorting-options-list/sorting-options-list';
import { getSortType } from '../../../store/ui/selectors';

function PlacesSorting({onSortTypeChange}) {
  const [isOpened, changeOpenedState] = useState(false);

  const sortType = useSelector(getSortType);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={() => changeOpenedState(!isOpened)} data-testid='places__sorting-type'>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortingOptionsList isOpened={isOpened} changeOpenedState={changeOpenedState} onSortTypeChange={onSortTypeChange}/>
    </form>
  );
}

PlacesSorting.propTypes = {
  onSortTypeChange: PropTypes.func.isRequired,
};

export default PlacesSorting;

