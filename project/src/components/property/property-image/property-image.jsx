import React from 'react';
import PropTypes from 'prop-types';

function PropertyImage({imageUrl}) {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={imageUrl} alt="Property" />
    </div>
  );
}

PropertyImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default PropertyImage;
