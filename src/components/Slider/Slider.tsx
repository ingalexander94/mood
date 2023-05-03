import Image from "next/image";
import SliderStyles from "./Slider.module.css";

type Props = {
  height: string;
  more: boolean;
  multiple: boolean;
};

const Slider = ({ height, more, multiple }: Props) => {
  return (
    <div className={SliderStyles.slider}>
      <section
        className={!multiple ? SliderStyles.unique : ""}
        style={{ height }}
      >
        <article>
          <Image
            alt="Foto de una habitación"
            src={"/assets/habitacion-1.jpg"}
            width={0}
            height={0}
            sizes="100%"
            style={{ width: "100%" }}
          />
        </article>
        <article>
          <Image
            alt="Foto de una habitación"
            src={"/assets/habitacion-2.jpg"}
            width={0}
            height={0}
            sizes="100%"
            style={{ width: "100%" }}
          />
        </article>
        <article>
          <Image
            alt="Foto de una habitación"
            src={"/assets/habitacion-3.jpg"}
            width={0}
            height={0}
            sizes="100%"
            style={{ width: "100%" }}
          />
        </article>
      </section>
      {multiple && (
        <div>
          <span className={SliderStyles.active}></span>
          <span></span>
          <span></span>
        </div>
      )}
      {more && <button>Ver Fotos</button>}
    </div>
  );
};

export default Slider;
