import React from 'react';
import { RingSpinner } from 'react-spinners-kit';

const style = {
  display: 'flex',
  justifyContent: 'center',
};

function Loader() {
  return (
    <div style={style}>
      <RingSpinner size={30} color="#686769" />
    </div>
  );
}

export default Loader;
