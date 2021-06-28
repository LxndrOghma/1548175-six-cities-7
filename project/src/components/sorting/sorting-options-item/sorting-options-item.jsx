import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function SortingOptionsItem({label, sortType, changeOpenedState, isOpened}) {
  return <li className={`places__option ${label === sortType ? 'places__option--active' : ''}`} tabIndex="0" onClick={() => {changeOpenedState(!isOpened);}}>{label}</li>;
}

SortingOptionsItem.propTypes = {
  label: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
  changeOpenedState: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  sortType: state.sortType,
});

export {SortingOptionsItem};
export default connect(mapStateToProps)(SortingOptionsItem);

