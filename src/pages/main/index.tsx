import React, { useEffect } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

import UserLocation from "@/assets/icons/UserLocation.svg";
import { useAppDispatch, useAppSelector } from "@/state/app/hooks";
import { Map, Marker, Welcome, Navbar, ContactModal } from "@/components";
import { toggleMenu } from "@/state/features";
import { getNavigationPermissions } from "@/services";

import styles from "./Main.module.css";

const Main = () => {
  const dispatch = useAppDispatch();
  const { menuOpen } = useAppSelector((state) => state.menu);

  const [targets, setTargets] = React.useState<google.maps.LatLng[]>([]);
  const [mapCenter, setMapCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 0,
    lng: 0,
  });

  const getCurrentPosition = async () => {
    try {
      await getNavigationPermissions(setCurrentPosition);
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const setCurrentPosition = ({ coords }) =>
    setMapCenter({
      lat: coords.latitude,
      lng: coords.longitude,
    });

  //This function will be edited once I add targets at the map
  const onClick = (e: google.maps.MapMouseEvent) => {
    // eslint-disable-next-line
    setTargets([...targets, e.latLng!]);
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <Navbar />
        <div className={`${styles.contentContainer} center flex-column`}>
          <Welcome />
        </div>
      </div>
      <section aria-label="Map" className={styles.rightContainer}>
        <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <Map center={mapCenter} onClick={onClick}>
            <Marker position={mapCenter} icon={UserLocation} />
            {targets.map((latLng) => (
              <Marker key={Number(latLng)} position={latLng} />
            ))}
          </Map>
        </Wrapper>
      </section>
      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => dispatch(toggleMenu())}></div>
      )}
      <ContactModal />
    </div>
  );
};

export { Main };
