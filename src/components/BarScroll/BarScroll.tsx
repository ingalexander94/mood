"use client";
import { useRef } from "react";
import BarScrollStyles from "./BarScroll.module.css";

const BarScroll = () => {
  const line = useRef<HTMLElement>(null);

  const moveScroll = () => {
    line.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <span
      ref={line}
      onClick={moveScroll}
      className={BarScrollStyles.line}
    ></span>
  );
};

export default BarScroll;
