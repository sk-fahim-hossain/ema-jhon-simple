import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const {name, price, stock, seller, img} = props.product;
    return (
        <div className="product">
            <div>
                {img}
            </div>
            <div className="product-name">
                <h4>{name}</h4>
                <br>
                </br>
                <p><small> By:{seller}</small></p>
                <h3>Price: {price}</h3>
                <p>only {stock} are left buy soon.</p>
                <button onClick={() => props.hundleAddProduct(props.product)} className="main-button"><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
                
            </div>
            
        </div>
    );
};

export default Product;