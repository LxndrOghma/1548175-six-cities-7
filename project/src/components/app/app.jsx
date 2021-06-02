import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main/main-page.jsx';

function App({placesCount}) {
  return <MainPage placesCount={placesCount}/>;
}

App.propTypes ={
  placesCount: PropTypes.number.isRequired,
};

export default App;
