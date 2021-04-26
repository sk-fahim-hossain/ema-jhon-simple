import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,prd) => total + prd.price, 0);

    let shipping = 0;
    if(total >35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
   
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    return (
        <div>
            <h3>Ordered Summary</h3>
            <h4>Items Orderred:{props.cart.length}</h4>
            <p><small>Shipping Cost :{shipping}</small></p>
            <p><small>Tax + VAT:{tax}</small></p>
            <h4>Total:{grandTotal}</h4>
        </div>
    );
};

export default Cart;