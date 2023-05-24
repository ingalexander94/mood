"use client";

import { ICategory } from "@/interfaces/Category.interface";
import CategoriesStyles from "./Categories.module.css";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { GlobalContext } from "@/context/global";

interface Props {
  categories: ICategory[];
}

const Categories = ({ categories: data }: Props) => {
  const { categories, indexCategory, loadCategories, activateCategory } =
    useContext(GlobalContext);

  useEffect(() => {
    loadCategories(data);
    return () => {};
  }, []);

  return (
    <section className={CategoriesStyles.categories}>
      {/* <article className={CategoriesStyles.info}>
        <h3>Categorías</h3>
        <button>Todas las categorías</button>
      </article> */}
      <article className={CategoriesStyles.list}>
        <ul>
          {categories &&
            categories.map(({ id, name, icon }, i) => (
              <li
                onClick={() => activateCategory(i)}
                className={i === indexCategory ? CategoriesStyles.active : ""}
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
