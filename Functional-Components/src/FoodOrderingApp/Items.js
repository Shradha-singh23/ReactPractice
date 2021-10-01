import React,{useState} from 'react';

export default function Items({dish, cart, setCart}){
    const[count, setCount] = useState(0);

    const onAdd = () => {
        setCount(count+1)
        if (cart.length===0){
            addIntoCart();
            }
        const exist = cart.find((item) => item.name === dish.name);
        if(exist){
            setCart(
                cart.map((item) => item.name === dish.name ? {...exist, quantity: exist.quantity + 1 } : item
                )
            )
        } else {
            addIntoCart();
        }
    }
    const removeFromCart = () => {
        setCount((prevCount) => prevCount - 1)
        const exist = cart.find((item) => item.name === dish.name)
        if(exist.quantity === 1){
            setCart(
                cart.filter((item) => item.name !== dish.name)
                )
        } else{
            setCart(
                cart.map((item) => item.name === dish.name ? {...exist, quantity: exist.quantity - 1} : item)
            )
        }
    }

    const addIntoCart = (count) => {
        const newItem = {
            name: dish.name,
            price: dish.price,
            quantity: 1
        }
        setCart([...cart, newItem])
    }

    return(
        <div>
            <h2>{dish.name}</h2>
            <p>{dish.price}</p>
            <p> Quantity:</p>
            <button onClick={onAdd}>+</button>
            <span>{count}</span>
            <button onClick={removeFromCart}>-</button>
        </div>

    )
}