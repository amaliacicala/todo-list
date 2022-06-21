import React from 'react'
import { TodoItem } from "./TodoItem";

export function TodoList({ handleDelete, handleCheck, tasks }) {
    if (tasks.length <= 0) {
        return (
            <div className="empty">
                <h3>Nothing to do 😌</h3>
            </div>
        )
    }
    return (
        <section id="task-list">
            {tasks 
                && tasks.map((task) => (
                    <TodoItem 
                        key={task.id} 
                        id={task.id}
                        title={task.title} 
                        handleDelete={handleDelete} 
                        handleCheck={handleCheck}
                        done={task.done}
                    />
                ))}
        </section>
    )
}