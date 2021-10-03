import React,{useState} from 'react';
import './Items.css'

export default function Items({dish, cart, setCart}){
    const[count, setCount] = useState(0);

    const onAddCart = () => {
        setCount((prevCount) => prevCount + 1)
        const exist = cart.find((item) => item.name === dish.name);
        if(exist){
            setCart((prevCart) => {
                return prevCart.map((item) => {
                    if (item.name === dish.name){
                        item.quantity++
                    }
                    return item;
                })
            })
        } else {
            const newItem = {
                name: dish.name,
                price: dish.price,
                quantity: 1
            }
            setCart((prevCart) => [...prevCart, newItem])
        }
    }
    const onRemoveCart = () => {
        setCount((prevCount) => prevCount - 1)
        const exist = cart.find((item) => item.name === dish.name)
        if(exist.quantity === 1) {
            setCart((prevCart) => prevCart.filter((item) => item.name !== dish.name))
        } else{
            setCart((prevCart) => {
                return prevCart.map((item) => {
                    if (item.name === dish.name){
                        item.quantity--
                    }
                    return item;
                })
            })
        }
    }

    return(
        <div className="dishes-container">
            <img src={dish.img} alt={dish.name} className="dish-image"/>
            <div className="dish-details">
                <h3 className="dish-title">{dish.name}</h3>
                <p className="dish-price">Price: Rs. {dish.price}</p>
            </div>
            <div className="quantity-container">
                <p className="quantity"> Quantity:</p>
                <div className ="item-count-container">
                    <button onClick={onAddCart} className="add-remove-buttons">+</button>
                    <span className="item-count">{count === 0 ? "Add" : count}</span>
                    {count > 0 && <button onClick={onRemoveCart} className="add-remove-buttons">-</button>}
                </div>
            </div>
        </div>

    )
}