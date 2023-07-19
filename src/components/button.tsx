import { MouseEventHandler } from "react";

interface Props {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  styles?: string;
}
const Button = ({ text, onClick, styles }: Props) => {
  return (
    <button className={styles} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
