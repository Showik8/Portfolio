import { ButtonSizes } from "../../constants/button";

import "./Button.css";

export const Button = (props) => {
  const {
    size = ButtonSizes.MEDIUM,
    onClick = () => {},
    type = "button",
    children,
  } = props;

  return (
    <button onClick={onClick} type={type} className={`btn ${size}`}>
      {children}
    </button>
  );
};
