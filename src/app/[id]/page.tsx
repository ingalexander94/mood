import Back from "@/components/Back/Back";
import Image from "next/image";
import DetailStyles from "./Detail.module.css";
import { Amenity, AmenityModel } from "@/models/amenities.models";
import Promotion from "@/components/Promotion/Promotion";
import Card from "@/components/Card/Card";
import Slider from "@/components/Slider/Slider";

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
      <Back isShared={true} />
      <Slider height="235px" more={true} multiple={true} />
      <div className={DetailStyles.body}>
        <h3>Titulo de la habitación</h3>
        <div className={`${DetailStyles.info} ${DetailStyles.flex}`}>
          <Image
            alt="Foto de el motel"
            src={"/assets/Icon_user.svg"}
            width={30}
            height={30}
          />
          <p>Nombre del Motel</p>
        </div>
        <p className={DetailStyles.underline}>
          Cúcuta, Norte de Santander, Colombia
        </p>
        <hr />
        <h4>Detalles de la habitación</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
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
                src={"/assets/icon_star.svg"}
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
            <li>
              <Image
                alt="Icono de estrella"
                src={"/assets/icon_star.svg"}
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
              src={"/assets/icon_reloj.svg"}
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
              src={"/assets/icon_room.svg"}
              width={25}
              height={25}
            />
            <p>El pago lo haces directamente en el establecimiento.</p>
          </li>
          <li>
            <Image
              alt="Icono de"
              src={"/assets/icon_room.svg"}
              width={25}
              height={25}
            />
            <p>
              Las tarifas son válidas para dos personas. Solo para mayores de
              edad (+18).
            </p>
          </li>
        </ul>
        <hr />
        <h4>Otras habitaciones del mismo establecimiento</h4>
        <section className={DetailStyles.rooms}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((x) => (
            <Card multiple={false} key={x} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Detail;
