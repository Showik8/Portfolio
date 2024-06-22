import { CardSizes } from "../../constants/card";
import { Card } from "../Card";
import { DeleteSVG } from "../Icons/DeleteIcon";
import { EditIcon } from "../Icons/EditIcon";

import "./Todo.css";

export const Todo = (props) => {
  const {
    todo,
    handlToggleTodo = () => {},
    onEditTodo = () => {},
    onDeleteTodo = () => {},
    idx,
  } = props;

  onDeleteTodo;

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
        <button onClick={() => onEditTodo(idx)}>
          <EditIcon />
        </button>
        <button onClick={() => onDeleteTodo(idx)}>
          <DeleteSVG />
        </button>
      </div>
    </Card>
  );
};
