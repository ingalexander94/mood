//@ts-ignore
import { Map } from "!mapbox-gl";
import { useContext, useLayoutEffect, useRef } from "react";
import styles from "./Map.module.css";
import { MapContext } from "@/context/map";

const MapView = () => {
  const { setMap } = useContext(MapContext);

  const mapSection = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const map = new Map({
      container: mapSection.current!,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-72.5045468, 7.896744],
      zoom: 16,
    });

    setMap(map);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <section className={styles.wrapper} ref={mapSection}></section>;
};

export default MapView;
