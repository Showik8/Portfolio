import "./Btn.css";

export const Btn = (props) => {
  let {
    children,
    onClick = () => {},
    active = false,
    disabled = false,
  } = props;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`btn ${active ? "active" : ""}`}
    >
      {children}
    </button>
  );
};
