import React, { useState } from 'react';
import './App.css'

export default function App(){
    const [task,setTask] = useState('');
    const [items,setitems] = useState([]);


    function holdTask(e){
        setTask(e.target.value);
    }

    function addTask(){
        if (task === '') return                             
        const newTask = {
            text: task,
            isCompleted: false
        }
        setitems([newTask,...items])
        setTask("");
    }

    function toggleCompletedTask(item){
        const newArray = items.map(function(i){
            if (i.text === item.text){  
                i.isCompleted = !i.isCompleted;
            }
            return i;
        })
        setitems(newArray);
    }

    function deleteTask(item){
        const filteredArray = items.filter(function(t){
            return t.text !== item.text 
        })
        setitems(filteredArray);
    }

    return(
        <div className='container'>
            <input placeholder="Type Here" value={task} onChange={holdTask} className='taskbar'/>
            <button onClick={addTask} className='addbutton'>+</button>
            <div className='task-container'>
                <div className='ongoing-task-container'>
                    <h3>Ongoing Task </h3>
                    {items.filter(i => {
                        return (!i.isCompleted)
                    }).map((item,index) =>{
                        return(
                            <div key={index}>
                            <span onClick={() => toggleCompletedTask(item)} className='ongoing-task'>
                                {item.text}
                            </span>
                            <button className='delete-button' onClick={() => deleteTask(item)}>X</button>
                            </div>
                        )
                    })}     
                </div>
                <div className='completed-task-container'>
                    <h3>Completed Task </h3>
                    {items.filter(i => {
                        return (i.isCompleted)
                    }).map((item,index) =>{
                        return(
                            <div key={index}>
                            <span onClick={() => toggleCompletedTask(item)} className='completed-task'>
                                {item.text}
                            </span>
                            <button className='delete-button' onClick={() => deleteTask(item)}>X</button>
                            </div>
                        )
                    })}     
                </div>
            </div>
        </div>
    )
}