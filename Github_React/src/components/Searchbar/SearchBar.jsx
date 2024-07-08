import icon from "../../assets/Png/icon.png";
import "./Searchbar.css";

// eslint-disable-next-line react/prop-types
export function SearchBar({ mode, onclick, value, error, data}) {
  let style = "Searchbar";

  return (
    <div className={!mode ? (style += " Light") : style}>
      <img src={icon}></img>
      <input
        placeholder="Search Github Username..."
        onChange={(e) => {
          if(e.target.value.length>3){
          value(e.target.value);
          }
        }}
      ></input>
      {error && <p>Founded Error</p>}
      {!data? (data===0 && data !=undefined &&<p>not founded</p>) : null}
      <button onClick={onclick}>Search</button>
    </div>
  );
}
