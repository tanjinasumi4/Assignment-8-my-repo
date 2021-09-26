import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Displaybook.css';

const Displaybook = (props) => {
    console.log(props.booi);
    const { name, img, author, price, publish_year, publisher} = props.booi;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
         <div className="card h-100 m-2 book">
            <div>
            <img src={img} alt="" />
            </div>
           <div className="card-body">
           <h4>Name : {name}</h4>
           <h4>Author : {author}</h4>
           <h4>Price : {price}$</h4>
           <h4>Publish : {publish_year}</h4>
           <h4>Publisher : {publisher}</h4>
           <button onClick ={() => props.handleAddToCart(props.booi)} className="btn-regular">{element}Add to cart</button>
            </div> 
        
        </div>
    );
};

export default Displaybook;