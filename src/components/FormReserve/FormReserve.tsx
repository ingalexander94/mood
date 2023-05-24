"use client";

import Image from "next/image";
import FormReserveStyles from "./FormReserve.module.css";
import { useContext, useEffect, useRef } from "react";
import { IPlace } from "@/interfaces/Place.interface";
import { GlobalContext } from "@/context/global";
import { FilterContext } from "@/context/filter";
import * as formatter from "@/utils/date";

interface Props {
  places: IPlace[];
}

const FormReserve = ({ places: data }: Props) => {
  const { places, loadPlaces } = useContext(GlobalContext);
  const {
    place: active,
    date,
    setPlace,
    setHour,
    setDate,
  } = useContext(FilterContext);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadPlaces(data);
    if (data.length) {
      const { name, photo, latitude, longitude } = data[0];
      setPlace({ name, photo, latitude, longitude });
    }
    return () => {};
  }, [data]);

  const handleFocus = () => {
    setTimeout(() => {
      input.current?.focus();
    }, 100);
  };

  const handleSetPlace = setPlace;

  const handleSetDate = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDate(e.target.value);

  const handleSetHour = (e: React.ChangeEvent<HTMLInputElement>) =>
    setHour(e.target.value);

  return (
    <section className={FormReserveStyles.wrapper}>
      <input type="checkbox" name="search" id="search" />
      <label htmlFor="search">
        <Image
          src={"./assets/icon_filter.svg"}
          alt="Icono de filtros"
          width={25}
          height={25}
        />
        <span>Filtros</span>
      </label>

      <div className={FormReserveStyles.search}>
        <article>
          <label>
            <Image
              src={"./assets/icon_search.svg"}
              alt="Icono de buscar"
              height={20}
              width={20}
            />
            <input
              type="text"
              placeholder="Escribe tu destino"
              name=""
              id=""
              ref={input}
            />
          </label>
          <ul>
            <li>
              <div>
                <Image
                  src={"./assets/icon_ubication.svg"}
                  alt="Icono de buscar"
                  height={20}
                  width={20}
                />
              </div>
              <span>Cúcuta, Norte de Santander</span>
            </li>
            <li>
              <div>
                <Image
                  src={"./assets/icon_ubication.svg"}
                  alt="Icono de buscar"
                  height={20}
                  width={20}
                />
              </div>
              <span>Cúcuta, Norte de Santander, Colombia</span>
            </li>
            <li>
              <div>
                <Image
                  src={"./assets/icon_ubication.svg"}
                  alt="Icono de buscar"
                  height={20}
                  width={20}
                />
              </div>
              <span>Los Caobos, Cúcuta, Norte de Santander</span>
            </li>
            <li>
              <div>
                <Image
                  src={"./assets/icon_ubication.svg"}
                  alt="Icono de buscar"
                  height={20}
                  width={20}
                />
              </div>
              <span>La Riviera, Cúcuta, Norte de Santander</span>
            </li>
            <li>
              <div>
                <Image
                  src={"./assets/icon_ubication.svg"}
                  alt="Icono de buscar"
                  height={20}
                  width={20}
                />
              </div>
              <span>Centro, Cúcuta, Norte de Santander</span>
            </li>
          </ul>
        </article>
      </div>

      <div className={FormReserveStyles.filter}>
        <article>
          <label htmlFor="search" onClick={handleFocus}>
            <div className={FormReserveStyles.type}>
              <Image
                src={"./assets/icon_search.svg"}
                alt="Icono de buscar"
                height={20}
                width={20}
              />
              <span className={FormReserveStyles.full}>¿Dónde quieres ir?</span>
            </div>
          </label>
          <div className={FormReserveStyles.places}>
            <ul>
              {places &&
                places.map(({ id, name, photo, latitude, longitude }, i) => (
                  <li
                    key={id?.toString() ?? i}
                    onClick={() =>
                      handleSetPlace({ name, photo, latitude, longitude })
                    }
                    className={
                      name === active?.name ? FormReserveStyles.active : ""
                    }
                  >
                    <Image
                      src={photo}
                      alt="Foto de mapa"
                      width={180}
                      height={180}
                    />
                    <span>{name}</span>
                  </li>
                ))}
            </ul>
          </div>
        </article>
        <article>
          <input type="radio" name="filter" id="filter2" />
          <label htmlFor="filter2">
            <div className={FormReserveStyles.type}>
              <Image
                src={"./assets/icon_calendar.svg"}
                alt="Icono de buscar"
                height={20}
                width={20}
              />
              <span>¿Cuándo?</span>
            </div>
            <div className={FormReserveStyles.actions}>
              <button>En camino</button>
              <button>Hoy</button>
            </div>
          </label>
          <div>
            <input
              type="date"
              value={formatter.formateDate(date)}
              name="date"
              onChange={handleSetDate}
              id="date"
            />
          </div>
        </article>
        <article>
          <input type="radio" name="filter" id="filter3" />
          <label htmlFor="filter3">
            <div className={FormReserveStyles.type}>
              <Image
                src={"./assets/icon_reloj.svg"}
                alt="Icono de buscar"
                height={20}
                width={20}
              />
              <span>Hora de llegada</span>
            </div>
          </label>
          <div>
            <input
              type="time"
              value={formatter.formatHour(date)}
              onChange={handleSetHour}
              name="hour"
              id="hour"
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default FormReserve;
