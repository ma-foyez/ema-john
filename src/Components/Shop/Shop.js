import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Shop.css';
import fakeData from '../../fakeData';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
const Shop = () => {
    const first15 = fakeData.slice(0, 15);
    const [products, setProducts] = useState(first15);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (products) => {
        const newCart = [...cart, products];
        setCart(newCart);
    }
    return (
        <div className="product">
            <div className="row mt-3">
                <div className="col-md-3">
                    <div className="">
                        <h4 className="Order text-center m-3">Order Summery</h4>
                        <div className="product-cart ml-5">
                            <Cart cart={cart}></Cart>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 product-details">
                    <div className="ml-2">
                        {
                            products.map(singleProduct => <Products products={singleProduct} key={singleProduct.key} handleAddProduct={handleAddProduct}></Products>)
                        }

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Shop;