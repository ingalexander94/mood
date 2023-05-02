"use client";

import Link from "next/link";
import BottombarStyles from "./Bottombar.module.css";
import { Route, Routes } from "@/models/routes.model";
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
    <nav className={BottombarStyles.bottombar}>
      <ul>
        {pathNames.map(({ name, path, icon }) => (
          <li
            key={path}
            className={pathname === path ? BottombarStyles.active : ""}
          >
            <Link href={path}>
              <Image
                alt={`Icono de ${name}`}
                src={`/assets/${icon}`}
                width={30}
                height={30}
              />
              <span>{name}</span>
            </Link>
          </li>
        ))}
        <div></div>
      </ul>
    </nav>
  );
};

export default Bottombar;
