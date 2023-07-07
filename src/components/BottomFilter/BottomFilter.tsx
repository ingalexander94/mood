"use client";

import { useContext } from "react";
import Image from "next/image";
import { FilterContext } from "@/context/filter";
import Button from "../Button/Button";
import styles from "./BottomFilter.module.css";
import { useRouter } from "next/navigation";

type Props = {
  textButton: string;
  showClear: boolean;
};

const BottomFilter = ({ textButton, showClear }: Props) => {
  const router = useRouter();

  const { setResults } = useContext(FilterContext);

  const handleSetResults = () => {
    setResults();
    router.push("/inicio");
  };

  return (
    <div className={styles.bottomfilter}>
      <ul>
        <li>
          {showClear ? (
            <button className={styles.clear}>
              <Image
                alt="Icono de un borrador"
                src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_clear.svg`}
                width={30}
                height={30}
              />
              <span>Limpiar filtro</span>
            </button>
          ) : (
            <div>
              <span>$120.000</span>
              <p>Sencilla por 3 horas</p>
            </div>
          )}
        </li>
        <li>
          <Button text={textButton} onPressed={handleSetResults} />
        </li>
      </ul>
    </div>
  );
};

export default BottomFilter;
