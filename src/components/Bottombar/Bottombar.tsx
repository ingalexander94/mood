"use client";

import Link from "next/link";
import styles from "./Bottombar.module.css";
import { Route, Routes } from "@/interfaces/Routes.interface";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import { FilterContext } from "@/context/filter";
import ShowMap from "../ShowMap/ShowMap";

const Bottombar = () => {
  const pathname = usePathname();

  const pathNames: Route[] = [
    Routes.HOME,
    Routes.MOTELS,
    Routes.FAVORITES,
    Routes.PROFILE,
  ];

  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [visibility, setVisibility] = useState<boolean>(false);
  const appbarRef = useRef<HTMLDivElement>(null);
  const { results } = useContext(FilterContext);

  const controlNavbar = () => {
    appbarRef.current!.style.bottom =
      appbarRef.current && window.scrollY < lastScrollY ? "0" : "-85px";
    setVisibility(window.scrollY !== 0);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    if (results.length > 0 && typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY, results.length]);

  return (
    <div className={styles.nav} ref={appbarRef}>
      {pathname === "/" && results.length > 0 && (
        <ShowMap visibility={visibility} />
      )}
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
    </div>
  );
};

export default Bottombar;
