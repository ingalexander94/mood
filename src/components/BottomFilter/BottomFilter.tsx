"use client";

import Image from "next/image";
import Button from "../Button/Button";
import BottomFilterStyles from "./BottomFilter.module.css";

type Props = {
  textButton: string;
  showClear: boolean;
};

const BottomFilter = ({ textButton, showClear }: Props) => {
  return (
    <div className={BottomFilterStyles.bottomfilter}>
      <ul>
        <li>
          {showClear ? (
            <button className={BottomFilterStyles.clear}>
              <Image
                alt="Icono de un borrador"
                src={"/assets/icon_clear.svg"}
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
          <Button text={textButton} onPressed={() => {}} />
        </li>
      </ul>
    </div>
  );
};

export default BottomFilter;
