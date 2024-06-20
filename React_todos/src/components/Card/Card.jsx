import { CardSizes } from "../../constants/card";

import "./Card.css";

export const Card = (props) => {
  const { size = CardSizes.MEDIUM, classNames = "", children } = props;

  const classes = Array.isArray(classNames) ? classNames.join(" ") : classNames;
  return <div className={`card ${size} ${classes}`}>{children}</div>;
};
