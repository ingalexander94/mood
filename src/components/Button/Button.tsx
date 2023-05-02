import { MouseEventHandler } from "react";
import ButtonStyles from "./Button.module.css";

interface Props {
  text: string;
  onPressed: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ text, onPressed }: Props) => {
  return (
    <button onClick={onPressed} className={ButtonStyles.button}>
      {text}
    </button>
  );
};

export default Button;
