import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Displaybook from '../Displaybook/Displaybook';
import './Display.css'
 

const Display = () => {
    const [boi, setboi] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./books.JSON')
        .then(res => res.json())
        .then(data => setboi(data))
       },   [])

       const handleAddToCart = (booi) => {
           const newCart = [...cart,booi];
           setCart(newCart);
       }
    return (
        <div className="display-container">
            <div className="book-container">
               <h3>Products:{boi.length} </h3>
               {
                   boi.map(booi =><Displaybook  booi = {booi}
                    handleAddToCart={handleAddToCart}></Displaybook>)
               }
            </div>
            <div className="cart-container">
              <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Display;