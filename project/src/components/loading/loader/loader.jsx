import React from 'react';
import { RingSpinner } from 'react-spinners-kit';

const style = {
  margin: '0 auto',
};

function Loader() {
  return (
    <div style={style}>
      <RingSpinner size={30} color="#686769" />
    </div>
  );
}

export default Loader;
