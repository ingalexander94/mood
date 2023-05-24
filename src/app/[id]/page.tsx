import Image from "next/image";
import DetailStyles from "./Detail.module.css";
import { Amenity, AmenityModel } from "@/interfaces/amenities.interface";
import Promotion from "@/components/Promotion/Promotion";
import Card from "@/components/Card/Card";
import Slider from "@/components/Slider/Slider";
import Link from "next/link";

type Props = {
  params?: {
    id?: string;
  };
};

const Detail = ({ params }: Props) => {
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
    <div className={DetailStyles.detail}>
      <div className={DetailStyles.cover}>
        <Slider height="235px" more={true} multiple={true} />
        <div className={DetailStyles.share}>
          <Link href={"/"}>
            <Image
              alt="Icono de un corazón"
              src={"/assets/icon_favorites.svg"}
              height={20}
              width={20}
            />
          </Link>
          <div>
            <button>
              <Image
                alt="Icono de compartir"
                src={"/assets/icon_share.svg"}
                height={20}
                width={20}
              />
            </button>
            <button>
              <Image
                alt="Icono de un corazón"
                src={"/assets/icon_favorites.svg"}
                height={20}
                width={20}
              />
            </button>
          </div>
        </div>
      </div>
      <div className={DetailStyles.body}>
        <h3>Titulo de la habitación</h3>
        <div className={`${DetailStyles.info} ${DetailStyles.flex}`}>
          <p className={DetailStyles.star}>4/5</p>
          <p className={`${DetailStyles.comments} ${DetailStyles.underline}`}>
            203 opiniones
          </p>
        </div>
        <p className={`${DetailStyles.ubication} ${DetailStyles.underline}`}>
          Cúcuta, Norte de Santander, Colombia
        </p>
        <hr />
        <h4>Esta habitación viene equipada con</h4>
        <ul>
          {amenities.map(({ id, name, icon }) => (
            <li key={+id}>
              <Image
                alt={`Foto de ${name}`}
                src={`/assets/${icon}`}
                width={25}
                height={25}
              />
              <span>{name}</span>
            </li>
          ))}
        </ul>
        <hr />
        <h4>Calificaciones</h4>
        <div className={DetailStyles.califications}>
          <span>4/5</span>
          <ul>
            <li>
              <Image
                alt="Icono de estrella"
                src={"/assets/icon_star_black.svg"}
                width={25}
                height={25}
              />
            </li>
            <li>
              <Image
                alt="Icono de estrella"
                src={"/assets/icon_star_black.svg"}
                width={25}
                height={25}
              />
            </li>
            <li>
              <Image
                alt="Icono de estrella"
                src={"/assets/icon_star_black.svg"}
                width={25}
                height={25}
              />
            </li>
            <li>
              <Image
                alt="Icono de estrella"
                src={"/assets/icon_star_black.svg"}
                width={25}
                height={25}
              />
            </li>
            <li>
              <Image
                alt="Icono de estrella"
                src={"/assets/icon_star.svg"}
                width={25}
                height={25}
              />
            </li>
          </ul>
        </div>
        <p>Basándonos 203 opiniones de usuarios verificados.</p>
        <hr />
        <h4>El lugar que visitarás</h4>
        <p className={DetailStyles.underline}>
          Cúcuta, Norte de Santander, Colombia
        </p>
        <hr />
        <h4>Acerca del lugar</h4>
        <div className={DetailStyles.motel}>
          <div className={DetailStyles.avatar}>
            <Image
              alt="Foto del motel"
              src={"/assets/Icon_user.svg"}
              width={100}
              height={100}
            />
            <h5>Nombre del Motel</h5>
          </div>
          <div>
            <span className={DetailStyles.star}>5/5</span>
            <p>Calificaciones</p>
            <hr />
            <span>4</span>
            <p>Años de experiencia</p>
            <hr />
            <span>120</span>
            <p>Habitaciones disponibles</p>
          </div>
        </div>
        <ul className={DetailStyles.about}>
          <li>
            <Image
              alt="Icono de"
              src={"/assets/icon_recent.svg"}
              width={25}
              height={25}
            />
            <p>Establecimiento constituido desde el 1980</p>
          </li>
          <li>
            <Image
              alt="Icono de"
              src={"/assets/icon_room.svg"}
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
              src={"/assets/icon_room.svg"}
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
              src={"/assets/icon_room.svg"}
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
        <div className={`${DetailStyles.profile} ${DetailStyles.flex}`}>
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
        <section className={DetailStyles.promotions}>
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
              src={"/assets/icon_recent.svg"}
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
              src={"/assets/icon_money.svg"}
              width={25}
              height={25}
            />
            <p>El pago lo haces directamente en el establecimiento.</p>
          </li>
          <li>
            <Image
              alt="Icono de"
              src={"/assets/icon_channels.svg"}
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
              src={"/assets/icon_room_black.svg"}
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
        <section className={DetailStyles.rooms}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((x) => (
            <Card multiple={false} showInfo={false} key={x} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Detail;
