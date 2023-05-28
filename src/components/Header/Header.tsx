import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.filter}>
        <Link className={styles.search} href={"/reservar"}>
          <div>
            <Image
              alt="Icono de ubicación"
              src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_ubication.svg`}
              width={25}
              height={25}
            />
            <div>
              <h3>¿Dónde quieres ir?</h3>
              <p>¿Cuándo? - ¿A que hora?</p>
            </div>
          </div>
        </Link>
        <Link className={styles.more} href={"/"}>
          <Image
            alt="Icono de filtros"
            src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_filter.svg`}
            width={37}
            height={37}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
