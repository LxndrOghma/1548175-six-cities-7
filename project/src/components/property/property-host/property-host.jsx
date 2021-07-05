import React from 'react';
import PropTypes from 'prop-types';

import ProMark from '../pro-mark/pro-mark';

function PropertyHost({host, description}) {
  const {
    avatarUrl,
    name,
    isPro,
  } = host;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="property__user-name">
          {name}
        </span>
        {isPro && <ProMark />}
      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
}

PropertyHost.propTypes = {
  host: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired,
  }),
  description: PropTypes.string.isRequired,
};

export default PropertyHost;
