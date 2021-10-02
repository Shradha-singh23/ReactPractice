import React,{useState} from 'react';
import './Items.css'

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
        <div className="dishes-container">
            <img src={dish.img} alt={dish.name} className="dish-image"/>
            <div className="dish-details">
                <h2 className="dish-title">{dish.name}</h2>
                <p className="dish-price">Price: Rs. {dish.price}</p>
            </div>
            <div className="quantity-container">
                <p className="quantity"> Quantity:</p>
                <div className ="item-count-container">
                    <button onClick={onAdd} className="add-remove-buttons">+</button>
                    <span className="item-count">{count}</span>
                    <button onClick={removeFromCart} className="add-remove-buttons">-</button>
                </div>
            </div>
            
        </div>

    )
}