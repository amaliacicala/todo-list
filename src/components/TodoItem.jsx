import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export function TodoItem({ id, title, done, handleDelete, handleCheck }) {
    return (
        <div className="task-container">
            <span id="task">
                <input 
                    type="checkbox" 
                    className="checkbox" 
                    onChange={() => handleCheck(id)}
                    checked={done ? true : false}
                />
                <span className={"task-name " + (done ? "strike" : "")}>{title}</span>
            </span>
            
            <button 
                className="delete-task"
                onClick={() => handleDelete(id)}
            >
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
        </div>
    )
}