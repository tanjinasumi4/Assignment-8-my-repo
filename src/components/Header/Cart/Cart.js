import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const booi of cart){
        total = total + booi.price;
    }
    return (
        <div>
            <h3>Books Added : {props.cart.length}</h3>
               <h3>Total Cost : {total} $</h3> 
               <button className="btn-buy">Buy now</button>
        </div>
    );
};

export default Cart;