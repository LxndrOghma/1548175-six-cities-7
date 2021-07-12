import React, { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';

import useMap from '../../hooks/use-map/use-map';
import { PinSettings } from '../../const';
import offersProp from '../props/offers.prop';

function Map({offers, activeCard}) {
  const [city] = offers;
  const {city: {location}} = city;

  const mapRef = useRef(null);
  const map = useMap(mapRef,location);
  const markers = leaflet.layerGroup();

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
      markers.clearLayers();
      offers.forEach(({location: {latitude, longitude}, id}) => {
        const marker = leaflet
          .marker({
            lat: latitude,
            lng: longitude,
          }, {
            icon: (id === activeCard)
              ? activeCustomPin
              : defaultCustomPin,
          });
        markers.addLayer(marker);
      });
      markers.addTo(map);

      map.flyTo([
        offers[0].city.location.latitude,
        offers[0].city.location.longitude,
      ],
      offers[0].city.location.zoom,
      );
    }

    return () => {
      markers.clearLayers();
    };

  }, [map, offers, defaultCustomPin, activeCard, activeCustomPin, markers]);

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
  activeCard: PropTypes.number.isRequired,
};

Map.defaultProps = {
  activeCard: NaN,
};

export default Map;
