import React, { useState } from 'react';
import './TodoList.css'
import TodoItem from './TodoItem';

export default function TodoList(){
    const [task,setTask] = useState('');
    const [items,setItems] = useState([]);

    function onKeyDown(e){
        if (e.key === "Enter") {
            addTask();
        }
    };

    function handleTaskChange(e){
        setTask(e.target.value);
    }

    function addTask(){
        if (task === '') return;                           
        const newTask = {
            text: task,
            isCompleted: false
        }
        setItems([newTask,...items])
        setTask("");
    }

    function toggleCompletedTask(item){
        const newArray = items.map(i => {
            if (i.text === item.text){  
                i.isCompleted = !i.isCompleted;
            }
            return i;
        })
        setItems(newArray);
    }

    function deleteTask(item){
        const filteredArray = items.filter(t => t.text !== item.text)
        setItems(filteredArray);
    }

    return(
        <div className='container'>
            <input 
                placeholder="Type Here" 
                value={task} 
                onChange={handleTaskChange} 
                className='taskbar'
                onKeyDown={onKeyDown}
            />
            <button onClick={addTask} className='addbutton'>+</button>
            <div className='task-container'>
                <div className='ongoing-task-container'>
                    <h3>Ongoing Task </h3>
                    {items.filter(item => !item.isCompleted).map((item,index) => (
                            <TodoItem 
                                item={item} 
                                key={index} 
                                toggleCompletedTask={toggleCompletedTask}
                                deleteTask={deleteTask}
                            />
                        )
                    )}     
                </div>
                <div className='completed-task-container'>
                    <h3>Completed Task </h3>
                    {items.filter(item => item.isCompleted).map((item,index) =>(
                            <TodoItem 
                                item={item} 
                                key={index} 
                                toggleCompletedTask={toggleCompletedTask}
                                deleteTask={deleteTask}
                            />
                        )
                    )}     
                </div>
            </div>
        </div>
    )
}