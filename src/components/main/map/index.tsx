import React, {
  FC,
  ReactNode,
  useRef,
  useEffect,
  useState,
  isValidElement,
  cloneElement,
  Children,
} from "react";
import { useDeepCompareEffectForMaps } from "@/hooks/maps";
import { mapStyles } from "./mapStyles";
import styles from "./Map.module.css";

interface MapProps extends google.maps.MapOptions {
  onClick?: (e: google.maps.MapMouseEvent) => void;
  children?: ReactNode;
}

const Map: FC<MapProps> = ({ children, onClick, ...options }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  // Accordingly to documentation a custom hook is needed for option comparisons
  useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions({
        ...options,
        mapTypeControl: false,
        zoom: 18,
        styles: mapStyles,
      });
    }
  }, [map, options]);

  useEffect(() => {
    if (map) {
      ["click"].forEach((eventName) =>
        google.maps.event.clearListeners(map, eventName)
      );

      if (onClick) {
        map.addListener("click", onClick);
      }
    }
  }, [map, onClick]);

  return (
    <>
      <div ref={ref} className={styles.map} />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          return cloneElement(child, { map });
        }
      })}
    </>
  );
};

export { Map };
