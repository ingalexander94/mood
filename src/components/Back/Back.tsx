"use client";

import Image from "next/image";
import styles from "./Back.module.css";
import { useRouter } from "next/navigation";

type Props = {
  isShared: boolean;
};

const Back = ({ isShared }: Props) => {
  const router = useRouter();

  const toBack = () => router.back();

  return (
    <nav className={styles.back}>
      <button onClick={toBack}> {"<"} Volver</button>
      {isShared && (
        <div className="share">
          <button>
            <Image
              src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_favorites.svg`}
              alt="Icono de compatir"
              width={25}
              height={25}
            />
          </button>
          <button>
            <Image
              src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_share.svg`}
              alt="Icono de favorito"
              width={25}
              height={25}
            />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Back;
