import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TodoCard.css"; // Import your CSS file

export const TodoCard = ({ todo, deleteTodo }) => {
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);

  const handleClick = () => {
    navigate(`${todo.id}`, {
      state: {
        todo,
      },
    });
  };

  const handleDelete = () => {
    const todoList = JSON.parse(localStorage.getItem("todos") || "[]");
    const toBeDeletedToDo = todoList.find((x) => x.id === todo.id);
    if (toBeDeletedToDo) {
      const updatedTodoList = todoList.filter((t) => t.id !== todo.id);
      localStorage.setItem("todos", JSON.stringify(updatedTodoList));
      // Update the state of the parent. Parent will trigger a render of all the todos.
      deleteTodo(toBeDeletedToDo.id);
    }
  };

  const handleCheck = () => {
    setCheck((check) => !check);

    if (check) {
    }
  };
  return (
    <>
      <input
        type="checkbox"
        checked={check}
        className="card-checkbox"
        onChange={handleCheck}
      />
      <div className="card-container" onClick={handleClick}>
        <strong className={`card-title ${check ? "cross-through" : ""}`}>
          {todo.title}
        </strong>
        <hr className="hor-line" />
        <p className={`card-description ${check ? "cross-through" : ""}`}>
          {todo.description}
        </p>
      </div>
      <button className="card-delete-button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};
