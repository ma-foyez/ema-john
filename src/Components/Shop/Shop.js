import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Shop.css';
import fakeData from '../../fakeData';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Shop = () => {
    const first15 = fakeData.slice(0, 15);
    const [products, setProducts] = useState(first15);
    const [cart, setCart] = useState([]);

    // called local database
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousProduct = productKeys.map(exitingKey => {
            const product = fakeData.find(pd => pd.key === exitingKey);
            product.quantity = savedCart[exitingKey];
            return product;
        })
        setCart(previousProduct);
    }, [])

    const handleAddProduct = (products) => {
        const toBeAddedKey = products.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        } else {
            products.quantity = 1;
            newCart = [...cart, products];
        }
        // count = sameProduct.length;
        // newCart = [...cart, products];
        setCart(newCart);
        addToDatabaseCart(products.key, count);
    }
    return (
        <div className="product">
            <div className="row mt-3">
                <div className="col-md-3">
                    <div className="">
                        <h4 className="Order text-center m-3">Order Summery</h4>
                        <div className="product-cart ml-5">
                            <Cart cart={cart}>
                                <Link to="/review">
                                    <button className="btn product-button"> Review Ordered</button>
                                </Link>
                            </Cart> <hr/> <hr/>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 product-details">
                    <div className="ml-2">
                        {
                            products.map(singleProduct => <Products key={singleProduct.key} showAddToCard={true} products={singleProduct} handleAddProduct={handleAddProduct}></Products>)
                        }

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Shop;