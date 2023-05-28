"use client";
import { useRef } from "react";
import styles from "./BarScroll.module.css";

const BarScroll = () => {
  const line = useRef<HTMLElement>(null);

  const moveScroll = () => {
    line.current?.scrollIntoView({ behavior: "smooth" });
  };

  return <span ref={line} onClick={moveScroll} className={styles.line}></span>;
};

export default BarScroll;
