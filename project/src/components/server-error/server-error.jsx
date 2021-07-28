import React from 'react';

const serverErrorStyle = {
  fontSize: '25px',
  lineHeight: '1.21053',
  fontWeight: '700',
  fontStyle: 'oblique',
  color: 'red',
  position: 'absolute',
  top: '0px',
  left: '50%',
  transform: 'translateX(-50%)',
};

function ServerError() {
  return <p style={serverErrorStyle}>Server unavailable</p>;
}

export default ServerError;
