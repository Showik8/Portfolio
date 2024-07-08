import sun from "../../assets/Png/sun.png";
import Path from "../../assets/Png/Path.png";

import "./LigthMode.css";

// eslint-disable-next-line react/prop-types
export const LigthMode = ({ mode, toggle }) => {
  let style = "LigthMode";

  const ToggleLigthMode = () => {
    toggle(!mode);
    localStorage.setItem("mode", JSON.stringify(!mode));
  };

  return (
    <div className={!mode ? (style += " Light") : style}>
      <span>devfinder</span>

      {/* {mode && <span color="black">devfinder</span>} */}
      <div onClick={ToggleLigthMode}>
        {mode && <h6>LIGTH</h6>}
        {mode && <img src={sun} alt="sun" />}

        {!mode && <h6>DARK</h6>}
        {!mode && <img src={Path} alt="moon" />}
      </div>
    </div>
  );
};
