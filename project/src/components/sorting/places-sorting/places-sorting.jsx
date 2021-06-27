import React, { useState } from 'react';

import SortingOptionsList from '../sorting-options-list/sorting-options-list';

function PlacesSorting() {
  const [activeOption, setActiveOption] = useState('Popular');
  const [isOpened, changeOpenedState] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={() => changeOpenedState(!isOpened)}>
        {activeOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortingOptionsList setActiveOption={setActiveOption} activeOption = {activeOption} isOpened={isOpened} changeOpenedState={changeOpenedState}/>
    </form>
  );
}

export default PlacesSorting;
