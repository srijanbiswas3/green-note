import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './TodoDetails.css'; // Import your CSS file


function TodoDetails() {
    let location = useLocation();
    let navigate = useNavigate();

    //console.log("State: "+location.state)
    const [title, settitle] = useState(location.state.todo.title);
    const [desc, setdesc] = useState(location.state.todo.description);

    const saveHandle = () => {
        const todoList = JSON.parse(localStorage.getItem('todos') || '[]');

        // Find the index of the todo item with the same ID
        const existingTodoIndex = todoList.findIndex(todo => todo.id === location.state.todo.id);

        if (existingTodoIndex !== -1) {
            // If the todo item with the same ID exists, update its properties
            todoList[existingTodoIndex].title = title;
            todoList[existingTodoIndex].description = desc;
        } else {
            // If the todo item doesn't exist, add it as a new todo
            const newTodo = {
                id: location.state.todo.id,
                title: title,
                description: desc
            };
            todoList.push(newTodo);
        }

        // Update the todos in local storage
        localStorage.setItem('todos', JSON.stringify(todoList));

        navigate('/');
    }
    return (
      
        <div className="detail-container">
        <strong>
          <input
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="detail-title-input"
            placeholder="Title"
          />
        </strong>
        <p>
          <textarea
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
            className="detail-description-input"
            placeholder="Enter Note"
          />
        </p>
        <button className="detail-save-button" onClick={saveHandle}>
          Save
        </button>
      </div>
      
      
    );
}

export default TodoDetails;
