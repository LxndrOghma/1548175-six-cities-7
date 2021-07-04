import React from 'react';
import Loader from '../loader/loader';
import PropTypes from 'prop-types';

function LoadWrapper({isDataLoaded, children, Spinner = Loader}) {
  return (isDataLoaded && children) || <Spinner />;
}

LoadWrapper.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  Spinner: PropTypes.node,
};

export default LoadWrapper;
