"use client";

import { Category } from "@/models/categories.model";
import CategoriesStyles from "./Categories.module.css";
import Image from "next/image";
import { useState } from "react";

interface Props {
  categories: Category[];
}

const Categories = ({ categories: data }: Props) => {
  const [categories, setCategories] = useState<Category[]>(data);

  const handleSelectCategory = (i: number) => {
    let temp = [...categories];
    temp[i].active = !temp[i].active;
    setCategories(temp);
    temp = [];
  };

  return (
    <section className={CategoriesStyles.categories}>
      <article className={CategoriesStyles.info}>
        <h3>Categorías</h3>
        <button>Todas las categorías</button>
      </article>
      <article className={CategoriesStyles.list}>
        <ul>
          {categories.map(({ id, name, icon, active }, i) => (
            <li
              onClick={() => handleSelectCategory(i)}
              className={active ? CategoriesStyles.active : ""}
              key={+id}
            >
              <Image
                alt={`Icono de ${name}`}
                src={`/assets/${icon}`}
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
