import { MouseEventHandler } from "react";
import styles from "./Button.module.css";

interface Props {
  text: string;
  onPressed: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ text, onPressed }: Props) => {
  return (
    <button onClick={onPressed} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
