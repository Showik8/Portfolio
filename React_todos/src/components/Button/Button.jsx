import { ButtonSizes } from "../../constants/button";

import "./Button.css";

export const Button = (props) => {
  const {
    size = ButtonSizes.MEDIUM,
    onClick = () => {},
    type = "button",
    children,
    editing = false,
    save
  } = props;
  
  if(editing==false){
  return (
    <button onClick={onClick} type={type} className={`btn ${size}`}>
      {children}
    </button>
  );
}else{
  return(
    <button onClick={save} type={type} className={`btn ${size}`}>
      Save
    </button>
  )
}


};
