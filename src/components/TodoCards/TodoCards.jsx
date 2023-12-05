import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { TodoCard } from "..";
import { useSearchContext } from "../../context";
import { useNavigate } from "react-router-dom";

export const TodoCards = () => {
  const [todos, setTodos] = useState([]); // Note that the state is an array
  const { currentSearch } = useSearchContext();
  const navigate = useNavigate();

  useEffect(() => {
    // Read Local Storage On Load
    const todosList = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(todosList);
    console.log(todosList);
  }, []);

  useEffect(() => {
    const todosList = JSON.parse(localStorage.getItem("todos") || "[]");
    if (currentSearch !== "") {
      setTodos((todos) =>
        todos.filter((todo) => {
          return (
            (todo.title && todo.title.includes(currentSearch)) ||
            (todo.description && todo.description.includes(currentSearch))
          );
        })
      );
    } else setTodos(todosList);
  }, [currentSearch]);

  const addHandle = () => {
    const id = uuid();

    const newTodo = { id: id, title: "", description: "", marked: false };
    navigate(`/${id}`, { state: { todo: newTodo } });
  };

  const clearHandle = () => {
    localStorage.clear();
    setTodos([]);
  };

  const handleDeleteTodo = (id) => {
    // Updating the todos State, will trigger a render of all the available todos.
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <button className="button-add" onClick={addHandle}>
        Add
      </button>
      <button className="button-clear" onClick={clearHandle}>
        Clear
      </button>
      {todos.map((todo) => (
        <div className="todo-card" key={todo.id}>
          <TodoCard todo={todo} deleteTodo={handleDeleteTodo} />
        </div>
      ))}
    </>
  );
};
