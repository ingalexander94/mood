"use client";
import Button from "@/components/Button/Button";
import Image from "next/image";
import styles from "./Home.module.css";
import { MouseEvent } from "react";
import { useRouter } from "next/navigation";

const App = async () => {
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (event.detail === 2) {
      router.push("/inicio");
    }
  };

  return (
    <div className={styles.welcome}>
      <div className={styles.logo} onClick={handleClick}>
        <Image
          alt="Logo Mood"
          src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/logo.svg`}
          height={50}
          width={100}
        />
      </div>
      <Image
        alt="Emoji"
        src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/emoji.png`}
        height={130}
        width={135}
      />
      <div className={styles.description}>
        <h3>¡Pronto descubrirás el placer y la discreción en un solo lugar!</h3>
        <p>
          Estamos reuniendo los mejores espacios para que vivas en cada uno de
          ellos una experiencia única.
        </p>
        <br />
        <p>
          Se uno de los primero en conocer la nueva forma de reservar una
          habitación temática.
        </p>
        <div>
          <div>
            <Image
              alt="Email Icon"
              src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_email.svg`}
              height={50}
              width={50}
            />
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Déjanos tu correo electrónico"
            />
          </div>
          <Button text="Suscríbete" onPressed={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default App;
