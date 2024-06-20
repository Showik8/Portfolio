import { CardSizes } from "../../constants/card";
import { Actions } from "../Actions";
import { Card } from "../Card";

import "./Todo.css";

export const Todo = (props) => {
  const { todo, handlToggleTodo = () => {},EditBtn = ()=>{},DeleteBtn=()=>{} ,idx, } = props;

  


  return (
    <Card classNames="todoCard" size={CardSizes.SMALL}>
      <div className="check">
        <input
          value={todo.done}
          onChange={() => handlToggleTodo(idx)}
          type="checkbox"
        />
        <span className={todo.done ? "checked" : ""}>{todo.value}</span>
      </div>
      <div className="todoActions">
        <button onClick={()=> EditBtn(idx)}>E</button>
        <button onClick={()=>DeleteBtn(idx)} >D</button>
      </div>
    </Card>
  );
};
