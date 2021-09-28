import React from 'react';

export default function TodoItem({item, toggleCompletedTask, deleteTask}){
    const handleCompleted = () => {
        toggleCompletedTask(item) 
    }
    const handleDelete = () => {
        deleteTask(item)
    }
    return (
        <div>
            <span onClick={handleCompleted} className={item.isCompleted ? 'completed-task' : 'ongoing-task'}>
                {item.text}
            </span>
            <button className='delete-button' onClick={handleDelete}>X</button>
        </div>
    )
}