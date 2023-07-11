import Image from "next/image";
import styles from "./Detail.module.css";
import { Amenity, AmenityModel } from "@/interfaces/amenities.interface";
import Promotion from "@/components/Promotion/Promotion";
import Card from "@/components/Card/Card";
import Slider from "@/components/Slider/Slider";
import Link from "next/link";

// type Props = {
//   params?: {
//     id?: string;
//   };
// };

const Detail = () => {
  const amenities: Amenity[] = [
    AmenityModel.TV,
    AmenityModel.SNACK,
    AmenityModel.PARKING,
    AmenityModel.GAY,
    AmenityModel.FAN,
    AmenityModel.GROUPS,
    AmenityModel.DEPORTS,
    AmenityModel.CHANNELS,
    AmenityModel.SOUND,
  ];

  return (
    <div className={styles.detail}>
      <div className={styles.cover}>
        <Slider height="235px" more={true} multiple={true} />
        <div className={styles.share}>
          <Link href={"/inicio"}>
            <Image
              alt="Icono de compartir"
              src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/left_arrow.svg`}
              height={20}
              width={20}
            />
          </Link>
          <div>
            <button>
              <Image
                alt="Icono de compartir"
                src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_share.svg`}
                height={20}
                width={20}
              />
            </button>
            <button>
              <Image
                alt="Icono de un corazón"
                src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_favorites.svg`}
                height={20}
                width={20}
              />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <h3>Titulo de la habitación</h3>
        <div className={`${styles.info} ${styles.flex}`}>
          <p className={styles.star}>4/5</p>
          <p className={`${styles.comments} ${styles.underline}`}>
            203 opiniones
          </p>
        </div>
        <p className={`${styles.ubication} ${styles.underline}`}>
          Cúcuta, Norte de Santander, Colombia
        </p>
        <hr />
        <h4>Esta habitación viene equipada con</h4>
        <ul>
          {amenities.map(({ id, name, icon }) => (
            <li key={+id}>
              <Image
                alt={`Foto de ${name}`}
                src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/${icon}`}
                width={25}
                height={25}
              />
              <span>{name}</span>
            </li>
          ))}
        </ul>
        <hr />
        <h4>Calificaciones</h4>
        <div className={styles.califications}>
          <span>4/5</span>
          <ul>
            <li>
              <Image
                alt="Icono de estrella"
                src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_star_black.svg`}
                width={25}
                height={25}
              />
            </li>
            <li>
              <Image
                alt="Icono de estrella"
                src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_star_black.svg`}
                width={25}
                height={25}
              />
            </li>
            <li>
              <Image
                alt="Icono de estrella"
                src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_star_black.svg`}
                width={25}
                height={25}
              />
            </li>
            <li>
              <Image
                alt="Icono de estrella"
                src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_star_black.svg`}
                width={25}
                height={25}
              />
            </li>
            <li>
              <Image
                alt="Icono de estrella"
                src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_star.svg`}
                width={25}
                height={25}
              />
            </li>
          </ul>
        </div>
        <p>Basándonos 203 opiniones de usuarios verificados.</p>
        <hr />
        <h4>El lugar que visitarás</h4>
        <p className={styles.underline}>Cúcuta, Norte de Santander, Colombia</p>
        <hr />
        <h4>Acerca del lugar</h4>
        <div className={styles.motel}>
          <div className={styles.avatar}>
            <Image
              alt="Foto del motel"
              src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/Icon_user.svg`}
              width={100}
              height={100}
            />
            <h5>Nombre del Motel</h5>
          </div>
          <div>
            <span className={styles.star}>5/5</span>
            <p>Calificaciones</p>
            <hr />
            <span>4</span>
            <p>Años de experiencia</p>
            <hr />
            <span>120</span>
            <p>Habitaciones disponibles</p>
          </div>
        </div>
        <ul className={styles.about}>
          <li>
            <Image
              alt="Icono de"
              src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_recent.svg`}
              width={25}
              height={25}
            />
            <p>Establecimiento constituido desde el 1980</p>
          </li>
          <li>
            <Image
              alt="Icono de"
              src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_room.svg`}
              width={25}
              height={25}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </li>
          <li>
            <Image
              alt="Icono de"
              src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_room.svg`}
              width={25}
              height={25}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </li>
          <li>
            <Image
              alt="Icono de"
              src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_room.svg`}
              width={25}
              height={25}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div className={`${styles.profile} ${styles.flex}`}>
          <button>Dejar un mensaje</button>
          <Link href={"/moteles"}>Ver el perfil</Link>
        </div>
        <hr />
        <p>
          Con el fin de proteger tus pagos y garantizar tus reservas nunca
          transfieras dinero ni te comuniques fuera de la página o la
          aplicación.
        </p>
        <hr />
        <h4>Promociones del día para esta habitación</h4>
        <section className={styles.promotions}>
          {[1, 2, 3, 4, 5].map((x) => (
            <Promotion key={x} />
          ))}
        </section>
        <hr />
        <h4>Recomendaciones para tu reserva</h4>
        <ul>
          <li>
            <Image
              alt="Icono de"
              src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_recent.svg`}
              width={25}
              height={25}
            />
            <p>
              Una vez hecha la reserva, tu habitación se guardará sólo por
              cierta cantidad de minutos. Ese es el tiempo máximo que tienes
              para llegar.
            </p>
          </li>
          <li>
            <Image
              alt="Icono de"
              src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_money.svg`}
              width={25}
              height={25}
            />
            <p>El pago lo haces directamente en el establecimiento.</p>
          </li>
          <li>
            <Image
              alt="Icono de"
              src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_channels.svg`}
              width={25}
              height={25}
            />
            <p>
              Las tarifas son válidas para dos personas. Solo para mayores de
              edad (+18).
            </p>
          </li>
          <li>
            <Image
              alt="Icono de"
              src={`${process.env.NEXT_PUBLIC_BUCKET_S3}/assets/icons/icon_room_black.svg`}
              width={25}
              height={25}
            />
            <p>
              Recuerda que estás reservando un tipo de habitación, no una en
              particular.
            </p>
          </li>
        </ul>
        <hr />
        <h4>Otras habitaciones del mismo establecimiento</h4>
        <section className={styles.rooms}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((x) => (
            <Card multiple={false} showInfo={false} key={x} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Detail;
