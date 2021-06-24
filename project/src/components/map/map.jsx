import React, { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';

import useMap from '../../hooks/use-map/useMap';
import { PinSettings } from '../../const';
import offersProp from '../props/offers.prop';

function Map({offers, activeCard}) {
  const [city] = offers;
  const {city: {location}} = city;

  const mapRef = useRef(null);
  const map = useMap(mapRef,location);

  const defaultCustomPin = leaflet.icon({
    iconUrl: PinSettings.DEFAULT_IMG,
    iconSize: PinSettings.SIZE,
    iconAnchor: PinSettings.ANCHOR,
  });

  const activeCustomPin = leaflet.icon({
    iconUrl: PinSettings.ACTIVE_IMG,
    iconSize: PinSettings.SIZE,
    iconAnchor: PinSettings.ANCHOR,
  });

  useEffect(() => {
    if (map) {
      offers.forEach(({location: {latitude, longitude}, id}) => {
        leaflet
          .marker({
            lat: latitude,
            lng: longitude,
          }, {
            icon: (id === activeCard)
              ? activeCustomPin
              : defaultCustomPin,
          })
          .addTo(map);
      });
    }
  }, [map, offers, defaultCustomPin, activeCard, activeCustomPin]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
  activeCard: PropTypes.string.isRequired,
};

export default Map;