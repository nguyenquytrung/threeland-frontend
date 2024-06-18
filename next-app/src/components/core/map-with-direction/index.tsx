'use client';
import React, { useRef, useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  DirectionsRenderer,
} from '@react-google-maps/api';

interface LatLng {
  lat: number;
  lng: number;
}

interface MapWithDirectionsProps {
  origin: LatLng;
  destination: LatLng;
  height?: string;
}

const MapWithDirections: React.FC<MapWithDirectionsProps> = ({
  origin,
  destination,
  height = '400px',
}) => {
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);
  const directionsService = useRef<google.maps.DirectionsService | null>(null);

  const handleLoad = () => {
    if (origin && destination) {
      if (!directionsService.current) {
        directionsService.current = new google.maps.DirectionsService();
      }

      directionsService.current.route(
        {
          origin: origin,
          destination: destination,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDirections(result);
          } else {
            console.error(`Error fetching directions: ${status}`);
          }
        },
      );
    }
  };

  return (
    <LoadScript
      googleMapsApiKey='AIzaSyCous6KlyW5PyzDtD_XFfPQvOSAdXKGe0Y'
      onLoad={handleLoad}
    >
      <GoogleMap
        mapContainerStyle={{ width: '100%', height }}
        center={origin}
        zoom={10}
      >
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapWithDirections;
