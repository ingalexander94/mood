import PromotionStyles from "./Promotion.module.css";

const Promotion = () => {
  return (
    <article className={PromotionStyles.promotion}>
      <p>Promoción por amanecida</p>
      <p>
        <span>$60.000</span>
        <span>$75.000</span>
      </p>
      <p>Desde las 12:00 am a 5:59 am</p>
    </article>
  );
};

export default Promotion;
