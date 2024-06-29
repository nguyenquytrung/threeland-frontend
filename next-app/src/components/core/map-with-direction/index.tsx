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
  waypoints: LatLng[];
  height?: string;
}

const MapWithDirections: React.FC<MapWithDirectionsProps> = ({
  waypoints,
  height = '400px',
}) => {
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);
  const directionsService = useRef<google.maps.DirectionsService | null>(null);

  const handleLoad = () => {
    if (waypoints.length < 2) {
      console.error('At least two waypoints are required.');
      return;
    }

    if (!directionsService.current) {
      directionsService.current = new google.maps.DirectionsService();
    }

    const waypointsCoords = waypoints.map((waypoint) => ({
      location: new google.maps.LatLng(waypoint.lat, waypoint.lng),
    }));

    const origin = new google.maps.LatLng(waypoints[0].lat, waypoints[0].lng);
    const destination = new google.maps.LatLng(
      waypoints[waypoints.length - 1].lat,
      waypoints[waypoints.length - 1].lng,
    );

    const request: google.maps.DirectionsRequest = {
      origin,
      destination,
      waypoints: waypointsCoords.slice(1, -1), // Exclude origin and destination
      travelMode: google.maps.TravelMode.DRIVING,
    };

    directionsService.current.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        setDirections(result);
      } else {
        console.error(`Error fetching directions: ${status}`);
      }
    });
  };

  return (
    <LoadScript
      googleMapsApiKey='AIzaSyCous6KlyW5PyzDtD_XFfPQvOSAdXKGe0Y'
      onLoad={handleLoad}
    >
      <GoogleMap
        mapContainerStyle={{ width: '100%', height }}
        center={waypoints[0]}
        zoom={10}
      >
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapWithDirections;
