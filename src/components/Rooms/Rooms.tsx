"use client";

import BarScroll from "../BarScroll/BarScroll";
import Categories from "../Categories/Categories";
import Card from "../Card/Card";
import { useContext } from "react";
import { FilterContext } from "@/context/filter";
import MapView from "../Map/Map";
import styles from "./Rooms.module.css";

const Rooms = () => {
  const { results } = useContext(FilterContext);

  return (
    <div className={styles.container}>
      {results.length > 0 && <MapView />}
      <div className={results.length > 0 ? styles.wrapper : ""}>
        {results.length > 0 && <BarScroll />}
        <Categories />
        <section className={styles.rooms}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => (
            <Card multiple={true} showInfo={true} key={x} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Rooms;
