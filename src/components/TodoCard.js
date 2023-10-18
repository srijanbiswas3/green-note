import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TodoCard.css'; // Import your CSS file

function TodoCard(props) {
    const navigate = useNavigate();
    const [check, setCheck] = useState(false)
    const handleClick = () => {
        navigate(
            `${props.todo.id}`,
            {
                state: {
                    todo: props.todo,
                },
            }
        );
    };

    const handleDelete = () => {
        const todoList = JSON.parse(localStorage.getItem('todos') || '[]');
        const deleteTodo = todoList.find(x => x.id === props.todo.id)
        if (deleteTodo) {
            const updatedTodoList = todoList.filter(todo => todo.id !== props.todo.id);
            localStorage.setItem('todos', JSON.stringify(updatedTodoList));
        }
    }
    const handleCheck = () => {

        setCheck(!check)

        if (check) {

        }
    }
    return (
        <>
            <input type="checkbox" checked={check} className='card-checkbox' onChange={handleCheck} />
            <div className="card-container" onClick={handleClick}>
                <strong className={`card-title ${check ? 'cross-through' : ''}`}>{props.todo.title}</strong>
                <hr className='hor-line' />
                <p className={`card-description ${check ? 'cross-through' : ''}`}>{props.todo.description}</p>
            </div>
            <button className="card-delete-button" onClick={handleDelete}>
                Delete
            </button>
        </>


    );
}

export default TodoCard;
