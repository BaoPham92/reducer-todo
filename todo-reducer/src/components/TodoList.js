import React, { useState, useReducer } from 'react';
import todoReducer from '../reducer/todoReducer';

import TodoForm from '../components/TodoForm'

const TodoList = () => {

    // * useState
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    // * useReducer
    const [todoList, todoListDispatch] = useReducer(todoReducer, []);

    // * METHODS
    const addTodo = (e) => {
        e.preventDefault()

        // * DISPATCH TITLE & DESCRIPTION STATE
        todoListDispatch({
            type: 'ADD_TODO',
            title,
            description
        })

        // * RESET STATE
        setDescription('');
        setTitle('');
    }

    const removeTodo = (title) => {

        // * DISPATCH REMOVE TITLE OF SELECTED TODO
        todoListDispatch({
            type: 'REMOVE_TODO',
            title
        })
    }

    return (
        <>
            <h1>Something Here</h1>

            {/* // * TODO FORM COMPONENT
             */}
            <TodoForm
                addTodo={addTodo}
                description={description}
                title={title}
                setDescription={setDescription}
                setTitle={setTitle}
            />
            <ul>
                {/* // * IF TODO'S EXITS, RENDER DATA 
                */}
                {
                    todoList.length > 0
                    &&
                    todoList.map((item, key) =>
                        <li key={key}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <button onClick={() => removeTodo(item.title)}>x</button>
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export { TodoList as default }