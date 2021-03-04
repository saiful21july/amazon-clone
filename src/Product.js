import React from 'react';
import "./Product.css";
import lean from "./images/lean start.jpg"
function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>The lean startup</p>
                <p className="product__price">
                    <small>€</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                <p>⭐</p>
                </div>
                </div>
                <img src={lean} alt=""/>
                <button>Add to basket</button>
        
            
                </div>
    )
}

export default Product
