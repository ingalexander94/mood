import Image from "next/image";
import HeaderStyles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={HeaderStyles.header}>
      <div className={HeaderStyles.filter}>
        <div>
          <Image
            alt="Icono de buscar"
            src={"/assets/icon_search.svg"}
            width={25}
            height={25}
          />
          <div>
            <h3>¿Dónde quieres ir?</h3>
            <p>¿Cuándo? - ¿A que hora?</p>
          </div>
        </div>
        <Link href={"/reservar"}>
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
