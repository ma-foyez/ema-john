import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'
const Products = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock, key } = props.products;
    const features = props.products.features;
    return (
        <div className="product container">
            <div className="row">
                <div className="col-md-4">
                    <div className="product-img">
                        <img src={img} alt="product image" className="img-fluid m-4" />
                    </div>
                </div>
                <div className="col-md-7 mr-3">
                    <div className="single-product">
                        <h4 className="product-name">{name}</h4> <br />
                        <h5 className="seller"> By {seller}</h5>
                        <div className="row mt-4">
                            <div className="col-md-6 mt-4">
                                <h5><strong>$ {price}</strong></h5> <br />
                                <h5>Only {stock} left in stock - order soon.</h5>
                            </div>
                            <div className="col-md-6">
                                <div className="feature">
                                    <h4 className="sub-feature">Features</h4>
                                    <ul>
                                        {
                                            features.map(feature => <li>{feature.description}-{feature.value}</li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <button className="btn product-button" onClick={() => props.handleAddProduct(props.products)}><FontAwesomeIcon icon={faShoppingCart} /> Add To Card</button>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Products;