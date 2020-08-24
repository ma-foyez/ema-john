import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Products from '../Products/Products'
const Cart = (props) => {
    const cart = props.cart;
    let singlePrice = 0
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        singlePrice = singlePrice + product.price;
    }
    // shipping cost
    let shipping = 0;
    if (singlePrice > 30) {
        shipping = 0;
    } else if (singlePrice > 15) {
        shipping = 5.99;
    } else if (singlePrice > 0) {
        shipping = 12.50;
    }
    // vat or tax
    const tax = singlePrice / 10;
    const priceFormated = (num) => {
        const pricision = num.toFixed(2);
        return pricision;
    }
    return (
        <div className="text-left mt-5">
            <h4>Items Ordered : <span>{cart.length}</span> </h4>
            <h6>Product Price : <span>$ {singlePrice}</span></h6>
            <h6>Shipping Cost : <span>$ {shipping}</span></h6>
            <h6>Tax or Vat    : <span> $ {priceFormated(tax)}</span></h6>
            <h4>Total Amount  : <span> $ {priceFormated(singlePrice + shipping + tax)}</span></h4>
        </div>
    );
};

export default Cart;