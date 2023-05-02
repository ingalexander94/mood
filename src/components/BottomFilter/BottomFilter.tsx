"use client";

import Button from "../Button/Button";
import BottomFilterStyles from "./BottomFilter.module.css";

const BottomFilter = () => {
  return (
    <div className={BottomFilterStyles.bottomfilter}>
      <ul>
        <li>
          <div>
            <span>$120.000</span>
            <p>Sencilla por 3 horas</p>
          </div>
        </li>
        <li>
          <Button text="Reservar" onPressed={() => {}} />
        </li>
      </ul>
    </div>
  );
};

export default BottomFilter;
