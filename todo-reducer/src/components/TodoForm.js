import React from 'react';

const TodoForm = ({ 
    addTodo,
    description,
    title,
    setDescription,
    setTitle
 }) => (
    <form onSubmit={addTodo}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <input value={description} onChange={(e) => setDescription(e.target.value)} />
        <button>add note</button>
    </form>
)

export { TodoForm as default }