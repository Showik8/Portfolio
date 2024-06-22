import { useMemo, useState } from "react";

import { Card } from "./components/Card";
import { CardSizes } from "./constants/card";
import { Button } from "./components/Button";
import { ButtonSizes } from "./constants/button";
import { Todo } from "./components/Todo";
import { Result } from "./components/Result";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [Edit, setEditing] = useState(false)
  const [cur, SetCur] = useState (0)
  // const [total, setTotal] = useState(todos.length)
  // let result = todos.length


  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    if (inputValue.trim() === "") return;
    const newTodo = {
      value: inputValue,
      done: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setInputValue("");
  };

  const handlToggleTodo = (idx) => {
    setTodos((prev) =>
      prev.map((todo, currIdx) =>
        idx === currIdx ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const totalTodos = useMemo(()=>{
    return todos.length
  },[todos])


  const completedTodos = useMemo(() => {
    return todos.filter((todo) => todo.done).length;
  }, [todos]);


  const EditBtn=(idx)=>{
  setEditing(true)
  setInputValue(todos[idx].value)
  SetCur(idx)
}
   

  const DeleteBtn=(idx)=>{
    setTodos((prev)=>prev.filter((todo,currIdx)=>idx!==currIdx))
  }

  const SaveValue=()=>{
      const newTodos = [...todos];
      newTodos[cur].value = inputValue;
      setTodos(newTodos);
      setEditing(false);
      setInputValue("");
    }


  return (
    <Card classNames="parentCard" size={CardSizes.LARGE}>
      <Result completed={completedTodos} total={totalTodos} />
      <form className="form">
        <input onChange={handleChange} value={inputValue} type="text" />
      <Button save={SaveValue} editing={Edit} onClick={handleAddTodo} size={ButtonSizes.SMALL}>
          +
        </Button>
    
      </form>

      <div className={`todos ${totalTodos === 5? 'overed' : ''}`}>
        {todos.map((todo, idx) => (
          <Todo
            handlToggleTodo={handlToggleTodo}
            key={idx}
            todo={todo}
            idx={idx}
            EditBtn={EditBtn}
            DeleteBtn={DeleteBtn}
          />
        ))}
      </div>
    </Card>
  );
}

export default App;
