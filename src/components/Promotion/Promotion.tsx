import styles from "./Promotion.module.css";

const Promotion = () => {
  return (
    <article className={styles.promotion}>
      <p>Promoción por amanecida</p>
      <p>
        <span>$60.000</span>
        <span>$75.000</span>
      </p>
      <p>
        Desde las <br /> 12:00 am a 5:59 am
      </p>
    </article>
  );
};

export default Promotion;
