import { SetStateAction } from 'react';

import { Coordinates } from 'interfaces/coordinates';

export const calculateRoute = async (
  center: Coordinates,
  location: Coordinates,
  setDirectionsResponse: { (value: SetStateAction<google.maps.DirectionsResult | null | undefined>): void },
  setDistance: { (value: SetStateAction<string>): void }
): Promise<google.maps.DirectionsResult | null | undefined> => {
  if (center === location) return;
  const directionService = new google.maps.DirectionsService();
  directionService.route(
    {
      origin: new google.maps.LatLng(location.lat, location?.lng),
      destination: new google.maps.LatLng(center.lat, center.lng),
      travelMode: google.maps.TravelMode.DRIVING,
    },
    (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        setDirectionsResponse(() => result);
        result?.routes[0]?.legs[0]?.distance?.text && setDistance(result?.routes[0]?.legs[0]?.distance?.text);
      }
    }
  );
};
