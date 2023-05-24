import Image from "next/image";
import HeaderStyles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={HeaderStyles.header}>
      <div className={HeaderStyles.filter}>
        <Link className={HeaderStyles.search} href={"/reservar"}>
          <div>
            <Image
              alt="Icono de ubicación"
              src={"/assets/icon_ubication.svg"}
              width={25}
              height={25}
            />
            <div>
              <h3>¿Dónde quieres ir?</h3>
              <p>¿Cuándo? - ¿A que hora?</p>
            </div>
          </div>
        </Link>
        <Link className={HeaderStyles.more} href={"/"}>
          <Image
            alt="Icono de filtros"
            src={"/assets/icon_filter.svg"}
            width={37}
            height={37}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
