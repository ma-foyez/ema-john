import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItems from '../ReviewItems/ReviewItems';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import happyImage from '../../images/giphy.gif'

const Review = () => {
    const [cart, setCart] = useState([]);
    // remove products handler
    const handleRemoveProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
        console.log("remove clicked", productKey)
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productsKey = Object.keys(savedCart);
        const cartProducts = productsKey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, [])

    // handler place ordered
    const [placeOrder, setPlaceOrder] = useState(false);
    const handlerPlaceOrder = () => {
        console.log("Click place orddere");
        setCart([]);
        processOrder();
        setPlaceOrder(true);
    }
    let thankYou;
    if (placeOrder) {
        thankYou = <div className="row d-flex justify-content-center">
            <div className="col-md-6 m-3">
                <img src={happyImage} alt="" className="w-100 img-thumbnail" />
            </div>
        </div>
    }
    return (
        <div className="product">
            <div className="row mt-3">
                <div className="col-md-3">
                    <div className="">
                        <h4 className="Order text-center m-3">Review Ordered</h4>
                        <div className="product-cart ml-5">
                            <Cart cart={cart}>

                                <Link to="/review">
                                    <button onClick={handlerPlaceOrder} className="btn product-button"> Place Ordered</button>
                                </Link>
                            </Cart>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 product-details">
                    <div className="ml-2">
                        {
                            cart.map(review => <ReviewItems
                                handleRemoveProduct={handleRemoveProduct}
                                key={review.key}
                                reviewItems={review}>

                            </ReviewItems>)
                        }
                        {thankYou}

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Review;