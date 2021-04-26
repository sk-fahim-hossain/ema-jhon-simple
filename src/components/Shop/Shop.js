import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
   const [products, setProducts] = useState(fakeData)
   const [cart, setCart] = useState([])

   const hundleAddProduct = (product) =>{
       console.log('product added', product);
       const newCart = [...cart, product];
       setCart(newCart);
   }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd =><Product hundleAddProduct={hundleAddProduct} product={pd}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
    
};

export default Shop;