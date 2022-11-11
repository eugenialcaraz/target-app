import { FC, useState, useEffect } from "react";

const Marker: FC<google.maps.MarkerOptions> = (props) => {
  const [marker, setMarker] = useState<google.maps.Marker>();

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(props);
    }
  }, [marker, props]);

  return null;
};

export { Marker };
