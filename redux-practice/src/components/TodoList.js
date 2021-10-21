import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteItem, handleTaskChange, toggleCompletedTask } from '../redux/action';
import './TodoList.css'

export default function TodoList() {
    const task = useSelector((state) => state.task);
    const items = useSelector((state) => state.items);

    const dispatch = useDispatch();
    return(
        <div className='container'>
            <input 
                placeholder="Type Here" 
                value={task} 
                onChange={e => dispatch(handleTaskChange(e))} 
                className='taskbar'
                onKeyDown={e => e.key === 'Enter' && dispatch(addTask())}
            />
            <button onClick={() => dispatch(addTask())} className='addbutton'>+</button>
            <div className='task-container'>
                <div className='ongoing-task-container'>
                    <h3>Ongoing Task </h3>
                    {items.filter(item => !item.completed).map((item,index) => (
                            <div>
                                <span onClick={() => dispatch(toggleCompletedTask(item))} className={item.completed ? 'completed-task' : 'ongoing-task'}>
                                    {item.text}
                                </span>
                                <button className='delete-button' onClick={() => dispatch(deleteItem(item))}>X</button>
                            </div>
                        )
                    )}
                </div>
                <div className='completed-task-container'>
                    <h3>Completed Task </h3>
                    {items.filter(item => item.completed).map((item,index) => (
                            <div>
                                <span onClick={() => dispatch(toggleCompletedTask(item))} className={item.completed ? 'completed-task' : 'ongoing-task'}>
                                    {item.text}
                                </span>
                                <button className='delete-button' onClick={() => dispatch(deleteItem(item))}>X</button>
                            </div>
                        )
                    )}    
                </div>
            </div>
        </div>
    )
}