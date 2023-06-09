"use client";

import Image from "next/image";
import styles from "./Slider.module.css";
import { useState, UIEvent } from "react";
import { Timer } from "@/utils/timer";

type Props = {
  height: string;
  more: boolean;
  multiple: boolean;
};

const Slider = ({ height, more, multiple }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = Timer.debounce((event: UIEvent<HTMLDivElement>) => {
    const section = event.target as HTMLInputElement;
    const { scrollLeft, scrollWidth } = section;
    setCurrentIndex(scrollLeft / (scrollWidth / 3));
  }, 5);

  return (
    <div className={styles.slider} style={{ height }}>
      <section
        onScroll={handleScroll}
        className={!multiple ? styles.unique : ""}
      >
        <article>
          <Image
            alt="Foto de una habitación"
            src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/habitacion-1.jpg`}
            width={0}
            priority={true}
            height={0}
            sizes="100%"
            style={{ width: "100%" }}
          />
        </article>
        <article>
          <Image
            alt="Foto de una habitación"
            src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/habitacion-2.jpg`}
            width={0}
            height={0}
            sizes="100%"
            style={{ width: "100%" }}
          />
        </article>
        <article>
          <Image
            alt="Foto de una habitación"
            src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/habitacion-3.jpg`}
            width={0}
            height={0}
            sizes="100%"
            style={{ width: "100%" }}
          />
        </article>
      </section>
      {multiple && (
        <div>
          {[1, 2, 3].map((x, i) => (
            <span
              key={x}
              className={currentIndex === i ? styles.active : ""}
            ></span>
          ))}
        </div>
      )}
      {more && <button>Ver Fotos</button>}
    </div>
  );
};

export default Slider;
