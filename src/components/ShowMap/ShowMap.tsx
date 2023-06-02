"use client";
import Image from "next/image";
import styles from "./ShowMap.module.css";

type Props = {
  visibility: boolean;
};

const ShowMap = ({ visibility }: Props) => {
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      className={`${styles.show} ${visibility ? styles.visible : ""}`}
      onClick={handleScroll}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_favorites.svg`}
        alt="Icono del mapa"
        width={20}
        height={20}
      />
      <span>Mapa</span>
    </button>
  );
};

export default ShowMap;
