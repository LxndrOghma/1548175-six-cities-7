import React from 'react';
import PropTypes from 'prop-types';
import PropertyImage from '../property-image/property-image';

function ImagesList({images}) {
  return (
    <div className="property__gallery">
      {images.slice(0, 6).map((image, index) => <PropertyImage key={index.toString()} imageUrl={image}/>)}
    </div>
  );
}

ImagesList.propTypes = {
  images: PropTypes.array.isRequired,
};

ImagesList.defaultProps = {
  images: [],
};

export default ImagesList;
