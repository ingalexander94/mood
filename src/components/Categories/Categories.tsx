"use client";

import styles from "./Categories.module.css";
import Image from "next/image";
import { useContext } from "react";
import { GlobalContext } from "@/context/global";
import { FilterContext } from "@/context/filter";

const Categories = () => {
  const { categories, indexCategory, activateCategory } =
    useContext(GlobalContext);

  const { results } = useContext(FilterContext);

  return (
    <section className={styles.categories}>
      {(!results || !results.length) && (
        <article className={styles.info}>
          <h3>Categorías</h3>
          <button>Todas las categorías</button>
        </article>
      )}
      <article className={styles.list}>
        <ul>
          {categories &&
            categories.map(({ id, name, icon }, i) => (
              <li
                onClick={() => activateCategory(i)}
                className={i === indexCategory ? styles.active : ""}
                key={id.toString()}
              >
                <Image
                  alt={`Icono de ${name}`}
                  src={icon}
                  width={25}
                  height={25}
                />
                <span>{name}</span>
              </li>
            ))}
        </ul>
      </article>
    </section>
  );
};

export default Categories;
