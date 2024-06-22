import "./MainButton.css";

export const MainButton = (Props) => {
  const { className, text, onClick = () => {} } = Props;

  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};
