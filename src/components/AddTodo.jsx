import React from 'react'

export function AddTodo({ task, onChange, onSubmit, error }) {
    return (
        <section id="new-task">
            <form onSubmit={onSubmit}>
            <input 
                type="text" 
                id="input" 
                placeholder="What needs to be done? 🤔" 
                value={task}
                onChange={onChange}
                autoFocus
            />
            <button type="submit" id="add-task">Add Task</button>
            </form>
            {error && <p className="error">{error}</p>}
        </section>
    )
}