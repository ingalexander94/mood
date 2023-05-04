"use client";

import Image from "next/image";
import CardStyles from "./Card.module.css";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import Slider from "../Slider/Slider";

type Props = {
  multiple: boolean;
};

const Card = ({ multiple }: Props) => {
  const router = useRouter();

  const navigateToDetail = () => router.push(`/${1}`);

  return (
    <article className={CardStyles.card}>
      <button>
        <Image
          alt="Icono de un corazón"
          src={"/assets/icon_favorites.svg"}
          height={20}
          width={20}
        />
      </button>
      <Slider height="190px" more={false} multiple={multiple} />
      <div className={CardStyles.body}>
        <div className={`${CardStyles.title} ${CardStyles.flex}`}>
          <h3>Titulo de la habitación</h3>
          <p>
            <Image
              alt="Icono de estrella"
              src={"/assets/icon_star.svg"}
              width={25}
              height={25}
            />
            <span>4/5</span>
          </p>
        </div>
        <div className={`${CardStyles.info} ${CardStyles.flex}`}>
          <div>
            <Image
              alt="Foto del motel"
              src={"/assets/Icon_user.svg"}
              width={30}
              height={30}
            />
            <p>Nombre del Motel</p>
          </div>
          <p>Aquí colocamos una descripción breve de la habitación</p>
        </div>
        <div className={`${CardStyles.details} ${CardStyles.flex}`}>
          <div>
            <h4>$120.000</h4>
            <p>Por 3 horas</p>
          </div>
          <Button onPressed={navigateToDetail} text="Ver detalles" />
        </div>
      </div>
    </article>
  );
};

export default Card;