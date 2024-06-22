import "./Card.css";

export const Card = (props) => {
  const { children } = props;
  return <div className="card">{children}</div>;
};
