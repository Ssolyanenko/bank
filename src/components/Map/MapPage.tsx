import React, { FC, useEffect, useState } from 'react';
import { GoogleMap, Marker, useLoadScript, DirectionsRenderer } from '@react-google-maps/api';

import { CityModal, ConfirmCityModal, CurrentBranch, Sidebar } from 'components';
import { useTypedSelector, useTypedDispatch } from 'hooks';
import { POPULAR_CITIES } from 'constants/city';
import { getBranch, getCity, getBranches } from 'store';
import { Branch } from 'interfaces/branch';
import { MapNavigationIcon, ZoomInIcon, ZoomOutIcon } from 'assets';
import { getLocation } from 'helpers/getLocation';
import { calculateRoute } from 'helpers/calculateRoute';
import { ZoomType } from 'constants/zoomType';
import { zoomMap } from 'helpers/setZoomMap';
import { getUrlIcon } from 'helpers/getIcon';
import { URL_ICON_LOCATION } from 'constants/map';
import classes from './MapPage.module.scss';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export const MapPage: FC = () => {
  const dispatch = useTypedDispatch();
  const city = useTypedSelector(getCity);
  const branches = useTypedSelector(getBranch);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: String(process.env.REACT_APP_GOOGLE_MAP_KEY),
    language: 'en',
  });

  const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null | undefined>();
  const [distance, setDistance] = useState<string>('100m');
  const [activeMarker, setActiveMarker] = useState<Branch>();
  const [isOpenMarker, setIsOpenMarker] = useState(false);
  const [zoom, setZoom] = useState(11);
  const [currentCity, setCity] = useState(city);
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(true);
  const [location, setLocation] = useState({
    lat: 51.6,
    lng: -0.1257,
  });
  const [center, setCenter] = useState({
    lat: 51.5,
    lng: -0.1257,
  });

  useEffect(() => {
    dispatch(getBranches(city));
  }, [city, dispatch]);

  const handleActiveMarker = (marker: Branch): void => {
    if (marker === activeMarker) {
      setIsOpenMarker(false);

      return;
    }

    setActiveMarker(marker);
    setCenter({ lat: marker.latitude, lng: marker.longitude });
    setZoom(15);
  };

  return (
    <div className={classes.mapPage}>
      <Sidebar
        distance={distance}
        city={currentCity}
        setNewCity={() => setIsOpen((prevState: boolean) => !prevState)}
        handleActiveMarker={handleActiveMarker}
        setIsOpenMarker={setIsOpenMarker}
        setZoom={setZoom}
        calculateRoute={(): Promise<google.maps.DirectionsResult | null | undefined> =>
          calculateRoute(center, location, setDirectionsResponse, setDistance)
        }
      />
      {isConfirmOpen && (
        <ConfirmCityModal
          city={currentCity}
          closeModal={(): void => setIsConfirmOpen(false)}
          notConfirmCity={(): void => setIsOpen(true)}
        />
      )}
      {isOpen && (
        <CityModal
          selectedCity={currentCity}
          popularCities={POPULAR_CITIES}
          closeModal={(): void => setIsOpen(false)}
          changeCity={setCity}
        />
      )}
      {activeMarker && isOpenMarker && (
        <div className={classes.branchSelect}>
          <CurrentBranch
            branch={activeMarker}
            handleActiveMarker={handleActiveMarker}
            calculateRoute={(): Promise<google.maps.DirectionsResult | null | undefined> =>
              calculateRoute(center, location, setDirectionsResponse, setDistance)
            }
            distance={distance}
          />
        </div>
      )}
      <div className={classes.map}>
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={mapStyles}
            center={center}
            zoom={zoom}
            onClick={(): void => setActiveMarker(undefined)}
            options={{ disableDefaultUI: true }}
          >
            {branches.map((branch: Branch) => (
              <Marker
                key={branch.address}
                position={{ lat: branch.latitude, lng: branch.longitude }}
                onClick={(): void => handleActiveMarker(branch)}
                icon={{
                  url: getUrlIcon(branch.type),
                }}
              />
            ))}
            {location && (
              <Marker
                position={location}
                icon={{
                  url: URL_ICON_LOCATION,
                }}
              />
            )}
            {directionsResponse && (
              <DirectionsRenderer options={{ suppressMarkers: true }} directions={directionsResponse} />
            )}
          </GoogleMap>
        )}
      </div>
      <div className={classes.mapNavigation}>
        <span role="presentation" onClick={(): void => zoomMap(ZoomType.IN, zoom, setZoom)}>
          <ZoomInIcon />
        </span>
        <span role="presentation" onClick={(): void => zoomMap(ZoomType.OUT, zoom, setZoom)}>
          <ZoomOutIcon />
        </span>
        <span role="presentation" onClick={(): void => getLocation(setLocation, setCenter)}>
          <MapNavigationIcon />
        </span>
      </div>
    </div>
  );
};
