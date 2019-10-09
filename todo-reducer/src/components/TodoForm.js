import React from 'react';

const TodoForm = ({ 
    addTodo,
    description,
    title,
    setDescription,
    setTitle
 }) => (
    <form onSubmit={addTodo}>
        <input value={title} placeholder={`Todo Title Here`} required={true} onChange={(e) => setTitle(e.target.value)} />
        <input value={description} placeholder={`Todo Description Here`} required={true} onChange={(e) => setDescription(e.target.value)} />
        <button>Add Todo</button>
    </form>
)

export { TodoForm as default }