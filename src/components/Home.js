import React, { useEffect, useState } from 'react'
import TodoCard from './TodoCard'
import "./Home.css"
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate()
    const [search, setSearch] = useState()
    const [todos, setTodos] = useState([]); // Note that the state is an array
    const [filteredTodos, setfilteredTodos] = useState([])

    useEffect(() => {
        const todosList = JSON.parse(localStorage.getItem('todos') || '[]');
        setTodos(todosList);
        setfilteredTodos(todosList)
        console.log(todosList);
    }, []);

    const searchHandle = (e) => {
        const value = e.target.value
        setSearch(value)

        const filteredTodos = todos.filter(todo => {
            return (todo.title && todo.title.includes(value)) || (todo.description && todo.description.includes(value))
        })
        setfilteredTodos(filteredTodos)

    }


    const addHandle = () => {
        const id = uuid()

        const newTodo = { id: id, title: "", description: "", marked: false }
        navigate(`/${id}`, { state: { todo: newTodo } })
    }

    const clearHandle = () => {
        localStorage.clear()
        setfilteredTodos([])
    }

    return (
        <>
            
            <div class="container">
                <input className="search-text" value={search} onChange={e => searchHandle(e)} type="text" placeholder="Search note" />
                <button className="button-add" onClick={addHandle}>Add</button>
                <button className="button-clear" onClick={clearHandle}>Clear</button>
                {
                    filteredTodos.map(todo => (
                        <div className="todo-card" key={todo.id}>
                            <TodoCard todo={todo} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Home