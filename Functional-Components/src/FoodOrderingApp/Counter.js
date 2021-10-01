import React,{useState} from 'react';

export default function Counter({dish, index}){
    const[count,setCount] = useState(0);

    const Add = () => {
        setCount(count+1)
    }

    const Remove = () => {
        setCount((prevCount) => prevCount - 1)
    }
    return(
        <div>
            <div key={index}>
                <h2>{dish.name}</h2>
                <p>{dish.price}</p>
                <p> Quantity:</p>
                <button onClick={Add}>+</button>
                <span>{count}</span>
                <button onClick={Remove}>-</button>
            </div>
        </div>
    )
}