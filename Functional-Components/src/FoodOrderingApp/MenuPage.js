import React,{useState} from 'react';    
import Items from './Items'
import Header from './Header';
import './MenuPage.css'

const dishes =[
    {
        name: "Salad",
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FsYWR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
        price: 180
    },
    {
        name: "Idli",
        img: "https://vaya.in/recipes/wp-content/uploads/2018/02/Idli-and-Sambar-1.jpg",
        price: 30
    },
    {
        name: "Dosa",
        img: "https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg",
        price: 50
    }
]

export default function MenuPage (){
    const[cart, setCart] = useState([]);
    return(
        <div>
            <Header />
            <div className="main-container">
                <div className="menu-container">
                    <h2 className="menu-heading">Menu</h2>
                    <hr className="heading-horizontali-line"/>
                    {dishes.map((dish, index) => {
                    return <Items dish={dish} key={index} cart={cart} setCart={setCart}/> 
                    })} 
                </div>  
                <div className="cart-container">
                    <h2 className="menu-heading">Your Orders</h2>
                    <hr className="heading-horizontali-line"/>
                    {cart.length === 0 && <span className="dish-title">Cart is Empty</span>}
                    {cart.map((item,index) => {
                        return(
                            <div key={index} className="cart-quantity-container">
                                <p className="dish-title">{item.name}</p>
                                <span className="cart-quantity-item-price">Price: {item.price} * {item.quantity}</span>
                                <span className="cart-quantity-item-price"> = Rs. {item.price*item.quantity}</span>
                            </div>)    
                    })} 
                    <hr className="heading-horizontali-line"/>
                    <div className="subTotal-container">
                        <h2 className="heading">Sub Total:</h2>
                        <span className="total-amount"> Rs. {cart.reduce((prevValue, item) => prevValue + item.price * item.quantity, 0)} </span>
                    </div>
                </div>  
                
            </div>         
        </div>
    )
}