"use client";

import Link from "next/link";
import styles from "./Bottombar.module.css";
import { Route, Routes } from "@/interfaces/Routes.interface";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Bottombar = () => {
  const pathname = usePathname();

  const pathNames: Route[] = [
    Routes.HOME,
    Routes.MOTELS,
    Routes.FAVORITES,
    Routes.PROFILE,
  ];

  return (
    <nav className={styles.bottombar}>
      <ul>
        {pathNames.map(({ name, path, icon }) => (
          <li key={path} className={pathname === path ? styles.active : ""}>
            <Link href={path}>
              <Image
                alt={`Icono de ${name}`}
                src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/${
                  pathname === path ? "active_" : ""
                }${icon}`}
                width={30}
                height={30}
              />
              <span>{name}</span>
            </Link>
          </li>
        ))}
        {
          <div
            className={
              pathNames.find(({ path }) => path == pathname)
                ? styles.show
                : styles.hide
            }
          ></div>
        }
      </ul>
    </nav>
  );
};

export default Bottombar;
