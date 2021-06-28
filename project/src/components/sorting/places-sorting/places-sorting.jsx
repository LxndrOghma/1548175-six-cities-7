import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SortingOptionsList from '../sorting-options-list/sorting-options-list';

function PlacesSorting({onSortTypeChange, sortType}) {
  const [isOpened, changeOpenedState] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={() => changeOpenedState(!isOpened)}>
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
  sortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  sortType: state.sortType,
});

export {PlacesSorting};
export default connect(mapStateToProps)(PlacesSorting);

