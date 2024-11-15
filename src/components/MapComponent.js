// src/components/MapComponent.js
import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import './MapComponent.css';

function MapComponent({ addressCoordinates }) {
  const [viewport, setViewport] = React.useState({
    latitude: addressCoordinates.lat,
    longitude: addressCoordinates.lng,
    zoom: 10,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="400px"
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken="your_mapbox_token_here"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <Marker
        latitude={addressCoordinates.lat}
        longitude={addressCoordinates.lng}
      >
        <div className="marker">📍</div>
      </Marker>
    </ReactMapGL>
  );
}

export default MapComponent;