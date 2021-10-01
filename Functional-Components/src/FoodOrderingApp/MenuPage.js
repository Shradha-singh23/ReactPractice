import React from 'react';    
import Counter from './Counter'

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
    return(
        <div>
            {dishes.map((dish, index) => {
               return <Counter dish={dish} index={index}/> 
            })}   
        </div>
    )
}