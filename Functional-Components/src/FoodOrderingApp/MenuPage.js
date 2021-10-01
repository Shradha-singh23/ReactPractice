import React,{useState} from 'react';    
import Items from './Items'

const dishes =[
    {
        name: "Salad",
        price: 180
    },
    {
        name: "Idli",
        price: 30
    },
    {
        name: "Dosa",
        price: 50
    }
]

export default function MenuPage (){
    const[cart, setCart] = useState([]);
    return(
        <div>
            {dishes.map((dish, index) => {
               return <Items dish={dish} key={index} cart={cart} setCart={setCart}/> 
            })}   
            {cart.map((item,index) => {
                return(
                    <div key={index}>
                        <h3>{item.name}</h3>
                        <p>{item.quantity}</p>
                    </div>)         
            })}            
        </div>
    )
}