import { useEffect, useMemo, useState } from "react";

import { Card } from "./components/Card";
import { CardSizes } from "./constants/card";
import { Button } from "./components/Button";
import { ButtonSizes } from "./constants/button";
import { Todo } from "./components/Todo";
import { Result } from "./components/Result";

import "./App.css";

function App() {
  const PAGE_SIZE =10

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [currIdx, setCurrIdx] = useState(null);
  const [skip ,setSkip] = useState(0)
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEditTodo = () => {
    const newTodos = [...todos];
    newTodos[currIdx].todo = inputValue;
    setTodos(newTodos);
    setInputValue("");
    setCurrIdx(null);
  };

  const handleAddTodo = () => {
    const newTodo = {
      todo: inputValue,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setInputValue("");
  };

  const handleSaveOrUpdateToDo = (e) => {
    if (inputValue.trim() === "") return;
    const isEditMode = currIdx !== null;
    isEditMode ? handleEditTodo() : handleAddTodo();
  };

  const handlToggleTodo = (idx) => {
    setTodos((prev) =>
      prev.map((todo, currIdx) =>
        idx === currIdx ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const totalTodos = useMemo(() => {
    return todos.length;
  }, [todos]);

  const completedTodos = useMemo(() => {
    return todos.filter((todo) => todo.completed).length;
  }, [todos]);

  const onEditTodo = (idx) => {
    setInputValue(todos[idx].todo);
    setCurrIdx(idx);
  };

  const onDeleteTodo = (idx) => {
    setTodos((prev) => prev.filter((todo, currIdx) => idx !== currIdx));
  };

const fetchTodos= async()=>{
 const response = await fetch(`https://dummyjson.com/todos?limit=${PAGE_SIZE}&skip=${skip}`)
 const data = await response.json() 
 console.log(data.todos)
 setTodos(data.todos)
}

useEffect(()=>{
  fetchTodos()
},[])

  return (
    <Card classNames="parentCard" size={CardSizes.LARGE}>
      <Result completed={completedTodos} total={totalTodos} />
      <form className="form">
        <input onChange={handleChange} value={inputValue} type="text" />
        <Button onClick={handleSaveOrUpdateToDo} size={ButtonSizes.SMALL}>
          {currIdx === null ? "+" : "save"}
        </Button>
      </form>

      <div className={`todos ${totalTodos === 5 ? "overed" : ""}`}>
        {todos.map((todo, idx) => (
          <Todo
            handlToggleTodo={handlToggleTodo}
            key={idx}
            todo={todo}
            idx={idx}
            onEditTodo={onEditTodo}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </div>
    </Card>
  );
}

export default App;
