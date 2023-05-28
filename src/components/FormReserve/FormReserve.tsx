"use client";

import Image from "next/image";
import styles from "./FormReserve.module.css";
import { useContext, useRef } from "react";
import { GlobalContext } from "@/context/global";
import { FilterContext } from "@/context/filter";
import * as formatter from "@/utils/date";

const FormReserve = () => {
  const { places } = useContext(GlobalContext);
  const {
    place: active,
    date,
    setPlace,
    setHour,
    setDate,
    setToday,
  } = useContext(FilterContext);
  const inputSearch = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setTimeout(() => {
      inputSearch.current?.focus();
    }, 100);
  };

  const handleSetPlace = setPlace;

  const handleSetDate = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDate(e.target.value);

  const handleSetHour = (e: React.ChangeEvent<HTMLInputElement>) =>
    setHour(e.target.value);

  const handleSetNow = (current: boolean) => setToday(current);

  return (
    <section className={styles.wrapper}>
      <input type="checkbox" name="search" id="search" />
      <label htmlFor="search">
        <Image
          src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_filter.svg`}
          alt="Icono de filtros"
          width={25}
          height={25}
        />
        <span>Filtros</span>
      </label>

      <div className={styles.search}>
        <article>
          <label>
            <Image
              src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_search.svg`}
              alt="Icono de buscar"
              height={20}
              width={20}
            />
            <input
              type="text"
              placeholder="Escribe tu destino"
              name=""
              id=""
              ref={inputSearch}
            />
          </label>
          <ul>
            <li>
              <div>
                <Image
                  src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_ubication.svg`}
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
                  src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_ubication.svg`}
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
                  src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_ubication.svg`}
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
                  src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_ubication.svg`}
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
                  src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_ubication.svg`}
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

      <div className={styles.filter}>
        <article>
          <label htmlFor="search" onClick={handleFocus}>
            <div className={styles.type}>
              <Image
                src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_search.svg`}
                alt="Icono de buscar"
                height={20}
                width={20}
              />
              <span className={styles.full}>¿Dónde?</span>
            </div>
            <p>{active?.name ?? ""}</p>
          </label>
          <div className={styles.places}>
            <ul>
              {places &&
                places.map(({ id, name, photo, latitude, longitude }, i) => (
                  <li
                    key={id?.toString() ?? i}
                    onClick={() =>
                      handleSetPlace({ name, photo, latitude, longitude })
                    }
                    className={name === active?.name ? styles.active : ""}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BUCKET_S3}${photo}`}
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
          <input type="checkbox" name="filter" id="filter2" />
          <label htmlFor="filter2">
            <div className={styles.type}>
              <Image
                src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_calendar.svg`}
                alt="Icono de buscar"
                height={20}
                width={20}
              />
              <span>¿Cuándo?</span>
            </div>
            <p>{formatter.showDate(date)}</p>
            <div className={styles.actions}>
              <button onClick={() => handleSetNow(true)}>En camino</button>
              <button onClick={() => handleSetNow(false)}>Hoy</button>
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
          <input type="checkbox" name="filter" id="filter3" />
          <label htmlFor="filter3">
            <div className={styles.type}>
              <Image
                src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_reloj.svg`}
                alt="Icono de buscar"
                height={20}
                width={20}
              />
              <span>Hora de llegada</span>
            </div>
            <p>{formatter.showHour(date)}</p>
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
