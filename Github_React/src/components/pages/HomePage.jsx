import { Spiner } from "../Spiner";

// eslint-disable-next-line react/prop-types
export const HomePage = ({ mode, loading, data }) => {
  console.log(data);
  let style = "Content";
  return (
    <div className={!mode ? (style += " Light") : style}>
      {loading && <Spiner />}
      {data.map((item) => console.log(item))}
    </div>
  );
};
